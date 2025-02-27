import { SortRule } from "../../typings/sorting";
<<<<<<< HEAD
import { action, computed, IReactionDisposer, makeObservable, reaction, comparer } from "mobx";
=======
import { action, computed, IReactionDisposer, makeObservable, reaction } from "mobx";
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
import { DatagridContainerProps } from "../../../typings/DatagridProps";
import { getHash } from "../../utils/columns-hash";
import { ColumnGroupStore } from "./ColumnGroupStore";
import {
    ColumnPersonalizationSettings,
    GridPersonalizationStorageSettings
} from "../../typings/personalization-settings";
import { PersonalizationStorage } from "../storage/PersonalizationStorage";
import { AttributePersonalizationStorage } from "../storage/AttributePersonalizationStorage";
import { LocalStoragePersonalizationStorage } from "../storage/LocalStoragePersonalizationStorage";
<<<<<<< HEAD
import { ColumnId } from "../../typings/GridColumn";
import { FiltersSettingsMap } from "@mendix/widget-plugin-filtering/typings/settings";
import { HeaderFiltersStore } from "@mendix/widget-plugin-filtering/stores/HeaderFiltersStore";
import { error, Result, value } from "@mendix/widget-plugin-filtering/result-meta";
export class GridPersonalizationStore {
    private readonly gridName: string;
    private readonly gridColumnsHash: string;
    private readonly schemaVersion: GridPersonalizationStorageSettings["schemaVersion"] = 2;
    private readonly storeFilters: boolean;
=======

export class GridPersonalizationStore {
    private readonly gridName: string;
    private readonly gridColumnsHash: string;
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

    private storage: PersonalizationStorage;

    private disposers: IReactionDisposer[] = [];

<<<<<<< HEAD
    constructor(
        props: DatagridContainerProps,
        private columnsStore: ColumnGroupStore,
        private headerFilters: HeaderFiltersStore
    ) {
        this.gridName = props.name;
        this.gridColumnsHash = getHash(this.columnsStore._allColumns, this.gridName);
        this.storeFilters = props.storeFiltersInPersonalization;
=======
    constructor(props: DatagridContainerProps, private columnsStore: ColumnGroupStore) {
        this.gridName = props.name;
        this.gridColumnsHash = getHash(this.columnsStore._allColumns, this.gridName);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

        makeObservable<GridPersonalizationStore, "applySettings">(this, {
            settings: computed,

            applySettings: action
        });

        if (props.configurationStorageType === "localStorage") {
            this.storage = new LocalStoragePersonalizationStorage(`${this.gridName}_${this.gridColumnsHash}`);
        } else {
            this.storage = new AttributePersonalizationStorage(props);
        }

<<<<<<< HEAD
        this.disposers.push(this.setupReadReaction());
        this.disposers.push(this.setupWriteReaction());
=======
        this.disposers.push(
            reaction(
                () => this.storage.settings,
                settings => {
                    if (settings !== undefined && JSON.stringify(settings) !== JSON.stringify(this.settings)) {
                        this.applySettings(settings);
                    }
                },
                { fireImmediately: true }
            )
        );

        this.disposers.push(
            reaction(
                () => this.settings,
                settings => {
                    this.storage.updateSettings(settings);
                }
            )
        );
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    }

    dispose(): void {
        this.disposers.forEach(d => d());
    }

    updateProps(props: DatagridContainerProps): void {
        this.storage.updateProps?.(props);
    }

<<<<<<< HEAD
    private setupReadReaction(): IReactionDisposer {
        return reaction<GridPersonalizationStorageSettings | null, true>(
            () => {
                const maybeSettings = this.storage.settings;
                const result = this.readSettings(this.gridName, this.gridColumnsHash, maybeSettings);
                if (result.hasError) {
                    if (result.error instanceof InvalidSettingsError) {
                        console.warn(this.gridName, result.error);
                        console.warn(this.gridName, "Erase settings to prevent errors.");
                        this.storage.updateSettings(undefined);
                    }
                    return null;
                }
                return result.value;
            },
            settings => {
                if (settings == null) {
                    return;
                }
                this.applySettings(settings);
            },
            { fireImmediately: true, equals: comparer.structural }
        );
    }

    private setupWriteReaction(): IReactionDisposer {
        return reaction(
            () => this.settings,
            settings => {
                this.storage.updateSettings(settings);
            },
            { delay: 250, equals: comparer.structural }
        );
    }

    private applySettings(settings: GridPersonalizationStorageSettings): void {
        this.columnsStore.setColumnSettings(toColumnSettings(settings));
        this.columnsStore.setColumnFilterSettings(settings.columnFilters);
    }

    private readSettings(
        gridName: string,
        gridColumnsHash: string,
        settings: unknown
    ): Result<GridPersonalizationStorageSettings, Error> {
        if (settings == null) {
            return error(new UndefinedSettingsError());
        }
        if (!this.isSettingsObject(settings)) {
            return error(new InvalidSettingsError());
        }
        if (settings.name !== gridName || settings.settingsHash !== gridColumnsHash) {
            return error(
                new Error(
                    `Widget configuration for (${gridName})[hash:${gridColumnsHash}]` +
                        ` doesn't match provided settings (${settings.name})[hash:${settings.settingsHash}].` +
                        " Restoring those settings might result in errors."
                )
            );
        }
        return value(settings);
    }

    private isSettingsObject(settings: unknown): settings is GridPersonalizationStorageSettings {
        return (
            typeof settings === "object" &&
            settings !== null &&
            "name" in settings &&
            "settingsHash" in settings &&
            "schemaVersion" in settings &&
            settings.schemaVersion === this.schemaVersion
        );
    }

    get settings(): GridPersonalizationStorageSettings {
        return toStorageFormat(
            this.gridName,
            this.gridColumnsHash,
            this.columnsStore.columnSettings,
            this.storeFilters ? this.columnsStore.filterSettings : new Map(),
            this.storeFilters ? this.headerFilters.settings : new Map()
        );
    }
}

function toColumnSettings(settings: GridPersonalizationStorageSettings): ColumnPersonalizationSettings[] {
=======
    private applySettings(settings: GridPersonalizationStorageSettings): void {
        this.columnsStore.applySettings(fromStorageFormat(this.gridName, this.gridColumnsHash, settings));
    }

    get settings(): GridPersonalizationStorageSettings {
        return toStorageFormat(this.gridName, this.gridColumnsHash, this.columnsStore.settings);
    }
}

function fromStorageFormat(
    gridName: string,
    gridColumnsHash: string,
    settings: GridPersonalizationStorageSettings
): ColumnPersonalizationSettings[] {
    if (settings.name !== gridName || settings.settingsHash !== gridColumnsHash) {
        console.warn(
            `Widget configuration for (${gridName})[hash:${gridColumnsHash}] doesn't match provided settings (${settings.name})[hash:${settings.settingsHash}]. Restoring those settings might result in errors.`
        );
    }
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    return settings.columns.map(c => {
        const sortIndex = settings.sortOrder.findIndex(s => s[0] === c.columnId);

        return {
            columnId: c.columnId,
            size: c.size,
            hidden: c.hidden,

            orderWeight: settings.columnOrder.indexOf(c.columnId),

            sortWeight: sortIndex !== -1 ? sortIndex + 1 : undefined,
<<<<<<< HEAD
            sortDir: sortIndex !== -1 ? settings.sortOrder[sortIndex]?.[1] : undefined
=======
            sortDir: sortIndex !== -1 ? settings.sortOrder[sortIndex]?.[1] : undefined,

            filterSettings: undefined
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        };
    });
}

function toStorageFormat(
    gridName: string,
    gridColumnsHash: string,
<<<<<<< HEAD
    columnsSettings: ColumnPersonalizationSettings[],
    columnFilters: FiltersSettingsMap<ColumnId>,
    groupFilters: FiltersSettingsMap<string>
=======
    columnsSettings: ColumnPersonalizationSettings[]
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
): GridPersonalizationStorageSettings {
    const sortOrder = columnsSettings
        .filter(c => c.sortDir && c.sortWeight !== undefined)
        .sort((a, b) => a.sortWeight! - b.sortWeight!)
        .map(c => [c.columnId!, c.sortDir!] as SortRule);

    const columnOrder = [...columnsSettings].sort((a, b) => a.orderWeight - b.orderWeight).map(c => c.columnId);

    return {
        name: gridName,
<<<<<<< HEAD
        schemaVersion: 2,
=======
        schemaVersion: 1,
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        settingsHash: gridColumnsHash,
        columns: columnsSettings.map(c => ({
            columnId: c.columnId,
            size: c.size,
            hidden: c.hidden,
            filterSettings: undefined
        })),
<<<<<<< HEAD

        columnFilters: Array.from(columnFilters),
        groupFilters: Array.from(groupFilters),

=======
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        sortOrder,
        columnOrder
    };
}
<<<<<<< HEAD

class InvalidSettingsError extends Error {
    constructor() {
        super("Invalid settings object");
        this.name = "InvalidSettingsError";
    }
}
class UndefinedSettingsError extends Error {
    constructor() {
        super("Settings is undefined");
        this.name = "UndefinedSettingsError";
    }
}
=======
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

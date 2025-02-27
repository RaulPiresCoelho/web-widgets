<<<<<<< HEAD
import { generateUUID } from "@mendix/widget-plugin-platform/framework/generate-uuid";
import { FilterCondition } from "mendix/filters";
import { and } from "mendix/filters/builders";
import { DatagridContainerProps } from "../../../typings/DatagridProps";
import { ProgressStore } from "../../features/data-export/ProgressStore";
import { SortInstruction } from "../../typings/sorting";
import { StaticInfo } from "../../typings/static-info";
import { ColumnGroupStore } from "./ColumnGroupStore";
import { GridPersonalizationStore } from "./GridPersonalizationStore";
import { HeaderFiltersStore } from "@mendix/widget-plugin-filtering/stores/HeaderFiltersStore";
import { compactArray, fromCompactArray, isAnd } from "@mendix/widget-plugin-filtering/condition-utils";
=======
import { ColumnGroupStore } from "./ColumnGroupStore";
import { DatagridContainerProps } from "../../../typings/DatagridProps";
import { HeaderFiltersStore } from "./HeaderFiltersStore";
import { FilterCondition } from "mendix/filters";
import { SortInstruction } from "../../typings/sorting";
import { GridPersonalizationStore } from "./GridPersonalizationStore";
import { ProgressStore } from "../../features/data-export/ProgressStore";
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

export class RootGridStore {
    columnsStore: ColumnGroupStore;
    headerFiltersStore: HeaderFiltersStore;
    settingsStore: GridPersonalizationStore;
    progressStore: ProgressStore;
<<<<<<< HEAD
    staticInfo: StaticInfo;

    constructor(props: DatagridContainerProps) {
        this.setInitParams(props);
        this.staticInfo = {
            name: props.name,
            filtersChannelName: `datagrid/${generateUUID()}`
        };

        const [columnsViewState, headerViewState] = this.getDsViewState(props);
        this.columnsStore = new ColumnGroupStore(props, this.staticInfo, columnsViewState);
        this.headerFiltersStore = new HeaderFiltersStore(props, this.staticInfo, headerViewState);
        this.settingsStore = new GridPersonalizationStore(props, this.columnsStore, this.headerFiltersStore);
        this.progressStore = new ProgressStore();
    }

    get isLoaded(): boolean {
        return this.columnsStore.loaded;
    }

    /**
     * This method should always "read" filters from columns.
     * Otherwise computed is suspended.
     */
    get conditions(): FilterCondition {
        const columns = this.columnsStore.conditions;
        const header = this.headerFiltersStore.conditions;
        return and(compactArray(columns), compactArray(header));
    }

    get sortInstructions(): SortInstruction[] | undefined {
        return this.columnsStore.sortInstructions;
    }

    setup(): (() => void) | void {
        return this.headerFiltersStore.setup();
    }

=======

    constructor(props: DatagridContainerProps) {
        this.setInitParams(props);
        this.columnsStore = new ColumnGroupStore(props);
        this.headerFiltersStore = new HeaderFiltersStore(props);
        this.settingsStore = new GridPersonalizationStore(props, this.columnsStore);
        this.progressStore = new ProgressStore();
    }

>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    dispose(): void {
        this.settingsStore.dispose();
    }

    private setInitParams(props: DatagridContainerProps): void {
        if (props.pagination === "buttons") {
            props.datasource.requestTotalCount(true);
        }

        // Set initial limit
        props.datasource.setLimit(props.pageSize);
    }

<<<<<<< HEAD
    // Mirror operation from "condition";
    private getDsViewState({
        datasource
    }: DatagridContainerProps):
        | [columns: Array<FilterCondition | undefined>, header: Array<FilterCondition | undefined>] {
        if (!datasource.filter) {
            return [[], []];
        }
        if (!isAnd(datasource.filter)) {
            return [[], []];
        }
        if (datasource.filter.args.length !== 2) {
            return [[], []];
        }
        const [columns, header] = datasource.filter.args;
        return [fromCompactArray(columns), fromCompactArray(header)];
    }

=======
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    updateProps(props: DatagridContainerProps): void {
        if (this.progressStore.exporting) {
            return;
        }
        this.columnsStore.updateProps(props);
        this.settingsStore.updateProps(props);
    }
<<<<<<< HEAD
=======

    get isLoaded(): boolean {
        return this.columnsStore.loaded;
    }

    get filterConditions(): FilterCondition[] | undefined {
        if (!this.headerFiltersStore.isDirty) {
            return undefined;
        }

        return this.columnsStore.filterConditions
            .filter((filter): filter is FilterCondition => filter !== undefined)
            .concat(this.headerFiltersStore.filterConditions);
    }

    get sortInstructions(): SortInstruction[] | undefined {
        return this.columnsStore.sortInstructions;
    }
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
}

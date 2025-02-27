<<<<<<< HEAD
import { FilterData } from "@mendix/widget-plugin-filtering/typings/settings";
=======
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
import { ColumnId } from "./GridColumn";
import { SortDirection, SortRule } from "./sorting";

export interface ColumnPersonalizationSettings {
    columnId: ColumnId;
    size: number | undefined;
    hidden: boolean;
    orderWeight: number;
    sortDir: SortDirection | undefined;
    sortWeight: number | undefined;
<<<<<<< HEAD
=======
    filterSettings: unknown;
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
}

interface ColumnPersonalizationStorageSettings {
    columnId: ColumnId;
    size: number | undefined;
    hidden: boolean;
<<<<<<< HEAD
}

export type ColumnFilterSettings = Array<[key: ColumnId, data: FilterData]>;

export type GroupFilterSettings = Array<[key: string, data: FilterData]>;

export interface GridPersonalizationStorageSettings {
    name: string;
    schemaVersion: 2;
    settingsHash: string;
    columns: ColumnPersonalizationStorageSettings[];
    groupFilters: GroupFilterSettings;
    columnFilters: ColumnFilterSettings;
=======
    filterSettings: unknown;
}

export interface GridPersonalizationStorageSettings {
    name: string;
    schemaVersion: number;
    settingsHash: string;

    columns: ColumnPersonalizationStorageSettings[];
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    columnOrder: ColumnId[];
    sortOrder: SortRule[];
}

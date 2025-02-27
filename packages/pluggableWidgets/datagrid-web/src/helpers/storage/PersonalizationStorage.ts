<<<<<<< HEAD
import { DatagridContainerProps } from "../../../typings/DatagridProps";

export interface PersonalizationStorage {
    settings: unknown;
    updateSettings(newSettings: any): void;
=======
import { GridPersonalizationStorageSettings } from "../../typings/personalization-settings";
import { DatagridContainerProps } from "../../../typings/DatagridProps";

export interface PersonalizationStorage {
    settings: GridPersonalizationStorageSettings | undefined;
    updateSettings(newSettings: GridPersonalizationStorageSettings): void;

>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    updateProps?(props: DatagridContainerProps): void;
}

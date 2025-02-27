<<<<<<< HEAD
=======
import { GridPersonalizationStorageSettings } from "../../typings/personalization-settings";
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
import { PersonalizationStorage } from "./PersonalizationStorage";

export class LocalStoragePersonalizationStorage implements PersonalizationStorage {
    constructor(private key: string) {}

<<<<<<< HEAD
    get settings(): unknown {
=======
    get settings(): GridPersonalizationStorageSettings | undefined {
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        const data = localStorage.getItem(this.key);

        return data ? JSON.parse(data) : undefined;
    }

<<<<<<< HEAD
    updateSettings(newSettings: any): void {
=======
    updateSettings(newSettings: GridPersonalizationStorageSettings): void {
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        const newSettingsJson = JSON.stringify(newSettings);
        if (localStorage.getItem(this.key) !== newSettingsJson) {
            localStorage.setItem(this.key, newSettingsJson);
        }
    }
}

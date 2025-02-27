import { EditableValue, ValueStatus } from "mendix";
import { PersonalizationStorage } from "./PersonalizationStorage";
<<<<<<< HEAD
=======
import { GridPersonalizationStorageSettings } from "../../typings/personalization-settings";
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
import { action, computed, makeObservable, observable } from "mobx";
import { DatagridContainerProps } from "../../../typings/DatagridProps";

export class AttributePersonalizationStorage implements PersonalizationStorage {
    private _storageAttr: EditableValue<string> | undefined;

    constructor(props: Pick<DatagridContainerProps, "configurationAttribute">) {
        this._storageAttr = props.configurationAttribute;

<<<<<<< HEAD
        makeObservable<this, "_storageAttr" | "_value">(this, {
            _storageAttr: observable.ref,
            _value: computed,
            settings: computed.struct,
=======
        makeObservable<this, "_storageAttr">(this, {
            _storageAttr: observable.ref,

            settings: computed.struct,

>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            updateProps: action
        });
    }

    updateProps(props: Pick<DatagridContainerProps, "configurationAttribute">): void {
        this._storageAttr = props.configurationAttribute;
    }

<<<<<<< HEAD
    get _value(): string | undefined {
        if (this._storageAttr && this._storageAttr.status === ValueStatus.Available) {
            return this._storageAttr.value;
        }
    }

    get settings(): unknown {
        if (this._value) {
            return JSON.parse(this._value) as unknown;
        }
    }

    updateSettings(newSettings: any): void {
        // Prevent saving empty string or null to the attribute
        newSettings = newSettings === "" || newSettings === null ? undefined : newSettings;
=======
    get settings(): GridPersonalizationStorageSettings | undefined {
        if (this._storageAttr && this._storageAttr.status === ValueStatus.Available && this._storageAttr.value) {
            return JSON.parse(this._storageAttr.value) as GridPersonalizationStorageSettings;
        }
    }

    updateSettings(newSettings: GridPersonalizationStorageSettings): void {
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        if (this._storageAttr && !this._storageAttr.readOnly) {
            const newSettingsJson = JSON.stringify(newSettings);
            if (this._storageAttr.value !== newSettingsJson) {
                this._storageAttr.setValue(newSettingsJson);
            }
        }
    }
}

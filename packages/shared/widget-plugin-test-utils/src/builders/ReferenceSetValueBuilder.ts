import type { ObjectItem, ReferenceSetValue, Option } from "mendix";
<<<<<<< HEAD
import { Status } from "../constants.js";
import { Writable } from "./type-utils.js";

export class ReferenceSetValueBuilder {
=======
import type { Big } from "big.js";
import { Status } from "../constants.js";

type Writable<T> = {
    -readonly [K in keyof T]: T[K];
};

export class ReferenceSetValueBuilder<T extends string | boolean | Date | Big> {
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    private readonly referenceSetValue: Writable<ReferenceSetValue> = {
        value: undefined,
        type: "ReferenceSet",
        status: Status.Available,
        validation: undefined,
        readOnly: false,
        setValidator: jest.fn(),
        setValue: jest.fn(value => this.withValue(value))
    };

<<<<<<< HEAD
    withValue(value: Option<ObjectItem[]>): ReferenceSetValueBuilder {
=======
    withValue(value: Option<ObjectItem[]>): ReferenceSetValueBuilder<T> {
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        this.referenceSetValue.value = value;
        return this;
    }

<<<<<<< HEAD
    isReadOnly(): ReferenceSetValueBuilder {
=======
    isReadOnly(): ReferenceSetValueBuilder<T> {
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        this.referenceSetValue.readOnly = true;
        return this;
    }

<<<<<<< HEAD
    isLoading(): ReferenceSetValueBuilder {
=======
    isLoading(): ReferenceSetValueBuilder<T> {
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        this.referenceSetValue.status = Status.Loading;
        return this.isReadOnly();
    }

<<<<<<< HEAD
    isUnavailable(): ReferenceSetValueBuilder {
=======
    isUnavailable(): ReferenceSetValueBuilder<T> {
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        this.referenceSetValue.status = Status.Unavailable;
        return this.isReadOnly();
    }

<<<<<<< HEAD
    withValidation(validation?: string): ReferenceSetValueBuilder {
=======
    withValidation(validation?: string): ReferenceSetValueBuilder<T> {
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        this.referenceSetValue.validation = validation;
        return this;
    }

    build(): ReferenceSetValue {
        return this.referenceSetValue;
    }
}

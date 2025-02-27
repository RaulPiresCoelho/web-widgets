import type { ObjectItem, ReferenceValue, Option } from "mendix";
<<<<<<< HEAD
import { Status } from "../constants.js";
import { Writable } from "./type-utils.js";

export class ReferenceValueBuilder {
=======
import type { Big } from "big.js";
import { Status } from "../constants.js";

type Writable<T> = {
    -readonly [K in keyof T]: T[K];
};

export class ReferenceValueBuilder<T extends string | boolean | Date | Big> {
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    private readonly referenceValue: Writable<ReferenceValue> = {
        value: undefined,
        type: "Reference",
        status: Status.Available,
        validation: undefined,
        readOnly: false,
        setValidator: jest.fn(),
        setValue: jest.fn(value => this.withValue(value))
    };

<<<<<<< HEAD
    withValue(value: Option<ObjectItem>): ReferenceValueBuilder {
=======
    withValue(value: Option<ObjectItem>): ReferenceValueBuilder<T> {
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        this.referenceValue.value = value;
        return this;
    }

<<<<<<< HEAD
    isReadOnly(): ReferenceValueBuilder {
=======
    isReadOnly(): ReferenceValueBuilder<T> {
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        this.referenceValue.readOnly = true;
        return this;
    }

<<<<<<< HEAD
    isLoading(): ReferenceValueBuilder {
=======
    isLoading(): ReferenceValueBuilder<T> {
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        this.referenceValue.status = Status.Loading;
        return this.isReadOnly();
    }

<<<<<<< HEAD
    isUnavailable(): ReferenceValueBuilder {
=======
    isUnavailable(): ReferenceValueBuilder<T> {
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        this.referenceValue.status = Status.Unavailable;
        return this.isReadOnly();
    }

<<<<<<< HEAD
    withValidation(validation?: string): ReferenceValueBuilder {
=======
    withValidation(validation?: string): ReferenceValueBuilder<T> {
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        this.referenceValue.validation = validation;
        return this;
    }

    build(): ReferenceValue {
        return this.referenceValue;
    }
}

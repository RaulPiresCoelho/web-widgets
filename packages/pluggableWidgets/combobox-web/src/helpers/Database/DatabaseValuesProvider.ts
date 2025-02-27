import { ObjectItem, DynamicValue, ListAttributeValue } from "mendix";
import { ValuesProvider } from "../types";

interface Props {
<<<<<<< HEAD
    valueAttribute: ListAttributeValue<string | Big> | undefined;
=======
    valueAttribute: ListAttributeValue<string | Big>;
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    emptyValue?: DynamicValue<string | Big>;
}

export class DatabaseValuesProvider implements ValuesProvider<string | Big> {
    private attribute?: ListAttributeValue<string | Big>;
    private emptyValue?: DynamicValue<string | Big> | undefined;

    constructor(private optionsMap: Map<string, ObjectItem>) {}

    updateProps(props: Props): void {
<<<<<<< HEAD
=======
        this.emptyValue = props.emptyValue;
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        this.attribute = props.valueAttribute;
    }

    get(key: string | null): string | Big | undefined {
        if (key === null) {
            return this.emptyValue?.value;
        }
<<<<<<< HEAD

=======
        if (!this.attribute) {
            throw new Error("DatabaseValuesProvider: no formatter available.");
        }
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        const item = this.optionsMap.get(key);
        if (!item) {
            return this.emptyValue?.value;
        }
<<<<<<< HEAD

        if (this.attribute) {
            const value = this.attribute.get(item);
            if (value.status === "unavailable") {
                return this.emptyValue?.value;
            }
            return value.value;
        }

        return this.emptyValue?.value;
=======
        const value = this.attribute.get(item);
        if (value.status === "unavailable") {
            return this.emptyValue?.value;
        }
        return value.value;
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    }

    getEmptyValue(): string | Big | undefined {
        return this.emptyValue?.value;
    }
}

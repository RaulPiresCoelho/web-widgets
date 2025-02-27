<<<<<<< HEAD
import { InputFilterInterface } from "../../typings/InputFilterInterface";
import { InputStore } from "../../stores/InputStore";
import { AllFunctions } from "../../typings/FilterFunctions";
=======
export type Optional<T> = T | undefined;
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

export interface BaseProps {
    adjustable: boolean;
    className?: string;
    id?: string;
    name: string;
    placeholder?: string;
    screenReaderButtonCaption?: string;
    screenReaderInputCaption?: string;
    styles?: React.CSSProperties;
    tabIndex?: number;
<<<<<<< HEAD
    type: "text" | "number";
    badge?: string;
}

export type FilterFnList<T> = Array<{ value: T; label: string }>;

export interface InputProps<Fn extends AllFunctions> {
    onFilterChange: (filterFn: Fn) => void;
    filterFn: Fn;
    filterFnList: FilterFnList<Fn>;
    inputStores: [InputStore, InputStore];
    disableInputs?: boolean;
    inputRef: React.RefAttributes<HTMLInputElement>["ref"];
    defaultValue?: string;
}

export interface InputComponentProps<Fn extends AllFunctions> extends BaseProps, InputProps<Fn> {}

export interface InputHookProps<Fn, V> {
    filters: FilterFnList<Fn>;
    defaultFilter: Fn;
    defaultValue: V | undefined;
    changeDelay?: number;
    filterStore: InputFilterInterface;
    disableInputs?: (filterFn: Fn) => boolean;
=======
}

export type FilterList<T> = Array<{ value: T; label: string }>;

export interface InputProps<TFilterEnum> {
    onFilterChange: (type: TFilterEnum, isFromUserInteraction: boolean) => void;
    defaultFilter: TFilterEnum;
    filters: FilterList<TFilterEnum>;

    onInputChange: React.ChangeEventHandler<HTMLInputElement>;
    inputType: "text" | "number";
    inputDisabled?: boolean;
    inputRef?: React.RefAttributes<HTMLInputElement>["ref"];
    inputValue: string;
}

export interface InputComponentProps<TFilterEnum> extends BaseProps, InputProps<TFilterEnum> {}

export interface ValueHelper<T> {
    /** Function to map input string to value. */
    fromString(arg: string): T;
    /** Function to map value to string. */
    toString(arg: T): string;
    /** Function to compare the previous value and the new value. */
    equals(a: T, b: T): boolean;
}

export interface InputHookProps<TValue, TFilterEnum> {
    defaultFilter: TFilterEnum;
    filters: FilterList<TFilterEnum>;
    value: Optional<TValue>;
    onChange: (value: Optional<TValue>, filter: TFilterEnum) => void;
    valueHelper: ValueHelper<TValue>;
    changeDelay?: number;
    parentChannelName: string | null;
    name: string;
    inputDisabled?: (filter: TFilterEnum) => boolean;
    inputType: "text" | "number";
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
}

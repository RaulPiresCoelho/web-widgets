import {
<<<<<<< HEAD
=======
    ActionValue,
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    DynamicValue,
    EditableValue,
    ListAttributeValue,
    ListExpressionValue,
    ListValue,
    ListWidgetValue
} from "mendix";
import {
    ComboboxContainerProps,
    FilterTypeEnum,
    LoadingTypeEnum,
    OptionsSourceAssociationCustomContentTypeEnum,
    OptionsSourceDatabaseCaptionTypeEnum
} from "../../../typings/ComboboxProps";
import Big from "big.js";

type ExtractionReturnValue = {
<<<<<<< HEAD
    targetAttribute?: EditableValue<string | Big>;
=======
    attr?: EditableValue<string | Big>;
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    captionProvider?: ListAttributeValue<string> | ListExpressionValue<string>;
    captionType: OptionsSourceDatabaseCaptionTypeEnum;
    clearable: boolean;
    customContent?: ListWidgetValue;
    customContentType: OptionsSourceAssociationCustomContentTypeEnum;
    ds: ListValue;
    emptyOption?: DynamicValue<string>;
<<<<<<< HEAD
    filterType: FilterTypeEnum;
    lazyLoading: boolean;
    loadingType: LoadingTypeEnum;
    valueSourceAttribute: ListAttributeValue<string | Big> | undefined;
};

export function extractDatabaseProps(props: ComboboxContainerProps): ExtractionReturnValue {
    const targetAttribute = props.databaseAttributeString;
    const filterType = props.filterType;
=======
    emptyValue?: DynamicValue<string | Big>;
    filterType: FilterTypeEnum;
    lazyLoading: boolean;
    loadingType: LoadingTypeEnum;
    onChangeEvent?: ActionValue;
    valueAttribute: ListAttributeValue<string | Big>;
};

export function extractDatabaseProps(props: ComboboxContainerProps): ExtractionReturnValue {
    const attr = props.databaseAttributeString;
    const filterType = props.filterType;
    const onChangeEvent = props.onChangeEvent;
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

    const ds = props.optionsSourceDatabaseDataSource;
    if (!ds) {
        throw new Error("'optionsSourceType' type is 'database' but 'optionsSourceDatabaseDataSource' is not defined.");
    }
    const captionType = props.optionsSourceDatabaseCaptionType;
    const captionAttribute = props.optionsSourceDatabaseCaptionAttribute;
    const captionExpression = props.optionsSourceDatabaseCaptionExpression;
    const emptyOption = props.emptyOptionText;
<<<<<<< HEAD
    const clearable = props.clearable;
    const customContent = props.optionsSourceDatabaseCustomContent;
    const customContentType = props.optionsSourceDatabaseCustomContentType;
    const valueSourceAttribute = props.optionsSourceDatabaseValueAttribute;
    const lazyLoading = (props.lazyLoading && props.optionsSourceDatabaseCaptionType !== "expression") ?? false;
    const loadingType = props.loadingType;

    if (targetAttribute) {
        if (
            targetAttribute.value instanceof Big &&
            valueSourceAttribute?.type !== "Integer" &&
            valueSourceAttribute?.type !== "Long" &&
            valueSourceAttribute?.type !== "Enum"
        ) {
            throw new Error(
                `Target attribute is of type Number while Value attribute is of type ${valueSourceAttribute?.type}`
            );
        }
        if (
            typeof targetAttribute.value === "string" &&
            valueSourceAttribute?.type !== "String" &&
            valueSourceAttribute?.type !== "Enum"
        ) {
            throw new Error(
                `Target attribute is of type String while Value attribute is of type ${valueSourceAttribute?.type}`
            );
        }
    }

    return {
        targetAttribute,
=======
    const emptyValue = props.optionsSourceDatabaseDefaultValue;
    const clearable = props.clearable;
    const customContent = props.optionsSourceAssociationCustomContent;
    const customContentType = props.optionsSourceAssociationCustomContentType;
    const valueAttribute = props.optionsSourceDatabaseValueAttribute;
    const lazyLoading = (props.lazyLoading && props.optionsSourceDatabaseCaptionType !== "expression") ?? false;
    const loadingType = props.loadingType;

    if (attr) {
        if (attr.value instanceof Big && valueAttribute?.type !== "Integer" && valueAttribute?.type !== "Enum") {
            throw new Error(`Atrribute is type of Integer while Value has type ${valueAttribute?.type}`);
        }
        if (typeof attr.value === "string" && valueAttribute?.type !== "String" && valueAttribute?.type !== "Enum") {
            throw new Error(`Atrribute is type of String while Value has type ${valueAttribute?.type}`);
        }
    }

    if (!valueAttribute) {
        throw new Error("'valueExpression' is not defined");
    }

    return {
        attr,
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        captionProvider: captionType === "attribute" ? captionAttribute : captionExpression,
        captionType,
        clearable,
        customContent,
        customContentType,
        ds,
        emptyOption,
<<<<<<< HEAD
        filterType,
        lazyLoading,
        loadingType,
        valueSourceAttribute
=======
        emptyValue,
        filterType,
        lazyLoading,
        loadingType,
        onChangeEvent,
        valueAttribute
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    };
}

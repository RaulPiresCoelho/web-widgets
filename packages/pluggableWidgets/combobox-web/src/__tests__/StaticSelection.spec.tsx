import {
<<<<<<< HEAD
    dynamic,
    EditableValueBuilder,
    list,
    listExp,
    ListAttributeValueBuilder,
=======
    buildListExpression,
    dynamicValue,
    EditableValueBuilder,
    ListAttributeValueBuilder,
    ListValueBuilder,
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    ReferenceValueBuilder
} from "@mendix/widget-plugin-test-utils";
import "./__mocks__/intersectionObserverMock";
import "@testing-library/jest-dom";
import { fireEvent, render, RenderResult, act, waitFor } from "@testing-library/react";
<<<<<<< HEAD
=======
import { ObjectItem, DynamicValue } from "mendix";
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
import { createElement } from "react";
import { ComboboxContainerProps } from "../../typings/ComboboxProps";
import Combobox from "../Combobox";

// function helper to ease DOM changes in development
async function getToggleButton(component: RenderResult): Promise<Element> {
    return component.container.querySelector(".widget-combobox-down-arrow")!;
}
async function getInput(component: RenderResult): Promise<HTMLInputElement> {
    return (await component.findByRole("combobox")) as HTMLInputElement;
}

describe("Combo box (Static values)", () => {
    let defaultProps: ComboboxContainerProps;
    beforeEach(() => {
        defaultProps = {
            name: "comboBox",
            id: "comboBox1",
            source: "static",
            optionsSourceType: "association",
            attributeAssociation: new ReferenceValueBuilder().build(),
            attributeEnumeration: new EditableValueBuilder<string>().build(),
            attributeBoolean: new EditableValueBuilder<boolean>().build(),
<<<<<<< HEAD
            optionsSourceAssociationDataSource: list(1),
            optionsSourceAssociationCaptionType: "expression",
            optionsSourceAssociationCaptionAttribute: new ListAttributeValueBuilder<string>().build(),
            optionsSourceAssociationCaptionExpression: listExp(() => "$currentObject/CountryName"),
            optionsSourceAssociationCustomContentType: "no",
            optionsSourceAssociationCustomContent: undefined,
            emptyOptionText: dynamic("Select an option 111"),
=======
            optionsSourceAssociationDataSource: ListValueBuilder().withItems([{ id: "111" }] as ObjectItem[]),
            optionsSourceAssociationCaptionType: "expression",
            optionsSourceAssociationCaptionAttribute: new ListAttributeValueBuilder<string>().build(),
            optionsSourceAssociationCaptionExpression: buildListExpression("$currentObject/CountryName"),
            optionsSourceAssociationCustomContentType: "no",
            optionsSourceAssociationCustomContent: undefined,
            emptyOptionText: dynamicValue("Select an option 111"),
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            ariaRequired: true,
            clearable: true,
            filterType: "contains",
            selectedItemsStyle: "text",
            readOnlyStyle: "bordered",
            lazyLoading: false,
            loadingType: "spinner",
<<<<<<< HEAD
            clearButtonAriaLabel: dynamic("Clear selection"),
            removeValueAriaLabel: dynamic("Remove value"),
            selectAllButtonCaption: dynamic("Select All"),
            selectAllButton: false,
            selectionMethod: "checkbox",
            a11ySelectedValue: dynamic("Selected value:"),
            a11yOptionsAvailable: dynamic("Options available:"),
            a11yInstructions: dynamic("a11yInstructions"),
            showFooter: false,
            databaseAttributeString: new EditableValueBuilder<string | Big>().build(),
            optionsSourceDatabaseCaptionType: "attribute",
=======
            clearButtonAriaLabel: dynamicValue("Clear selection"),
            removeValueAriaLabel: dynamicValue("Remove value"),
            selectAllButtonCaption: dynamicValue("Select All"),
            selectAllButton: false,
            selectionMethod: "checkbox",
            a11ySelectedValue: dynamicValue("Selected value:"),
            a11yOptionsAvailable: dynamicValue("Options available:"),
            a11yInstructions: dynamicValue("a11yInstructions"),
            showFooter: false,
            databaseAttributeString: new EditableValueBuilder<string | Big>().build(),
            optionsSourceDatabaseCaptionType: "attribute",
            optionsSourceDatabaseDefaultValue: dynamicValue("empty value"),
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            optionsSourceDatabaseCustomContentType: "yes",
            staticDataSourceCustomContentType: "no",
            staticAttribute: new EditableValueBuilder<string>().withValue("value1").build(),
            optionsSourceStaticDataSource: [
                {
<<<<<<< HEAD
                    staticDataSourceValue: dynamic("value1"),
                    staticDataSourceCustomContent: undefined,
                    staticDataSourceCaption: dynamic("caption1")
                },
                {
                    staticDataSourceValue: dynamic("value2"),
                    staticDataSourceCustomContent: undefined,
                    staticDataSourceCaption: dynamic("caption2")
=======
                    staticDataSourceValue: dynamicValue("value1"),
                    staticDataSourceCustomContent: undefined,
                    staticDataSourceCaption: dynamicValue("caption1")
                },
                {
                    staticDataSourceValue: dynamicValue("value2"),
                    staticDataSourceCustomContent: undefined,
                    staticDataSourceCaption: dynamicValue("caption2")
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
                }
            ]
        };
        if (defaultProps.optionsSourceAssociationCaptionType === "expression") {
<<<<<<< HEAD
            defaultProps.optionsSourceAssociationCaptionExpression!.get = i => dynamic(`${i.id}`);
=======
            defaultProps.optionsSourceAssociationCaptionExpression!.get = i => {
                return {
                    value: `${i.id}`,
                    status: "available"
                } as DynamicValue<string>;
            };
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        }
    });
    it("renders combobox widget", () => {
        const component = render(<Combobox {...defaultProps} />);
        expect(component.container).toMatchSnapshot();
    });
    it("renders combobox widget with selected value", async () => {
        const component = render(<Combobox {...defaultProps} />);
        const input = await getInput(component);
        expect(input.value).toEqual("caption1");
    });

    it("toggles combobox menu on: input TOGGLE BUTTON", async () => {
        const component = render(<Combobox {...defaultProps} />);
        const toggleButton = await getToggleButton(component);
        await act(() => {
            fireEvent.click(toggleButton);
        });
        await waitFor(() => {
            expect(component.getAllByRole("option")).toHaveLength(2);
            fireEvent.click(toggleButton);
        });
        expect(component.queryAllByRole("option")).toHaveLength(0);
    });
    it("sets option to selected item", async () => {
        const component = render(<Combobox {...defaultProps} />);
        const input = await getInput(component);
        const toggleButton = await getToggleButton(component);
        fireEvent.click(toggleButton);
        const option1 = await component.findByText("caption2");
        fireEvent.click(option1);
        expect(input.value).toEqual("caption2");
        expect(defaultProps.staticAttribute?.setValue).toBeCalled();
        expect(component.queryAllByRole("option")).toHaveLength(0);
        expect(defaultProps.staticAttribute?.value).toEqual("value2");
    });
    it("removes selected item", async () => {
        const component = render(<Combobox {...defaultProps} />);
        const input = await getInput(component);
        const toggleButton = await getToggleButton(component);
        fireEvent.click(toggleButton);
        const options = await component.findAllByText("caption1");
        fireEvent.click(options[1]);
        expect(input.value).toEqual("caption1");
        expect(component.queryAllByRole("option")).toHaveLength(0);
        expect(defaultProps.staticAttribute.value).toEqual("value1");
        const clearButton = await component.container.getElementsByClassName("widget-combobox-clear-button")[0];
        fireEvent.click(clearButton);
        expect(defaultProps.staticAttribute.value).toEqual(undefined);
    });
});

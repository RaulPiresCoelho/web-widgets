import {
<<<<<<< HEAD
    listExp,
    dynamic,
    EditableValueBuilder,
    ListAttributeValueBuilder,
    list,
    obj,
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
import { ListValue } from "mendix";
=======
import { ObjectItem, DynamicValue, ListValue } from "mendix";
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
import { createElement } from "react";
import { ComboboxContainerProps, OptionsSourceAssociationCaptionTypeEnum } from "../../typings/ComboboxProps";
import Combobox from "../Combobox";

// function helper to ease DOM changes in development
async function getToggleButton(component: RenderResult): Promise<Element> {
    return component.container.querySelector(".widget-combobox-down-arrow")!;
}
async function getInput(component: RenderResult): Promise<HTMLInputElement> {
    return (await component.findByRole("combobox")) as HTMLInputElement;
}

describe("Combo box (Association)", () => {
    let defaultProps: ComboboxContainerProps;
    beforeEach(() => {
        defaultProps = {
            name: "comboBox",
            id: "comboBox1",
            source: "context",
            optionsSourceType: "association",
<<<<<<< HEAD
            attributeAssociation: new ReferenceValueBuilder().withValue(obj("111")).build(),
            attributeEnumeration: new EditableValueBuilder<string>().build(),
            attributeBoolean: new EditableValueBuilder<boolean>().build(),
            optionsSourceAssociationDataSource: list([obj("111"), obj("222"), obj("333"), obj("444")]),
            optionsSourceAssociationCaptionType: "expression",
            optionsSourceAssociationCaptionAttribute: new ListAttributeValueBuilder<string>().build(),
            optionsSourceAssociationCaptionExpression: listExp(() => "$currentObject/CountryName"),
            optionsSourceAssociationCustomContentType: "no",
            optionsSourceAssociationCustomContent: undefined,
            emptyOptionText: dynamic("Select an option 111"),
=======
            attributeAssociation: new ReferenceValueBuilder().withValue({ id: "111" } as ObjectItem).build(),
            attributeEnumeration: new EditableValueBuilder<string>().build(),
            attributeBoolean: new EditableValueBuilder<boolean>().build(),
            optionsSourceAssociationDataSource: ListValueBuilder().withItems([
                { id: "111" },
                { id: "222" },
                { id: "333" },
                { id: "444" }
            ] as ObjectItem[]),
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
            staticAttribute: new EditableValueBuilder<string>().build(),
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
    it("renders placeholder component in case of unavailable status", () => {
        defaultProps.attributeAssociation = new ReferenceValueBuilder().isUnavailable().build();
        const { container } = render(<Combobox {...defaultProps} />);
        expect(container.getElementsByClassName("widget-combobox-placeholder")).toHaveLength(1);
    });
    it("toggles combobox menu on: input TOGGLE BUTTON", async () => {
        const component = render(<Combobox {...defaultProps} />);
        const toggleButton = await getToggleButton(component);
        await act(() => {
            fireEvent.click(toggleButton);
        });
        await waitFor(() => {
            expect(component.getAllByRole("option")).toHaveLength(4);
            fireEvent.click(toggleButton);
        });
        expect(component.queryAllByRole("option")).toHaveLength(0);
    });
    it("sets option to selected item", async () => {
        const component = render(<Combobox {...defaultProps} />);
        const input = await getInput(component);
        const toggleButton = await getToggleButton(component);
        fireEvent.click(toggleButton);
<<<<<<< HEAD
        const option1 = await component.findByText("obj_222");
        fireEvent.click(option1);
        expect(input.value).toEqual("obj_222");
        expect(defaultProps.attributeAssociation?.setValue).toBeCalled();
        expect(component.queryAllByRole("option")).toHaveLength(0);
        expect(defaultProps.attributeAssociation?.value).toEqual({ id: "obj_222" });
=======
        const option1 = await component.findByText("222");
        fireEvent.click(option1);
        expect(input.value).toEqual("222");
        expect(defaultProps.attributeAssociation?.setValue).toBeCalled();
        expect(component.queryAllByRole("option")).toHaveLength(0);
        expect(defaultProps.attributeAssociation?.value).toEqual({ id: "222" });
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    });
    it("removes selected item", async () => {
        const component = render(<Combobox {...defaultProps} />);

        const input = await getInput(component);
        const labelText = await component.container.querySelector(
            ".widget-combobox-placeholder-text .widget-combobox-caption-text"
        );
        const toggleButton = await getToggleButton(component);
        fireEvent.click(toggleButton);

<<<<<<< HEAD
        const option1 = await component.findByText("obj_222");
        fireEvent.click(option1);

        expect(input.value).toEqual("obj_222");
        expect(defaultProps.attributeAssociation?.setValue).toBeCalled();
        expect(component.queryAllByRole("option")).toHaveLength(0);
        expect(defaultProps.attributeAssociation?.value).toEqual({ id: "obj_222" });
=======
        const option1 = await component.findByText("222");
        fireEvent.click(option1);

        expect(input.value).toEqual("222");
        expect(defaultProps.attributeAssociation?.setValue).toBeCalled();
        expect(component.queryAllByRole("option")).toHaveLength(0);
        expect(defaultProps.attributeAssociation?.value).toEqual({ id: "222" });
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

        const clearButton = await component.container.getElementsByClassName("widget-combobox-clear-button")[0];
        fireEvent.click(clearButton);

        expect(labelText?.innerHTML).toEqual(defaultProps.emptyOptionText?.value);
        expect(defaultProps.attributeAssociation?.value).toEqual(undefined);
    });

    describe("with lazy loading", () => {
        it("calls loadMore only when menu opens", async () => {
            const setLimit = jest.fn();
            const lazyLoadingProps = {
                ...defaultProps,
                lazyLoading: true,
                optionsSourceAssociationCaptionType: "attribute" as OptionsSourceAssociationCaptionTypeEnum,
                optionsSourceAssociationDataSource: {
                    ...defaultProps.optionsSourceAssociationDataSource,
                    hasMoreItems: true,
                    limit: 0,
                    setLimit
                } as ListValue
            };
            const component = render(<Combobox {...lazyLoadingProps} />);

            expect(component.queryAllByRole("option")).toHaveLength(0);
            expect(lazyLoadingProps.optionsSourceAssociationDataSource?.limit).toEqual(0);

            const input = await getInput(component);
            fireEvent.click(input);

            await waitFor(() => {
                expect(component.queryAllByRole("option")).toHaveLength(4);
                expect(setLimit).toHaveBeenCalledWith(100);
            });
        });
    });
});

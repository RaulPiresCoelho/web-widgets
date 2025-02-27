<<<<<<< HEAD
import { FilterAPIv2 } from "@mendix/widget-plugin-filtering/context";
import { HeaderFiltersStore, HeaderFiltersStoreProps } from "@mendix/widget-plugin-filtering/stores/HeaderFiltersStore";
import { SortAPI } from "@mendix/widget-plugin-sorting/context";
import { SortAPIProvider, SortListType } from "@mendix/widget-plugin-sorting/providers/SortAPIProvider";
import { ListAttributeId } from "@mendix/widget-plugin-sorting/typings";
import { ListAttributeValueBuilder, dynamicValue } from "@mendix/widget-plugin-test-utils";
import { fireEvent, render } from "@testing-library/react";
import { ListValue } from "mendix";
import { createContext, createElement } from "react";
import { DropdownSortContainerProps } from "../../../typings/DropdownSortProps";
import { DropdownSort } from "../../DropdownSort";

const commonProps: DropdownSortContainerProps = {
    class: "filter-custom-class",
    tabIndex: 0,
    name: "filter-test"
};

export interface StaticInfo {
    name: string;
    filtersChannelName: string;
}

const headerFilterStoreInfo: StaticInfo = {
    name: commonProps.name,
    filtersChannelName: ""
};

// CONTEXT
const props: HeaderFiltersStoreProps = {
    filterList: []
};
const headerFilterStore = new HeaderFiltersStore(props, headerFilterStoreInfo, null);
(window as any)["com.mendix.widgets.web.filterable.filterContext.v2"] = createContext<FilterAPIv2>(
    headerFilterStore.context
);

const sortList: SortListType[] = [
    {
        attribute: new ListAttributeValueBuilder().withId("attribute1").withType("String").withSortable(true).build(),
        caption: dynamicValue<string>("Option 1")
    },
    {
        attribute: new ListAttributeValueBuilder().withId("attribute2").withType("Decimal").withSortable(true).build(),
        caption: dynamicValue<string>("Option 2")
    }
];
const sortProvider = new SortAPIProvider({
    datasource: { sortOrder: [[sortList[0].attribute.id as ListAttributeId, "asc"]] } as ListValue,
    sortList
});
(window as any)["com.mendix.widgets.web.sortable.sortContext"] = createContext<SortAPI>(sortProvider.context);
// END CONTEXT

=======
import { Alert } from "@mendix/widget-plugin-component-kit/Alert";
import { SortInstruction, SortContextValue } from "@mendix/widget-plugin-sorting";
import { ListAttributeValueBuilder } from "@mendix/widget-plugin-test-utils";
import { createContext, createElement } from "react";
import { DropdownSort } from "../../DropdownSort";
import { render } from "@testing-library/react";
import { mount } from "enzyme";
import { SortComponent } from "../SortComponent";

const commonProps = {
    class: "filter-custom-class",
    tabIndex: 0,
    name: "filter-test",
    sortOrder: "asc" as const
};

>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
describe("Dropdown Sort", () => {
    describe("with single instance", () => {
        afterEach(() => {
            delete (global as any)["com.mendix.widgets.web.UUID"];
        });

        describe("with correct context", () => {
<<<<<<< HEAD
            it("loads correct values from attributes", () => {
                const filter = render(<DropdownSort {...commonProps} />);
                fireEvent.click(filter.getByRole("textbox"));

                const items = filter.getAllByRole("menuitem");

                items.forEach((item, index) => {
                    if (index === 0) {
                        return;
                    }
                    expect(item.textContent).toBe(`Option ${index}`);
                });
=======
            beforeAll(() => {
                (window as any)["com.mendix.widgets.web.sortable.sortContext"] = createContext({
                    sortDispatcher: jest.fn(),
                    attributes: [
                        {
                            attribute: new ListAttributeValueBuilder()
                                .withId("attribute1")
                                .withType("String")
                                .withSortable(true)
                                .build(),
                            caption: "Option 1"
                        },
                        {
                            attribute: new ListAttributeValueBuilder()
                                .withId("attribute2")
                                .withType("Decimal")
                                .withSortable(true)
                                .build(),
                            caption: "Option 2"
                        }
                    ]
                } as SortContextValue);
            });

            it("loads correct values from attributes", () => {
                const filter = mount(<DropdownSort {...commonProps} />);

                expect(filter.find(SortComponent).prop("options")).toStrictEqual([
                    {
                        caption: "",
                        value: ""
                    },
                    {
                        caption: "Option 1",
                        value: "attribute1"
                    },
                    {
                        caption: "Option 2",
                        value: "attribute2"
                    }
                ]);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            });

            it("renders correctly", () => {
                const { asFragment } = render(<DropdownSort {...commonProps} />);
<<<<<<< HEAD
                expect(asFragment()).toMatchSnapshot();
            });
        });

        describe("with view state", () => {
            it("loads correct default option", () => {
                const filter = render(<DropdownSort {...commonProps} />);
                fireEvent.click(filter.getByRole("textbox"));

                expect(filter.getByRole("textbox").getAttribute("value")).toStrictEqual("Option 1");
=======

                expect(asFragment()).toMatchSnapshot();
            });

            afterAll(() => {
                (window as any)["com.mendix.widgets.web.sortable.sortContext"] = undefined;
            });
        });

        describe("with view state", () => {
            beforeAll(() => {
                (window as any)["com.mendix.widgets.web.sortable.sortContext"] = createContext({
                    sortDispatcher: jest.fn(),
                    attributes: [
                        {
                            attribute: new ListAttributeValueBuilder()
                                .withId("attribute1")
                                .withType("String")
                                .withSortable(true)
                                .build(),
                            caption: "Option 1"
                        },
                        {
                            attribute: new ListAttributeValueBuilder()
                                .withId("attribute2")
                                .withType("Decimal")
                                .withSortable(true)
                                .build(),
                            caption: "Option 2"
                        }
                    ],
                    initialSort: [["attribute2", "asc"] as SortInstruction]
                } as SortContextValue);
            });

            it("loads correct default option", () => {
                const filter = mount(<DropdownSort {...commonProps} />);

                expect(filter.find(SortComponent).prop("defaultOption")).toStrictEqual({
                    caption: "Option 2",
                    value: "attribute2"
                });
            });

            afterAll(() => {
                (window as any)["com.mendix.widgets.web.sortable.sortContext"] = undefined;
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            });
        });

        describe("with no context", () => {
            beforeAll(() => {
                (window as any)["com.mendix.widgets.web.sortable.sortContext"] = undefined;
            });

            it("renders error message", () => {
<<<<<<< HEAD
                const filter = render(<DropdownSort {...commonProps} />);
                expect(filter.container.querySelector(".alert")?.textContent).toBe("Out of context");
=======
                const filter = mount(<DropdownSort {...commonProps} />);

                expect(filter.find(Alert).text()).toBe(
                    "The Drop-down sort widget must be placed inside the header of the Gallery widget."
                );
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            });
        });
    });

    describe("with multiple instances", () => {
        beforeAll(() => {
<<<<<<< HEAD
            (window as any)["com.mendix.widgets.web.sortable.sortContext"] = createContext<SortAPI>(
                sortProvider.context
            );
=======
            (window as any)["com.mendix.widgets.web.sortable.sortContext"] = createContext({
                sortDispatcher: jest.fn(),
                attributes: [
                    {
                        attribute: new ListAttributeValueBuilder()
                            .withId("attribute1")
                            .withType("String")
                            .withSortable(true)
                            .build(),
                        caption: "Option 1"
                    },
                    {
                        attribute: new ListAttributeValueBuilder()
                            .withId("attribute2")
                            .withType("Decimal")
                            .withSortable(true)
                            .build(),
                        caption: "Option 2"
                    }
                ]
            } as SortContextValue);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        });

        it("renders with a unique id", () => {
            const { asFragment: fragment1 } = render(<DropdownSort {...commonProps} />);
            const { asFragment: fragment2 } = render(<DropdownSort {...commonProps} />);

<<<<<<< HEAD
=======
            console.warn(fragment1().querySelector("input")?.getAttribute("aria-controls"));

>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            expect(fragment1().querySelector("input")?.getAttribute("aria-controls")).not.toBe(
                fragment2().querySelector("input")?.getAttribute("aria-controls")
            );
        });

        afterAll(() => {
            (window as any)["com.mendix.widgets.web.sortable.sortContext"] = undefined;
            delete (global as any)["com.mendix.widgets.web.UUID"];
        });
    });
});

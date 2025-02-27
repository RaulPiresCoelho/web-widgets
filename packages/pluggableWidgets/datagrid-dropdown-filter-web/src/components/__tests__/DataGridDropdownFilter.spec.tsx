import "@testing-library/jest-dom";
<<<<<<< HEAD
import { FilterAPIv2 } from "@mendix/widget-plugin-filtering/context";
import { HeaderFiltersStore, HeaderFiltersStoreProps } from "@mendix/widget-plugin-filtering/stores/HeaderFiltersStore";
import { dynamicValue, ListAttributeValueBuilder } from "@mendix/widget-plugin-test-utils";
import { createContext, createElement } from "react";
import DatagridDropdownFilter from "../../DatagridDropdownFilter";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

export interface StaticInfo {
    name: string;
    filtersChannelName: string;
}
=======
import { Alert } from "@mendix/widget-plugin-component-kit/Alert";
import { FilterContextValue } from "@mendix/widget-plugin-filtering";
import {
    actionValue,
    dynamicValue,
    EditableValueBuilder,
    ListAttributeValueBuilder
} from "@mendix/widget-plugin-test-utils";
import { createContext, createElement } from "react";
import DatagridDropdownFilter from "../../DatagridDropdownFilter";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import { mount } from "enzyme";
import { FilterComponent } from "../FilterComponent";
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

const commonProps = {
    class: "filter-custom-class",
    tabIndex: 0,
    name: "filter-test",
<<<<<<< HEAD
    advanced: false,
    groupKey: "dropdown-filter"
};

const headerFilterStoreInfo: StaticInfo = {
    name: commonProps.name,
    filtersChannelName: ""
=======
    advanced: false
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
};

describe("Dropdown Filter", () => {
    describe("with single instance", () => {
        afterEach(() => {
            delete (global as any)["com.mendix.widgets.web.UUID"];
        });

        describe("with single attribute", () => {
            function mockCtx(universe: string[]): void {
<<<<<<< HEAD
                const props: HeaderFiltersStoreProps = {
                    filterList: [
                        {
                            filter: new ListAttributeValueBuilder()
                                .withUniverse(universe)
                                .withType("Enum")
                                .withFilterable(true)
                                .withFormatter(
                                    value => value,
                                    () => console.log("Parsed")
                                )
                                .build()
                        }
                    ]
                };
                const headerFilterStore = new HeaderFiltersStore(props, headerFilterStoreInfo, null);
                (window as any)["com.mendix.widgets.web.filterable.filterContext.v2"] = createContext<FilterAPIv2>(
                    headerFilterStore.context
                );
            }
            beforeEach(() => {
=======
                (window as any)["com.mendix.widgets.web.filterable.filterContext"] = createContext({
                    filterDispatcher: jest.fn(),
                    singleAttribute: new ListAttributeValueBuilder()
                        .withUniverse(universe)
                        .withType("Enum")
                        .withFilterable(true)
                        .withFormatter(
                            value => value,
                            () => console.log("Parsed")
                        )
                        .build()
                } as FilterContextValue);
            }
            beforeAll(() => {
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
                mockCtx(["enum_value_1", "enum_value_2"]);
            });

            describe("with auto options", () => {
<<<<<<< HEAD
                it("loads correct values from universe", async () => {
                    const filter = render(
                        <DatagridDropdownFilter {...commonProps} auto multiSelect={false} filterOptions={[]} />
                    );

                    const trigger = filter.getByRole("textbox");

                    await fireEvent.click(trigger);

                    const items = filter.getAllByRole("menuitem");

                    items.forEach((item, index) => {
                        if (index === 0) {
                            return;
                        }
                        expect(item.textContent).toEqual(`enum_value_${index}`);
                    });
=======
                it("loads correct values from universe", () => {
                    const filter = mount(
                        <DatagridDropdownFilter {...commonProps} auto multiSelect={false} filterOptions={[]} />
                    );

                    expect(filter.find(FilterComponent).prop("options")).toStrictEqual([
                        {
                            caption: "enum_value_1",
                            value: "enum_value_1"
                        },
                        {
                            caption: "enum_value_2",
                            value: "enum_value_2"
                        }
                    ]);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
                });
            });

            describe("DOM structure", () => {
                it("renders correctly", () => {
                    const { asFragment } = render(
                        <DatagridDropdownFilter {...commonProps} auto multiSelect={false} filterOptions={[]} />
                    );

                    expect(asFragment()).toMatchSnapshot();
                });
            });

<<<<<<< HEAD
=======
            it("triggers attribute and onchange action on change filter value", async () => {
                const action = actionValue();
                const attribute = new EditableValueBuilder<string>().build();
                render(
                    <DatagridDropdownFilter
                        {...commonProps}
                        auto
                        multiSelect={false}
                        filterOptions={[]}
                        onChange={action}
                        valueAttribute={attribute}
                    />
                );

                await userEvent.click(screen.getByRole("textbox"));
                await userEvent.click(screen.getAllByRole("menuitem")[2]);

                expect(action.execute).toBeCalledTimes(1);
                expect(attribute.setValue).toBeCalledWith("enum_value_2");
            });

>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            describe("with defaultValue", () => {
                it("initialize component with defaultValue", () => {
                    render(
                        <DatagridDropdownFilter
                            {...commonProps}
                            auto
                            multiSelect={false}
                            filterOptions={[]}
                            defaultValue={dynamicValue<string>("enum_value_1")}
                        />
                    );

                    expect(screen.getByRole("textbox")).toHaveValue("enum_value_1");
                });

                it("don't sync defaultValue with state when defaultValue changes from undefined to string", async () => {
                    const { rerender } = render(
                        <DatagridDropdownFilter
                            {...commonProps}
                            auto
                            multiSelect={false}
                            filterOptions={[]}
                            defaultValue={dynamicValue<string>("")}
                        />
                    );

                    await waitFor(() => {
                        expect(screen.getByRole("textbox")).toHaveValue("");
                    });

                    // “Real” context causes widgets to re-renders multiple times, replicate this in mocked context.
                    rerender(
                        <DatagridDropdownFilter
                            {...commonProps}
                            auto
                            multiSelect={false}
                            filterOptions={[]}
                            defaultValue={dynamicValue<string>("")}
                        />
                    );
                    rerender(
                        <DatagridDropdownFilter
                            {...commonProps}
                            auto
                            multiSelect={false}
                            filterOptions={[]}
                            defaultValue={dynamicValue<string>("enum_value_1")}
                        />
                    );

                    await waitFor(() => {
                        expect(screen.getByRole("textbox")).toHaveValue("");
                    });
                });

                it("don't sync defaultValue with state when defaultValue changes from string to undefined", async () => {
                    mockCtx(["xyz", "abc"]);
                    const { rerender } = render(
                        <DatagridDropdownFilter
                            {...commonProps}
                            auto
                            multiSelect={false}
                            filterOptions={[]}
                            defaultValue={dynamicValue<string>("xyz")}
                        />
                    );

                    expect(screen.getByRole("textbox")).toHaveValue("xyz");

                    // “Real” context causes widgets to re-renders multiple times, replicate this in mocked context.
                    rerender(
                        <DatagridDropdownFilter
                            {...commonProps}
                            auto
                            multiSelect={false}
                            filterOptions={[]}
                            defaultValue={dynamicValue<string>("xyz")}
                        />
                    );
                    rerender(
                        <DatagridDropdownFilter
                            {...commonProps}
                            auto
                            multiSelect={false}
                            filterOptions={[]}
                            defaultValue={undefined}
                        />
                    );

                    await waitFor(() => {
                        expect(screen.getByRole("textbox")).toHaveValue("xyz");
                    });
                });
            });

            afterAll(() => {
<<<<<<< HEAD
                (window as any)["com.mendix.widgets.web.filterable.filterContext.v2"] = undefined;
=======
                (window as any)["com.mendix.widgets.web.filterable.filterContext"] = undefined;
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            });
        });

        describe("with multiple attributes", () => {
            beforeAll(() => {
<<<<<<< HEAD
                const props: HeaderFiltersStoreProps = {
                    filterList: [
                        {
                            filter: new ListAttributeValueBuilder()
                                .withId("attribute1")
                                .withUniverse(["enum_value_1", "enum_value_2"])
                                .withType("Enum")
                                .withFilterable(true)
                                .withFormatter(
                                    value => value,
                                    () => console.log("Parsed")
                                )
                                .build()
                        },
                        {
                            filter: new ListAttributeValueBuilder()
                                .withId("attribute2")
                                .withUniverse([true, false])
                                .withType("Boolean")
                                .withFilterable(true)
                                .withFormatter(
                                    value => (value ? "Yes" : "No"),
                                    () => console.log("Parsed")
                                )
                                .build()
                        }
                    ]
                };
                const headerFilterStore = new HeaderFiltersStore(props, headerFilterStoreInfo, null);
                (window as any)["com.mendix.widgets.web.filterable.filterContext.v2"] = createContext<FilterAPIv2>(
                    headerFilterStore.context
                );
            });

            describe("with auto options", () => {
                it("loads correct values from universes", async () => {
                    const filter = render(
                        <DatagridDropdownFilter {...commonProps} auto multiSelect={false} filterOptions={[]} />
                    );

                    const trigger = filter.getByRole("textbox");
                    await fireEvent.click(trigger);

                    expect(filter.getAllByRole("menuitem").map(item => item.textContent)).toStrictEqual([
                        "",
                        "enum_value_1",
                        "enum_value_2",
                        "Yes",
                        "No"
=======
                (window as any)["com.mendix.widgets.web.filterable.filterContext"] = createContext({
                    filterDispatcher: jest.fn(),
                    multipleAttributes: {
                        attribute1: new ListAttributeValueBuilder()
                            .withId("attribute1")
                            .withUniverse(["enum_value_1", "enum_value_2"])
                            .withType("Enum")
                            .withFilterable(true)
                            .withFormatter(
                                value => value,
                                () => console.log("Parsed")
                            )
                            .build(),
                        attribute2: new ListAttributeValueBuilder()
                            .withId("attribute2")
                            .withUniverse([true, false])
                            .withType("Boolean")
                            .withFilterable(true)
                            .withFormatter(
                                value => (value ? "Yes" : "No"),
                                () => console.log("Parsed")
                            )
                            .build()
                    }
                } as FilterContextValue);
            });

            describe("with auto options", () => {
                it("loads correct values from universes", () => {
                    const filter = mount(
                        <DatagridDropdownFilter {...commonProps} auto multiSelect={false} filterOptions={[]} />
                    );

                    expect(filter.find(FilterComponent).prop("options")).toStrictEqual([
                        {
                            caption: "enum_value_1",
                            value: "enum_value_1"
                        },
                        {
                            caption: "enum_value_2",
                            value: "enum_value_2"
                        },
                        {
                            caption: "Yes",
                            value: "true"
                        },
                        {
                            caption: "No",
                            value: "false"
                        }
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
                    ]);
                });
            });

            afterAll(() => {
<<<<<<< HEAD
                (window as any)["com.mendix.widgets.web.filterable.filterContext.v2"] = undefined;
=======
                (window as any)["com.mendix.widgets.web.filterable.filterContext"] = undefined;
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            });
        });

        describe("with wrong attribute's type", () => {
            beforeAll(() => {
<<<<<<< HEAD
                const props: HeaderFiltersStoreProps = {
                    filterList: [
                        {
                            filter: new ListAttributeValueBuilder().withType("String").withFilterable(true).build()
                        }
                    ]
                };
                const headerFilterStore = new HeaderFiltersStore(props, headerFilterStoreInfo, null);
                (window as any)["com.mendix.widgets.web.filterable.filterContext.v2"] = createContext<FilterAPIv2>(
                    headerFilterStore.context
                );
            });

            it("renders error message", () => {
                const { container } = render(
                    <DatagridDropdownFilter {...commonProps} auto multiSelect={false} filterOptions={[]} />
                );

                expect(container.querySelector(".alert")?.textContent).toBe(
                    "Unable to get filter store. Check parent widget configuration."
=======
                (window as any)["com.mendix.widgets.web.filterable.filterContext"] = createContext({
                    filterDispatcher: jest.fn(),
                    singleAttribute: new ListAttributeValueBuilder().withType("String").withFilterable(true).build()
                } as FilterContextValue);
            });

            it("renders error message", () => {
                const filter = mount(
                    <DatagridDropdownFilter {...commonProps} auto multiSelect={false} filterOptions={[]} />
                );

                expect(filter.find(Alert).text()).toBe(
                    `Error: The attribute type being used for Drop-down filter is not 'Boolean or Enumeration'.`
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
                );
            });

            afterAll(() => {
<<<<<<< HEAD
                (window as any)["com.mendix.widgets.web.filterable.filterContext.v2"] = undefined;
=======
                (window as any)["com.mendix.widgets.web.filterable.filterContext"] = undefined;
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            });
        });

        describe("with wrong multiple attributes' types", () => {
            beforeAll(() => {
<<<<<<< HEAD
                const props: HeaderFiltersStoreProps = {
                    filterList: [
                        {
                            filter: new ListAttributeValueBuilder()
                                .withId("attribute1")
                                .withType("String")
                                .withFilterable(true)
                                .build()
                        },
                        {
                            filter: new ListAttributeValueBuilder()
                                .withId("attribute2")
                                .withType("Decimal")
                                .withFilterable(true)
                                .build()
                        }
                    ]
                };
                const headerFilterStore = new HeaderFiltersStore(props, headerFilterStoreInfo, null);
                (window as any)["com.mendix.widgets.web.filterable.filterContext.v2"] = createContext<FilterAPIv2>(
                    headerFilterStore.context
                );
            });

            it("renders error message", () => {
                const { container } = render(
                    <DatagridDropdownFilter {...commonProps} auto multiSelect={false} filterOptions={[]} />
                );

                expect(container.querySelector(".alert")?.textContent).toBe(
                    "Unable to get filter store. Check parent widget configuration."
=======
                (window as any)["com.mendix.widgets.web.filterable.filterContext"] = createContext({
                    filterDispatcher: jest.fn(),
                    multipleAttributes: {
                        attribute1: new ListAttributeValueBuilder()
                            .withId("attribute1")
                            .withType("String")
                            .withFilterable(true)
                            .build(),
                        attribute2: new ListAttributeValueBuilder()
                            .withId("attribute2")
                            .withType("Decimal")
                            .withFilterable(true)
                            .build()
                    }
                } as FilterContextValue);
            });

            it("renders error message", () => {
                const filter = mount(
                    <DatagridDropdownFilter {...commonProps} auto multiSelect={false} filterOptions={[]} />
                );

                expect(filter.find(Alert).text()).toBe(
                    `Error: Missing required attribute(s): the Drop-down filter widget can't be used with the filters options you have selected. It requires a 'Boolean or Enumeration' attribute to be selected.`
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
                );
            });

            afterAll(() => {
<<<<<<< HEAD
                (window as any)["com.mendix.widgets.web.filterable.filterContext.v2"] = undefined;
=======
                (window as any)["com.mendix.widgets.web.filterable.filterContext"] = undefined;
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            });
        });

        describe("with no context", () => {
            beforeAll(() => {
<<<<<<< HEAD
                (window as any)["com.mendix.widgets.web.filterable.filterContext.v2"] = undefined;
            });

            it("renders error message", () => {
                const { container } = render(
                    <DatagridDropdownFilter {...commonProps} auto multiSelect={false} filterOptions={[]} />
                );

                expect(container.querySelector(".alert")?.textContent).toBe(
                    "The filter widget must be placed inside the column or header of the Data grid 2.0 or inside header of the Gallery widget."
=======
                (window as any)["com.mendix.widgets.web.filterable.filterContext"] = undefined;
            });

            it("renders error message", () => {
                const filter = mount(
                    <DatagridDropdownFilter {...commonProps} auto multiSelect={false} filterOptions={[]} />
                );

                expect(filter.find(Alert).text()).toBe(
                    "Error: The Drop-down filter widget must be placed inside the header of the Data grid 2.0 or Gallery widget."
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
                );
            });
        });

        describe("with invalid values", () => {
            beforeAll(() => {
<<<<<<< HEAD
                const props: HeaderFiltersStoreProps = {
                    filterList: [
                        {
                            filter: new ListAttributeValueBuilder()
                                .withUniverse(["enum_value_1", "enum_value_2"])
                                .withType("Enum")
                                .withFilterable(true)
                                .build()
                        }
                    ]
                };
                const headerFilterStore = new HeaderFiltersStore(props, headerFilterStoreInfo, null);
                (window as any)["com.mendix.widgets.web.filterable.filterContext.v2"] = createContext<FilterAPIv2>(
                    headerFilterStore.context
                );
            });

            it("renders error message", () => {
                const { container } = render(
=======
                (window as any)["com.mendix.widgets.web.filterable.filterContext"] = createContext({
                    filterDispatcher: jest.fn(),
                    singleAttribute: new ListAttributeValueBuilder()
                        .withUniverse(["enum_value_1", "enum_value_2"])
                        .withType("Enum")
                        .withFilterable(true)
                        .build()
                } as FilterContextValue);
            });

            it("renders error message", () => {
                const filter = mount(
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
                    <DatagridDropdownFilter
                        {...commonProps}
                        auto={false}
                        multiSelect={false}
                        filterOptions={[
                            {
                                caption: dynamicValue<string>("wrong value"),
                                value: dynamicValue<string>("enum_value_3")
                            }
                        ]}
                    />
                );

<<<<<<< HEAD
                expect(container.querySelector(".alert")?.textContent).toBe("Invalid option value: 'enum_value_3'");
=======
                expect(filter.find(Alert).text()).toBe(
                    "Error: Invalid option (wrong value): option has invalid value and can't be used with attribute(s)"
                );
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            });
        });

        describe("with multiple invalid values", () => {
            beforeAll(() => {
<<<<<<< HEAD
                const props: HeaderFiltersStoreProps = {
                    filterList: [
                        {
                            filter: new ListAttributeValueBuilder()
                                .withUniverse(["enum_value_1", "enum_value_2"])
                                .withType("Enum")
                                .withFilterable(true)
                                .build()
                        },
                        {
                            filter: new ListAttributeValueBuilder()
                                .withUniverse([true, false])
                                .withType("Boolean")
                                .withFilterable(true)
                                .build()
                        }
                    ]
                };
                const headerFilterStore = new HeaderFiltersStore(props, headerFilterStoreInfo, null);
                (window as any)["com.mendix.widgets.web.filterable.filterContext.v2"] = createContext<FilterAPIv2>(
                    headerFilterStore.context
                );
            });

            it("renders error message", () => {
                const { container } = render(
=======
                (window as any)["com.mendix.widgets.web.filterable.filterContext"] = createContext({
                    filterDispatcher: jest.fn(),
                    multipleAttributes: {
                        attribute1: new ListAttributeValueBuilder()
                            .withUniverse(["enum_value_1", "enum_value_2"])
                            .withType("Enum")
                            .withFilterable(true)
                            .build(),
                        attribute2: new ListAttributeValueBuilder()
                            .withUniverse([true, false])
                            .withType("Boolean")
                            .withFilterable(true)
                            .build()
                    }
                } as FilterContextValue);
            });

            it("renders error message", () => {
                const filter = mount(
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
                    <DatagridDropdownFilter
                        {...commonProps}
                        auto={false}
                        multiSelect={false}
                        filterOptions={[
                            {
                                caption: dynamicValue<string>("wrong enum value"),
                                value: dynamicValue<string>("enum_value_3")
                            },
                            {
                                caption: dynamicValue<string>("wrong boolean value"),
                                value: dynamicValue<string>("no")
                            }
                        ]}
                    />
                );

<<<<<<< HEAD
                expect(container.querySelector(".alert")?.textContent).toBe("Invalid option value: 'enum_value_3'");
=======
                expect(filter.find(Alert).text()).toBe(
                    "Error: Invalid option (wrong enum value): option has invalid value and can't be used with attribute(s)"
                );
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            });
        });
    });

    describe("with multiple instances", () => {
        beforeAll(() => {
<<<<<<< HEAD
            const props: HeaderFiltersStoreProps = {
                filterList: [
                    {
                        filter: new ListAttributeValueBuilder()
                            .withUniverse(["enum_value_1", "enum_value_2"])
                            .withType("Enum")
                            .withFilterable(true)
                            .withFormatter(
                                value => value,
                                () => console.log("Parsed")
                            )
                            .build()
                    }
                ]
            };
            const headerFilterStore = new HeaderFiltersStore(props, headerFilterStoreInfo, null);
            (window as any)["com.mendix.widgets.web.filterable.filterContext.v2"] = createContext<FilterAPIv2>(
                headerFilterStore.context
            );
=======
            (window as any)["com.mendix.widgets.web.filterable.filterContext"] = createContext({
                filterDispatcher: jest.fn(),
                singleAttribute: new ListAttributeValueBuilder()
                    .withUniverse(["enum_value_1", "enum_value_2"])
                    .withType("Enum")
                    .withFilterable(true)
                    .withFormatter(
                        value => value,
                        () => console.log("Parsed")
                    )
                    .build()
            } as FilterContextValue);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        });

        it("renders with a unique id", () => {
            const { asFragment: fragment1 } = render(
                <DatagridDropdownFilter {...commonProps} auto multiSelect={false} filterOptions={[]} />
            );
            const { asFragment: fragment2 } = render(
                <DatagridDropdownFilter {...commonProps} auto multiSelect={false} filterOptions={[]} />
            );

            expect(fragment1().querySelector("input")?.getAttribute("aria-controls")).not.toBe(
                fragment2().querySelector("input")?.getAttribute("aria-controls")
            );
        });

        afterAll(() => {
<<<<<<< HEAD
            (window as any)["com.mendix.widgets.web.filterable.filterContext.v2"] = undefined;
=======
            (window as any)["com.mendix.widgets.web.filterable.filterContext"] = undefined;
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            delete (global as any)["com.mendix.widgets.web.UUID"];
        });
    });
});

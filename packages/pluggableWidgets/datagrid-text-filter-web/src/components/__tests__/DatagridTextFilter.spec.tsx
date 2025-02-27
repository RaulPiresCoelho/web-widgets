import "@testing-library/jest-dom";
<<<<<<< HEAD
import { FilterAPIv2 } from "@mendix/widget-plugin-filtering/context";
import { HeaderFiltersStore, HeaderFiltersStoreProps } from "@mendix/widget-plugin-filtering/stores/HeaderFiltersStore";
=======
import { FilterContextValue } from "@mendix/widget-plugin-filtering";
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
import {
    actionValue,
    dynamicValue,
    EditableValueBuilder,
    ListAttributeValueBuilder
} from "@mendix/widget-plugin-test-utils";
<<<<<<< HEAD
import { requirePlugin } from "@mendix/widget-plugin-external-events/plugin";
=======
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createContext, createElement } from "react";
import DatagridTextFilter from "../../DatagridTextFilter";
<<<<<<< HEAD
import { DatagridTextFilterContainerProps } from "../../../typings/DatagridTextFilterProps";
import { resetIdCounter } from "downshift";

export interface StaticInfo {
    name: string;
    filtersChannelName: string;
}

const commonProps: DatagridTextFilterContainerProps = {
=======
import { requirePlugin, deletePlugin } from "@mendix/widget-plugin-external-events/plugin";

const commonProps = {
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    class: "filter-custom-class",
    tabIndex: 0,
    name: "filter-test",
    defaultFilter: "equal" as const,
    adjustable: true,
    advanced: false,
    delay: 1000
};

<<<<<<< HEAD
const headerFilterStoreInfo: StaticInfo = {
    name: commonProps.name,
    filtersChannelName: "datagrid1"
};

jest.useFakeTimers();

beforeEach(() => {
    jest.spyOn(console, "warn").mockImplementation(() => {
        // noop
    });
    resetIdCounter();
});

afterEach(() => (console.warn as jest.Mock).mockRestore());

=======
jest.useFakeTimers();

>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
describe("Text Filter", () => {
    describe("with single instance", () => {
        afterEach(() => {
            delete (global as any)["com.mendix.widgets.web.UUID"];
        });

        describe("with defaultValue prop", () => {
<<<<<<< HEAD
            beforeEach(() => {
                const props: HeaderFiltersStoreProps = {
                    filterList: [
                        {
                            filter: new ListAttributeValueBuilder()
                                .withType("String")
                                .withFormatter(
                                    value => value,
                                    value => ({ valid: true, value })
                                )
                                .withFilterable(true)
                                .build()
                        }
                    ],
                    parentChannelName: "datagrid1"
                };
                const headerFilterStore = new HeaderFiltersStore(props, headerFilterStoreInfo, null);
                (window as any)["com.mendix.widgets.web.filterable.filterContext.v2"] = createContext<FilterAPIv2>(
                    headerFilterStore.context
                );
=======
            beforeAll(() => {
                (window as any)["com.mendix.widgets.web.filterable.filterContext"] = createContext({
                    filterDispatcher: jest.fn(),
                    singleAttribute: new ListAttributeValueBuilder().withType("String").withFilterable(true).build()
                } as FilterContextValue);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            });

            it("don't sync value when defaultValue changes from undefined to string", async () => {
                const { rerender } = render(<DatagridTextFilter {...commonProps} defaultValue={undefined} />);
<<<<<<< HEAD
                expect(screen.getByRole("textbox")).toHaveValue("");

                rerender(<DatagridTextFilter {...commonProps} defaultValue={dynamicValue<string>("xyz")} />);
=======

                expect(screen.getByRole("textbox")).toHaveValue("");

                // rerender component with new `defaultValue`
                const defaultValue = dynamicValue<string>("xyz");
                rerender(<DatagridTextFilter {...commonProps} defaultValue={defaultValue} />);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
                expect(screen.getByRole("textbox")).toHaveValue("");
            });

            it("don't sync value when defaultValue changes from string to string", async () => {
                const { rerender } = render(
                    <DatagridTextFilter {...commonProps} defaultValue={dynamicValue<string>("abc")} />
                );
<<<<<<< HEAD
                expect(screen.getByRole("textbox")).toHaveValue("abc");
                rerender(<DatagridTextFilter {...commonProps} defaultValue={dynamicValue<string>("xyz")} />);
=======

                expect(screen.getByRole("textbox")).toHaveValue("abc");

                // rerender component with new `defaultValue`
                const defaultValue = dynamicValue<string>("xyz");
                rerender(<DatagridTextFilter {...commonProps} defaultValue={defaultValue} />);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
                expect(screen.getByRole("textbox")).toHaveValue("abc");
            });

            it("don't sync value when defaultValue changes from string to undefined", async () => {
                const { rerender } = render(
                    <DatagridTextFilter {...commonProps} defaultValue={dynamicValue<string>("abc")} />
                );
<<<<<<< HEAD
                expect(screen.getByRole("textbox")).toHaveValue("abc");
                rerender(<DatagridTextFilter {...commonProps} defaultValue={undefined} />);
                expect(screen.getByRole("textbox")).toHaveValue("abc");
            });

            it("clears value when external reset all event is triggered with defaultValue", async () => {
                const attribute = new EditableValueBuilder<string>().build();
                const value = dynamicValue<string>("a string");
                const { getByRole } = render(
                    <DatagridTextFilter {...commonProps} valueAttribute={attribute} defaultValue={value} />
                );

                const input = getByRole("textbox");
                expect(input).toHaveValue("a string");

                const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
                // set input empty
                await user.clear(input);
                await user.type(input, "another string");

                act(() => {
                    jest.runAllTimers();
                });

                expect(attribute.setValue).toHaveBeenLastCalledWith("another string");

                // Trigger reset event
                const plugin = requirePlugin();
                act(() => {
                    plugin.emit("datagrid1", "reset.value", true);
                });

                expect(input).toHaveValue("a string");
                expect(attribute.setValue).toHaveBeenLastCalledWith("a string");
            });
            it("sets value when external set value event is triggered with defaultValue", async () => {
                const attribute = new EditableValueBuilder<string>().build();
                const value = dynamicValue<string>("a string");
                const { getByRole } = render(
                    <DatagridTextFilter {...commonProps} valueAttribute={attribute} defaultValue={value} />
                );

                const input = getByRole("textbox");
                expect(input).toHaveValue("a string");

                const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
                // set input empty
                await user.clear(input);
                await user.type(input, "another string");

                act(() => {
                    jest.runAllTimers();
                });

                expect(attribute.setValue).toHaveBeenLastCalledWith("another string");

                // Trigger reset event
                const plugin = requirePlugin();
                act(() => {
                    plugin.emit("datagrid1", "set.value", true, {
                        stringValue: "another string"
                    });
                });

                expect(input).toHaveValue("another string");
                expect(attribute.setValue).toHaveBeenLastCalledWith("another string");
            });
=======

                expect(screen.getByRole("textbox")).toHaveValue("abc");

                // rerender component with new `defaultValue`
                rerender(<DatagridTextFilter {...commonProps} defaultValue={undefined} />);
                expect(screen.getByRole("textbox")).toHaveValue("abc");
            });
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        });

        describe("with single attribute", () => {
            beforeAll(() => {
<<<<<<< HEAD
                const props: HeaderFiltersStoreProps = {
                    filterList: [
                        {
                            filter: new ListAttributeValueBuilder()
                                .withType("String")
                                .withFormatter(
                                    value => value,
                                    value => ({ valid: true, value })
                                )
                                .withFilterable(true)
                                .build()
                        }
                    ],
                    parentChannelName: "datagrid1"
                };
                const headerFilterStore = new HeaderFiltersStore(props, headerFilterStoreInfo, null);
                (window as any)["com.mendix.widgets.web.filterable.filterContext.v2"] = createContext<FilterAPIv2>(
                    headerFilterStore.context
                );
            });

            beforeEach(() => {
                // Reset any shared state
                jest.clearAllMocks();
                jest.clearAllTimers();
=======
                (window as any)["com.mendix.widgets.web.filterable.filterContext"] = createContext({
                    filterDispatcher: jest.fn(),
                    singleAttribute: new ListAttributeValueBuilder().withType("String").withFilterable(true).build()
                } as FilterContextValue);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            });

            it("renders correctly", () => {
                const { asFragment } = render(<DatagridTextFilter {...commonProps} />);

                expect(asFragment()).toMatchSnapshot();
            });

            it("triggers attribute and onchange action on change filter value", async () => {
                const action = actionValue();
                const attribute = new EditableValueBuilder<string>().build();
                render(<DatagridTextFilter {...commonProps} onChange={action} valueAttribute={attribute} />);

                const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
                await user.type(screen.getByRole("textbox"), "B");

<<<<<<< HEAD
                act(() => {
                    jest.runOnlyPendingTimers();
                });
=======
                jest.runOnlyPendingTimers();
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

                expect(attribute.setValue).toHaveBeenCalled();
                expect(action.execute).toHaveBeenCalled();
            });

<<<<<<< HEAD
            it("clears value when external reset all event is triggered", async () => {
                const attribute = new EditableValueBuilder<string>().build();
                const { getByRole } = render(<DatagridTextFilter {...commonProps} valueAttribute={attribute} />);

                const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

                const input = getByRole("textbox");
                await user.clear(input);
                expect(input).toHaveValue("");

                // set input empty
                await user.clear(input);
                await user.type(input, "a string");

                act(() => {
                    jest.runAllTimers();
                });

                expect(attribute.setValue).toHaveBeenLastCalledWith("a string");

                // Trigger reset event
                const plugin = requirePlugin();
                act(() => {
                    plugin.emit("datagrid1", "reset.value", false);
                });

                expect(input).toHaveValue("");
                expect(attribute.setValue).toHaveBeenLastCalledWith(undefined);
            });

            afterAll(() => {
                (window as any)["com.mendix.widgets.web.filterable.filterContext.v2"] = undefined;
=======
            afterAll(() => {
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
                                .withType("String")
                                .withFormatter(
                                    value => value,
                                    () => {
                                        //
                                    }
                                )
                                .withFilterable(true)
                                .build()
                        },
                        {
                            filter: new ListAttributeValueBuilder()
                                .withId("attribute2")
                                .withType("HashString")
                                .withFormatter(
                                    value => value,
                                    () => {
                                        //
                                    }
                                )
                                .withFilterable(true)
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
                    multipleAttributes: {
                        attribute1: new ListAttributeValueBuilder()
                            .withId("attribute1")
                            .withType("String")
                            .withFilterable(true)
                            .build(),
                        attribute2: new ListAttributeValueBuilder()
                            .withId("attribute2")
                            .withType("HashString")
                            .withFilterable(true)
                            .build()
                    }
                } as FilterContextValue);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            });

            it("renders correctly", () => {
                const { asFragment } = render(<DatagridTextFilter {...commonProps} />);

                expect(asFragment()).toMatchSnapshot();
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
                        { filter: new ListAttributeValueBuilder().withType("Decimal").withFilterable(true).build() }
                    ]
                };
                const headerFilterStore = new HeaderFiltersStore(props, headerFilterStoreInfo, null);
                (window as any)["com.mendix.widgets.web.filterable.filterContext.v2"] = createContext<FilterAPIv2>(
                    headerFilterStore.context
                );
=======
                (window as any)["com.mendix.widgets.web.filterable.filterContext"] = createContext({
                    filterDispatcher: jest.fn(),
                    singleAttribute: new ListAttributeValueBuilder().withType("Decimal").withFilterable(true).build()
                } as FilterContextValue);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            });

            it("renders error message", () => {
                const { asFragment } = render(<DatagridTextFilter {...commonProps} />);

                expect(asFragment()).toMatchSnapshot();
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
                                .withType("Decimal")
                                .withFilterable(true)
                                .build()
                        },
                        {
                            filter: new ListAttributeValueBuilder()
                                .withId("attribute2")
                                .withType("Long")
                                .withFilterable(true)
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
                    multipleAttributes: {
                        attribute1: new ListAttributeValueBuilder()
                            .withId("attribute1")
                            .withType("Decimal")
                            .withFilterable(true)
                            .build(),
                        attribute2: new ListAttributeValueBuilder()
                            .withId("attribute2")
                            .withType("Long")
                            .withFilterable(true)
                            .build()
                    }
                } as FilterContextValue);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            });

            it("renders error message", () => {
                const { asFragment } = render(<DatagridTextFilter {...commonProps} />);

                expect(asFragment()).toMatchSnapshot();
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
=======
                (window as any)["com.mendix.widgets.web.filterable.filterContext"] = undefined;
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            });

            it("renders error message", () => {
                const { asFragment } = render(<DatagridTextFilter {...commonProps} />);

                expect(asFragment()).toMatchSnapshot();
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
                            .withType("String")
                            .withFormatter(
                                value => value,
                                () => {
                                    //
                                }
                            )
                            .withFilterable(true)
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
                singleAttribute: new ListAttributeValueBuilder().withType("String").withFilterable(true).build()
            } as FilterContextValue);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        });

        it("renders with a unique id", () => {
            const { asFragment: fragment1 } = render(<DatagridTextFilter {...commonProps} />);
            const { asFragment: fragment2 } = render(<DatagridTextFilter {...commonProps} />);

            expect(fragment1().querySelector("button")?.getAttribute("aria-controls")).not.toBe(
                fragment2().querySelector("button")?.getAttribute("aria-controls")
            );
        });

        afterAll(() => {
<<<<<<< HEAD
            (window as any)["com.mendix.widgets.web.filterable.filterContext.v2"] = undefined;
            delete (global as any)["com.mendix.widgets.web.UUID"];
        });
    });
=======
            (window as any)["com.mendix.widgets.web.filterable.filterContext"] = undefined;
            delete (global as any)["com.mendix.widgets.web.UUID"];
        });
    });

    describe("events", () => {
        let dispatch: jest.Mock;
        let parentChannelName: string;
        let ctx: FilterContextValue;
        beforeEach(() => {
            dispatch = jest.fn();
            parentChannelName = Math.random().toString(36).slice(-10);
            ctx = {
                filterDispatcher: dispatch,
                eventsChannelName: parentChannelName,
                singleAttribute: new ListAttributeValueBuilder().withType("String").withFilterable(true).build()
            };
            (window as any)["com.mendix.widgets.web.filterable.filterContext"] = createContext(ctx);
            deletePlugin();
        });

        it("resets value on external event", async () => {
            const plugin = requirePlugin();

            expect(dispatch).toHaveBeenCalledTimes(0);

            render(<DatagridTextFilter {...commonProps} defaultValue={dynamicValue<string>("foo")} name="widget_x" />);

            const input = screen.getByRole("textbox");
            expect(dispatch).toHaveBeenCalledTimes(1);
            expect(input).toHaveValue("foo");

            act(() => plugin.emit("widget_x", "reset.value"));

            expect(dispatch).toHaveBeenCalledTimes(2);
            const [{ getFilterCondition }] = dispatch.mock.lastCall;
            expect(input).toHaveValue("");
            expect(getFilterCondition()).toEqual(undefined);
        });

        it("resets value on parent event", async () => {
            const plugin = requirePlugin();

            expect(dispatch).toHaveBeenCalledTimes(0);

            render(<DatagridTextFilter {...commonProps} defaultValue={dynamicValue<string>("bar")} name="widget_x" />);

            const input = screen.getByRole("textbox");
            expect(dispatch).toHaveBeenCalledTimes(1);
            expect(input).toHaveValue("bar");

            act(() => plugin.emit(parentChannelName, "reset.value"));

            expect(dispatch).toHaveBeenCalledTimes(2);
            const [{ getFilterCondition }] = dispatch.mock.lastCall;
            expect(input).toHaveValue("");
            expect(getFilterCondition()).toEqual(undefined);
        });
    });
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
});

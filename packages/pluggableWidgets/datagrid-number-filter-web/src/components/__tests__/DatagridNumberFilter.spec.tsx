import "@testing-library/jest-dom";
<<<<<<< HEAD
import { FilterAPIv2 } from "@mendix/widget-plugin-filtering/context";
import { requirePlugin } from "@mendix/widget-plugin-external-events/plugin";
import { HeaderFiltersStore, HeaderFiltersStoreProps } from "@mendix/widget-plugin-filtering/stores/HeaderFiltersStore";
import {
    actionValue,
    dynamic,
=======
import { FilterContextValue } from "@mendix/widget-plugin-filtering";
import {
    actionValue,
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    dynamicValue,
    EditableValueBuilder,
    ListAttributeValueBuilder
} from "@mendix/widget-plugin-test-utils";
import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createContext, createElement } from "react";

import DatagridNumberFilter from "../../DatagridNumberFilter";
import { Big } from "big.js";
<<<<<<< HEAD
import { DatagridNumberFilterContainerProps } from "../../../typings/DatagridNumberFilterProps";
import { resetIdCounter } from "downshift";

export interface StaticInfo {
    name: string;
    filtersChannelName: string;
}

const commonProps: DatagridNumberFilterContainerProps = {
=======
import { deletePlugin, requirePlugin } from "@mendix/widget-plugin-external-events/plugin";
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
describe("Number Filter", () => {
    describe("with single instance", () => {
        afterEach(() => {
            delete (global as any)["com.mendix.widgets.web.UUID"];
        });

        describe("with single attribute", () => {
<<<<<<< HEAD
            beforeEach(() => {
                const props: HeaderFiltersStoreProps = {
                    filterList: [
                        {
                            filter: new ListAttributeValueBuilder()
                                .withType("Long")
                                .withFormatter(
                                    value => (value ? value.toString() : ""),
                                    (value: string) => ({ valid: true, value })
                                )
                                .withFilterable(true)
                                .build()
                        }
                    ],
                    parentChannelName: headerFilterStoreInfo.filtersChannelName
                };
                const headerFilterStore = new HeaderFiltersStore(props, headerFilterStoreInfo, null);
                (window as any)["com.mendix.widgets.web.filterable.filterContext.v2"] = createContext<FilterAPIv2>(
                    headerFilterStore.context
                );
=======
            beforeAll(() => {
                (window as any)["com.mendix.widgets.web.filterable.filterContext"] = createContext({
                    filterDispatcher: jest.fn(),
                    singleAttribute: new ListAttributeValueBuilder().withType("Long").withFilterable(true).build()
                } as FilterContextValue);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            });

            it("renders correctly", () => {
                const { asFragment } = render(<DatagridNumberFilter {...commonProps} />);

                expect(asFragment()).toMatchSnapshot();
            });

            it("triggers attribute and onchange action on change filter value", async () => {
                const action = actionValue();
                const attribute = new EditableValueBuilder<Big>().build();
                render(<DatagridNumberFilter {...commonProps} onChange={action} valueAttribute={attribute} />);

                const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
<<<<<<< HEAD
                await user.type(screen.getByRole("spinbutton"), "10");

                act(() => {
                    jest.runOnlyPendingTimers();
                });

                expect(action.execute).toHaveBeenCalledTimes(1);
                expect(attribute.setValue).toHaveBeenCalledWith(new Big("10"));
            });

            it("clears value when external reset all event is triggered without a default value", async () => {
                const attribute = new EditableValueBuilder<Big>().build();
                const { getByRole } = render(<DatagridNumberFilter {...commonProps} valueAttribute={attribute} />);

                // First set a value
                const input = getByRole("spinbutton");
                expect(input).toHaveValue(null);

                const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
                await user.type(input, "42");

                // Run timers for the debounced setValue
                act(() => {
                    jest.runAllTimers();
                });

                expect(attribute.setValue).toHaveBeenLastCalledWith(Big(42));

                // Trigger reset event
                const plugin = requirePlugin();
                act(() => {
                    plugin.emit("datagrid1", "reset.value", false);
                });

                expect(input).toHaveValue(null);
                expect(attribute.setValue).toHaveBeenLastCalledWith(undefined);
=======

                await user.type(screen.getByRole("spinbutton"), "10");

                jest.runOnlyPendingTimers();

                expect(action.execute).toBeCalledTimes(1);
                expect(attribute.setValue).toBeCalledWith(new Big(10));
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            });

            describe("with defaultValue", () => {
                it("initializes with defaultValue", () => {
                    render(<DatagridNumberFilter {...commonProps} defaultValue={dynamicValue<Big>(new Big(100))} />);
                    expect(screen.getByRole("spinbutton")).toHaveValue(100);
                });
<<<<<<< HEAD

=======
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
                it("do not sync value and defaultValue when defaultValue changes from undefined to number", () => {
                    const { rerender } = render(<DatagridNumberFilter {...commonProps} defaultValue={undefined} />);
                    expect(screen.getByRole("spinbutton")).toHaveValue(null);
                    rerender(<DatagridNumberFilter {...commonProps} defaultValue={dynamicValue<Big>(new Big(100))} />);
                    expect(screen.getByRole("spinbutton")).toHaveValue(null);
                });
<<<<<<< HEAD

=======
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
                it("do not sync value and defaultValue when defaultValue changes from number to undefined", async () => {
                    const { rerender } = render(
                        <DatagridNumberFilter {...commonProps} defaultValue={dynamicValue<Big>(new Big(100))} />
                    );
                    expect(screen.getByRole("spinbutton")).toHaveValue(100);
                    rerender(<DatagridNumberFilter {...commonProps} defaultValue={undefined} />);
                    await waitFor(() => {
                        expect(screen.getByRole("spinbutton")).toHaveValue(100);
                    });
                });
<<<<<<< HEAD

                it("clears value when external reset all event is triggered", async () => {
                    const attribute = new EditableValueBuilder<Big>().build();
                    const value = dynamic<Big>(Big(123));
                    const { getByRole } = render(
                        <DatagridNumberFilter {...commonProps} valueAttribute={attribute} defaultValue={value} />
                    );

                    const input = getByRole("spinbutton");
                    expect(input).toHaveValue(123);

                    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
                    // set input empty
                    await user.clear(input);
                    await user.type(input, "42");

                    act(() => {
                        jest.runAllTimers();
                    });

                    expect(attribute.setValue).toHaveBeenLastCalledWith(Big(42));

                    // Trigger reset event
                    const plugin = requirePlugin();
                    act(() => {
                        plugin.emit("datagrid1", "reset.value", true);
                    });

                    expect(input).toHaveValue(123);
                    expect(attribute.setValue).toHaveBeenLastCalledWith(Big(123));
                });
            });

            afterAll(() => {
                (window as any)["com.mendix.widgets.web.filterable.filterContext.v2"] = undefined;
=======
            });

            afterAll(() => {
                (window as any)["com.mendix.widgets.web.filterable.filterContext"] = undefined;
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            });
        });

        describe("with multiple attributes", () => {
<<<<<<< HEAD
            beforeEach(() => {
                const props: HeaderFiltersStoreProps = {
                    filterList: [
                        {
                            filter: new ListAttributeValueBuilder()
                                .withId("attribute1")
                                .withType("Long")
                                .withFormatter(
                                    value => value,
                                    () => {
                                        // noop
                                    }
                                )
                                .withFilterable(true)
                                .build()
                        },
                        {
                            filter: new ListAttributeValueBuilder()
                                .withId("attribute2")
                                .withType("Decimal")
                                .withFormatter(
                                    value => value,
                                    () => {
                                        // noop
                                    }
                                )
                                .withFilterable(true)
                                .build()
                        }
                    ],
                    parentChannelName: headerFilterStoreInfo.filtersChannelName
                };
                const headerFilterStore = new HeaderFiltersStore(props, headerFilterStoreInfo, null);
                (window as any)["com.mendix.widgets.web.filterable.filterContext.v2"] = createContext<FilterAPIv2>(
                    headerFilterStore.context
                );
=======
            beforeAll(() => {
                (window as any)["com.mendix.widgets.web.filterable.filterContext"] = createContext({
                    filterDispatcher: jest.fn(),
                    multipleAttributes: {
                        attribute1: new ListAttributeValueBuilder()
                            .withId("attribute1")
                            .withType("Long")
                            .withFilterable(true)
                            .build(),
                        attribute2: new ListAttributeValueBuilder()
                            .withId("attribute2")
                            .withType("Decimal")
                            .withFilterable(true)
                            .build()
                    }
                } as FilterContextValue);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            });

            it("renders correctly", () => {
                const { asFragment } = render(<DatagridNumberFilter {...commonProps} />);

                expect(asFragment()).toMatchSnapshot();
            });

<<<<<<< HEAD
            it("clears value when external reset all event is triggered without a default value", async () => {
                const attribute = new EditableValueBuilder<Big>().build();
                const { getByRole } = render(<DatagridNumberFilter {...commonProps} valueAttribute={attribute} />);

                const input = getByRole("spinbutton");
                expect(input).toHaveValue(null);

                const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
                await user.type(input, "42");

                act(() => {
                    jest.runAllTimers();
                });

                expect(attribute.setValue).toHaveBeenLastCalledWith(Big(42));

                const plugin = requirePlugin();
                act(() => {
                    plugin.emit("datagrid1", "reset.value", false);
                });

                expect(input).toHaveValue(null);
                expect(attribute.setValue).toHaveBeenLastCalledWith(undefined);
            });

            it("set value when external set value event is triggered", async () => {
                const attribute = new EditableValueBuilder<Big>().build();
                const { getByRole } = render(<DatagridNumberFilter {...commonProps} valueAttribute={attribute} />);

                const input = getByRole("spinbutton");
                expect(input).toHaveValue(null);

                const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
                await user.type(input, "42");

                act(() => {
                    jest.runAllTimers();
                });

                expect(attribute.setValue).toHaveBeenLastCalledWith(Big(42));

                const plugin = requirePlugin();
                act(() => {
                    plugin.emit("filter-test", "set.value", false, {
                        numberValue: Big(100)
                    });
                });

                expect(input).toHaveValue(100);
                expect(attribute.setValue).toHaveBeenLastCalledWith(Big(100));
            });

            afterAll(() => {
                (window as any)["com.mendix.widgets.web.filterable.filterContext.v2"] = undefined;
=======
            afterAll(() => {
                (window as any)["com.mendix.widgets.web.filterable.filterContext"] = undefined;
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            });
        });

        describe("with wrong attribute's type", () => {
            beforeAll(() => {
<<<<<<< HEAD
                const props: HeaderFiltersStoreProps = {
                    filterList: [
                        { filter: new ListAttributeValueBuilder().withType("Boolean").withFilterable(true).build() }
                    ]
                };
                const headerFilterStore = new HeaderFiltersStore(props, headerFilterStoreInfo, null);
                (window as any)["com.mendix.widgets.web.filterable.filterContext.v2"] = createContext<FilterAPIv2>(
                    headerFilterStore.context
                );
=======
                (window as any)["com.mendix.widgets.web.filterable.filterContext"] = createContext({
                    filterDispatcher: jest.fn(),
                    singleAttribute: new ListAttributeValueBuilder().withType("Boolean").withFilterable(true).build()
                } as FilterContextValue);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            });

            it("renders error message", () => {
                const { asFragment } = render(<DatagridNumberFilter {...commonProps} />);

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
                                .withType("String")
                                .withSortable(true)
                                .build()
                        },
                        {
                            filter: new ListAttributeValueBuilder()
                                .withId("attribute2")
                                .withType("HashString")
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

            it("renders error message", () => {
                const { asFragment } = render(<DatagridNumberFilter {...commonProps} />);

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
                const { asFragment } = render(<DatagridNumberFilter {...commonProps} />);

                expect(asFragment()).toMatchSnapshot();
            });
        });
    });

    describe("with multiple instances", () => {
<<<<<<< HEAD
        beforeEach(() => {
            const props: HeaderFiltersStoreProps = {
                filterList: [
                    {
                        filter: new ListAttributeValueBuilder()
                            .withType("Long")
                            .withFormatter(
                                value => value,
                                () => {
                                    // noop
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
        beforeAll(() => {
            (window as any)["com.mendix.widgets.web.filterable.filterContext"] = createContext({
                filterDispatcher: jest.fn(),
                singleAttribute: new ListAttributeValueBuilder().withType("Long").withFilterable(true).build()
            } as FilterContextValue);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        });

        it("renders with a unique id", () => {
            const { asFragment: fragment1 } = render(<DatagridNumberFilter {...commonProps} />);
            const { asFragment: fragment2 } = render(<DatagridNumberFilter {...commonProps} />);

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
                singleAttribute: new ListAttributeValueBuilder().withType("Long").withFilterable(true).build()
            };
            (window as any)["com.mendix.widgets.web.filterable.filterContext"] = createContext(ctx);
            deletePlugin();
        });

        it("resets value on external event", async () => {
            const plugin = requirePlugin();

            expect(dispatch).toHaveBeenCalledTimes(0);

            render(
                <DatagridNumberFilter {...commonProps} defaultValue={dynamicValue<Big>(new Big(100))} name="widget_x" />
            );

            const input = screen.getByRole("spinbutton");
            expect(dispatch).toHaveBeenCalledTimes(1);
            expect(input).toHaveValue(100);

            act(() => plugin.emit("widget_x", "reset.value"));

            expect(dispatch).toHaveBeenCalledTimes(2);
            const [{ getFilterCondition }] = dispatch.mock.lastCall;
            expect(input).toHaveValue(null);
            expect(getFilterCondition()).toEqual(undefined);
        });

        it("resets value on parent event", async () => {
            const plugin = requirePlugin();

            expect(dispatch).toHaveBeenCalledTimes(0);

            render(
                <DatagridNumberFilter {...commonProps} defaultValue={dynamicValue<Big>(new Big(100))} name="widget_x" />
            );

            const input = screen.getByRole("spinbutton");
            expect(dispatch).toHaveBeenCalledTimes(1);
            expect(input).toHaveValue(100);

            act(() => plugin.emit(parentChannelName, "reset.value"));

            expect(dispatch).toHaveBeenCalledTimes(2);
            const [{ getFilterCondition }] = dispatch.mock.lastCall;
            expect(input).toHaveValue(null);
            expect(getFilterCondition()).toEqual(undefined);
        });
    });
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
});

<<<<<<< HEAD
import { getGlobalFilterContextObject } from "@mendix/widget-plugin-filtering/context";
import { HeaderFiltersStore } from "@mendix/widget-plugin-filtering/stores/HeaderFiltersStore";
import {
    getGlobalSelectionContext,
    SelectionHelper,
    useCreateSelectionContextValue
} from "@mendix/widget-plugin-grid/selection";
import { createElement, memo, ReactElement, ReactNode } from "react";

interface WidgetHeaderContextProps {
    children?: ReactNode;
    filtersStore: HeaderFiltersStore;
    selectionHelper?: SelectionHelper;
}

const SelectionContext = getGlobalSelectionContext();
const FilterContext = getGlobalFilterContextObject();

function FilterAPIProvider(props: { filtersStore: HeaderFiltersStore; children?: ReactNode }): ReactElement {
    return <FilterContext.Provider value={props.filtersStore.context}>{props.children}</FilterContext.Provider>;
}

function SelectionStatusProvider(props: { selectionHelper?: SelectionHelper; children?: ReactNode }): ReactElement {
    const value = useCreateSelectionContextValue(props.selectionHelper);
    return <SelectionContext.Provider value={value}>{props.children}</SelectionContext.Provider>;
}

function HeaderContainer(props: WidgetHeaderContextProps): ReactElement {
    return (
        <FilterAPIProvider filtersStore={props.filtersStore}>
            <SelectionStatusProvider selectionHelper={props.selectionHelper}>{props.children}</SelectionStatusProvider>
        </FilterAPIProvider>
    );
}

const component = memo(HeaderContainer);
=======
import { createElement, ReactElement, memo, ReactNode } from "react";

import { getGlobalSelectionContext } from "@mendix/widget-plugin-grid/selection";
import { getGlobalFilterContextObject } from "@mendix/widget-plugin-filtering";
import { HeaderFiltersStore } from "../helpers/state/HeaderFiltersStore";

interface WidgetHeaderContextProps {
    selectionContextValue: { status: "all" | "some" | "none"; toggle: () => void } | undefined;
    children?: ReactNode;
    eventsChannelName?: string;
    headerFilterStore: HeaderFiltersStore;
}

const component = memo((props: WidgetHeaderContextProps) => {
    const SelectionContext = getGlobalSelectionContext();
    const FilterContext = getGlobalFilterContextObject();

    return (
        <FilterContext.Provider
            value={{
                eventsChannelName: props.eventsChannelName,
                filterDispatcher: prev => {
                    if (prev.filterType) {
                        props.headerFilterStore.setFilterState(prev.filterType, prev);
                        props.headerFilterStore.setDirty();
                    }
                    return prev;
                },
                ...props.headerFilterStore.getFilterContextProps()
            }}
        >
            <SelectionContext.Provider value={props.selectionContextValue}>{props.children}</SelectionContext.Provider>
        </FilterContext.Provider>
    );
});
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

component.displayName = "WidgetHeaderContext";

// Override NamedExoticComponent type
export const WidgetHeaderContext = component as (props: WidgetHeaderContextProps) => ReactElement;

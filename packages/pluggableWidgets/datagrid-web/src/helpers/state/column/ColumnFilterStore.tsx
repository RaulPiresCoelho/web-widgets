<<<<<<< HEAD
import { FilterAPIv2, getGlobalFilterContextObject } from "@mendix/widget-plugin-filtering/context";
import { RefFilterStore, RefFilterStoreProps } from "@mendix/widget-plugin-filtering/stores/RefFilterStore";
import { StaticSelectFilterStore } from "@mendix/widget-plugin-filtering/stores/StaticSelectFilterStore";
import { InputFilterStore, attrgroupFilterStore } from "@mendix/widget-plugin-filtering/stores/store-utils";
import { ensure } from "@mendix/widget-plugin-platform/utils/ensure";
import { FilterCondition } from "mendix/filters";
import { ListAttributeValue, ListAttributeListValue } from "mendix";
import { action, computed, makeObservable } from "mobx";
import { ReactNode, createElement } from "react";
import { ColumnsType } from "../../../../typings/DatagridProps";
import { StaticInfo } from "../../../typings/static-info";
import { FilterData } from "@mendix/widget-plugin-filtering/typings/settings";
import { value } from "@mendix/widget-plugin-filtering/result-meta";
export interface IColumnFilterStore {
    renderFilterWidgets(): ReactNode;
}

type FilterStore = InputFilterStore | StaticSelectFilterStore | RefFilterStore;

const { Provider } = getGlobalFilterContextObject();

export class ColumnFilterStore implements IColumnFilterStore {
    private _widget: ReactNode;
    private _filterStore: FilterStore | null = null;
    private _context: FilterAPIv2;

    constructor(props: ColumnsType, info: StaticInfo, dsViewState: FilterCondition | null) {
        this._widget = props.filter;
        this._filterStore = this.createFilterStore(props, dsViewState);
        this._context = this.createContext(this._filterStore, info);

        makeObservable<this, "_updateStore">(this, {
            _updateStore: action,
            condition2: computed,
=======
import { ReactNode } from "react";
import { action, computed, makeObservable, observable } from "mobx";
import { FilterCondition } from "mendix/filters";
import { ColumnsType } from "../../../../typings/DatagridProps";
import { ListAttributeValue, ListExpressionValue, ListReferenceSetValue, ListReferenceValue, ListValue } from "mendix";
import {
    AssociationProperties,
    FilterContextValue,
    FilterState,
    readInitFilterValues
} from "@mendix/widget-plugin-filtering";
import { ensure } from "@mendix/widget-plugin-platform/utils/ensure";
import { Big } from "big.js";

export interface IColumnFilterStore {
    setFilterState(newState: FilterState | undefined): void;

    needsFilterContext: boolean;

    getFilterContextProps(): Pick<
        FilterContextValue,
        "singleAttribute" | "associationProperties" | "singleInitialFilter"
    >;

    renderFilterWidgets(): ReactNode;
}

export class ColumnFilterStore implements IColumnFilterStore {
    private filterState: FilterState | undefined = undefined;

    private _attribute?: ListAttributeValue<string | Big | boolean | Date>;
    private _filter?: ReactNode;
    private _filterAssociation?: ListReferenceValue | ListReferenceSetValue;
    private _filterAssociationOptions?: ListValue;
    private _filterAssociationOptionLabel?: ListExpressionValue<string>;

    constructor(props: ColumnsType, private initialFilters: FilterCondition | undefined) {
        if (props.filterAssociationOptions) {
            props.filterAssociationOptions.setLimit(0);
        }
        this.updateProps(props);
        makeObservable<
            ColumnFilterStore,
            | "filterState"
            | "_attribute"
            | "_filter"
            | "_filterAssociation"
            | "_filterAssociationOptions"
            | "_filterAssociationOptionLabel"
        >(this, {
            _attribute: observable.ref,
            _filter: observable.ref,
            _filterAssociation: observable.ref,
            _filterAssociationOptions: observable.ref,
            _filterAssociationOptionLabel: observable.ref,

            condition: computed.struct,

            filterState: observable.ref,
            setFilterState: action,
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            updateProps: action
        });
    }

    updateProps(props: ColumnsType): void {
<<<<<<< HEAD
        this._widget = props.filter;
        this._updateStore(props);
    }

    private _updateStore(props: ColumnsType): void {
        const store = this._filterStore;

        if (store === null) {
            return;
        }

        if (store.type === "refselect") {
            store.updateProps(this.toRefselectProps(props));
        } else if (isListAttributeValue(props.attribute)) {
            store.updateProps([props.attribute]);
        }
    }

    private toRefselectProps(props: ColumnsType): RefFilterStoreProps {
        return {
            ref: ensure(props.filterAssociation, errorMessage("filterAssociation")),
            refOptions: ensure(props.filterAssociationOptions, errorMessage("filterAssociationOptions")),
            caption: ensure(props.filterAssociationOptionLabel, errorMessage("filterAssociationOptionLabel")),
            fetchOptionsLazy: props.fetchOptionsLazy
        };
    }

    private createFilterStore(props: ColumnsType, dsViewState: FilterCondition | null): FilterStore | null {
        if (props.filterAssociation) {
            return new RefFilterStore(this.toRefselectProps(props), dsViewState);
        }

        if (isListAttributeValue(props.attribute)) {
            return attrgroupFilterStore(props.attribute.type, [props.attribute], dsViewState);
        }

        return null;
    }

    private createContext(store: FilterStore | null, info: StaticInfo): FilterAPIv2 {
        return {
            version: 2,
            parentChannelName: info.filtersChannelName,
            provider: value({
                type: "direct",
                store
            })
        };
    }

    renderFilterWidgets(): ReactNode {
        return <Provider value={this._context}>{this._widget}</Provider>;
    }

    get condition2(): FilterCondition | undefined {
        return this._filterStore ? this._filterStore.condition : undefined;
    }

    get settings(): FilterData | undefined {
        return this._filterStore?.toJSON();
    }

    set settings(data: FilterData | undefined) {
        if (data === undefined) {
            this._filterStore?.reset();
        } else {
            this._filterStore?.fromJSON(data);
        }
    }
}

const isListAttributeValue = (
    attribute?: ListAttributeValue | ListAttributeListValue
): attribute is ListAttributeValue => {
    return !!(attribute && attribute.isList === false);
};

=======
        this._attribute = props.attribute;
        this._filter = props.filter;
        this._filterAssociation = props.filterAssociation;
        this._filterAssociationOptions = props.filterAssociationOptions;
        this._filterAssociationOptionLabel = props.filterAssociationOptionLabel;
    }

    get needsFilterContext(): boolean {
        return !!this._attribute || !!this._filterAssociation;
    }

    renderFilterWidgets(): ReactNode {
        return this._filter;
    }

    getFilterContextProps(): Pick<
        FilterContextValue,
        "singleAttribute" | "associationProperties" | "singleInitialFilter"
    > {
        return {
            singleAttribute: this._attribute,
            singleInitialFilter: readInitFilterValues(this._attribute, this.initialFilters),
            associationProperties: this.getColumnAssociationProps()
        };
    }

    private getColumnAssociationProps(): AssociationProperties | undefined {
        if (!this._filterAssociation) {
            return;
        }

        const association = ensure(this._filterAssociation, errorMessage("filterAssociation"));
        const optionsSource = ensure(this._filterAssociationOptions, errorMessage("filterAssociationOptions"));
        const labelSource = ensure(this._filterAssociationOptionLabel, errorMessage("filterAssociationOptionLabel"));

        return {
            association,
            optionsSource,
            getOptionLabel: item => labelSource.get(item).value ?? "Error: unable to get caption"
        };
    }

    setFilterState(newState: FilterState | undefined): void {
        this.filterState = newState;
    }

    get condition(): FilterCondition | undefined {
        if (!this.filterState) {
            return undefined;
        }

        return this.filterState.getFilterCondition();
    }
}

>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
const errorMessage = (propName: string): string =>
    `Can't map ColumnsType to AssociationProperties: ${propName} is undefined`;

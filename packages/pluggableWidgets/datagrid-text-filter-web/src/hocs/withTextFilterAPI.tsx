import { Alert } from "@mendix/widget-plugin-component-kit/Alert";
import { useFilterContextValue } from "@mendix/widget-plugin-filtering/provider";
import { createElement } from "react";
import { ENOCONTEXT, EMISSINGSTORE, ESTORETYPE } from "./errors";
import { String_InputFilterInterface } from "@mendix/widget-plugin-filtering/typings/InputFilterInterface";
import { isStringFilter } from "@mendix/widget-plugin-filtering/stores/store-utils";

type TextFilterAPI = {
    filterStore: String_InputFilterInterface;
    parentChannelName?: string;
};

export function withTextFilterAPI<T>(
    Component: (props: T & TextFilterAPI) => React.ReactElement
): (props: T) => React.ReactElement {
    return function FilterAPIProvider(props) {
        const apiv2 = useFilterContextValue();

        if (apiv2.hasError) {
            return <Alert bootstrapStyle="danger">{ENOCONTEXT}</Alert>;
        }

        const store = apiv2.value.store;

        if (store === null) {
            return <Alert bootstrapStyle="danger">{EMISSINGSTORE}</Alert>;
        }

        if (store.storeType === "optionlist" || !isStringFilter(store)) {
            return <Alert bootstrapStyle="danger">{ESTORETYPE}</Alert>;
        }

        return <Component filterStore={store} parentChannelName={apiv2.value.eventsChannelName} {...props} />;
    };
}

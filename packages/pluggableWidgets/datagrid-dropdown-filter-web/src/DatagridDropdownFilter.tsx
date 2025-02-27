<<<<<<< HEAD
import { createElement, ReactElement } from "react";
import { withPreloader } from "@mendix/widget-plugin-platform/hoc/withPreloader";
import { DatagridDropdownFilterContainerProps } from "../typings/DatagridDropdownFilterProps";
import { StaticFilterContainer } from "./components/StaticFilterContainer";
import { withSelectFilterAPI, Select_FilterAPIv2 } from "./hocs/withSelectFilterAPI";
import { RefFilterContainer } from "./components/RefFilterContainer";

function Container(props: DatagridDropdownFilterContainerProps & Select_FilterAPIv2): React.ReactElement {
    const commonProps = {
        ariaLabel: props.ariaLabel?.value,
        className: props.class,
        tabIndex: props.tabIndex,
        styles: props.style,
        onChange: props.onChange,
        valueAttribute: props.valueAttribute,
        parentChannelName: props.parentChannelName,
        name: props.name
    };

    if (props.filterStore.type === "refselect") {
        return (
            <RefFilterContainer
                {...commonProps}
                filterStore={props.filterStore}
                multiselect={props.multiSelect}
                emptyCaption={props.emptyOptionCaption?.value}
            />
        );
    }

    return (
        <StaticFilterContainer
            {...commonProps}
            filterStore={props.filterStore}
            filterOptions={props.filterOptions}
            multiselect={props.multiSelect}
            defaultValue={props.defaultValue?.value}
            emptyCaption={props.emptyOptionCaption?.value}
        />
    );
}

const container = withPreloader(Container, props => props.defaultValue?.status === "loading");

const Widget = withSelectFilterAPI(container);

export default function DatagridDropdownFilter(props: DatagridDropdownFilterContainerProps): ReactElement {
    return <Widget {...props} />;
=======
import { useFilterContextValue } from "@mendix/widget-plugin-filtering";
import { createElement, Fragment, ReactElement } from "react";
import { DatagridDropdownFilterContainerProps } from "../typings/DatagridDropdownFilterProps";
import { EnumerationFilter } from "./components/EnumerationFilter";
import { ErrorBox } from "./components/ErrorBox";
import { AssociationFilter } from "./components/AssociationFilter";
import { OutOfProviderError } from "./features/errors";

export default function DatagridDropdownFilter(props: DatagridDropdownFilterContainerProps): ReactElement {
    const context = useFilterContextValue();

    if (context.hasError) {
        return <ErrorBox error={new OutOfProviderError()} />;
    }

    if (props.defaultValue?.status === "loading") {
        return <Fragment />;
    }

    const Filter = context.value.associationProperties ? AssociationFilter : EnumerationFilter;

    return <Filter context={context.value} widgetProps={props} />;
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
}

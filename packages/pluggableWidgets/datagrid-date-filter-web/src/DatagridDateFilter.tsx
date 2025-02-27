<<<<<<< HEAD
import { withPreloader } from "@mendix/widget-plugin-platform/hoc/withPreloader";
import { createElement, ReactElement } from "react";
import { DatagridDateFilterContainerProps } from "../typings/DatagridDateFilterProps";
import { Container } from "./components/DateFilterContainer";
import { withDateFilterAPI } from "./hocs/withDateFilterAPI";
import { isLoadingDefaultValues } from "./utils/widget-utils";

const container = withPreloader(Container, isLoadingDefaultValues);
const Widget = withDateFilterAPI(container);

export default function DatagridDateFilter(props: DatagridDateFilterContainerProps): ReactElement | null {
    return <Widget {...props} />;
=======
import { createElement, ReactElement } from "react";
import { DatagridDateFilterContainerProps } from "../typings/DatagridDateFilterProps";
import { withAPIv1, withAPIv2 } from "./hocs/withFilterAPI";
import { withPreloader } from "./hocs/withPreloader";
import { FilterComponent } from "./components/FilterComponent";
import { withRuntimeAdapter } from "./hocs/withRuntimeAdapter";

const Component = withAPIv1(withAPIv2(withPreloader(withRuntimeAdapter(FilterComponent))));

export default function DatagridDateFilter(props: DatagridDateFilterContainerProps): ReactElement | null {
    return <Component {...props} />;
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
}

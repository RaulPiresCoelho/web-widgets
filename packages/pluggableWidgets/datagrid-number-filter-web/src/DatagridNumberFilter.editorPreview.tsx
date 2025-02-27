<<<<<<< HEAD
import { enableStaticRendering } from "mobx-react-lite";
enableStaticRendering(true);

import { createElement, ReactElement, useMemo, useRef } from "react";
import { parseStyle } from "@mendix/widget-plugin-platform/preview/parse-style";
import { InputWithFiltersComponent } from "@mendix/widget-plugin-filtering/controls";
import { DatagridNumberFilterPreviewProps } from "../typings/DatagridNumberFilterProps";
import { InputStore } from "@mendix/widget-plugin-filtering/stores/InputStore";

function Preview(props: DatagridNumberFilterPreviewProps): ReactElement {
    const inputStores = useMemo<[InputStore, InputStore]>(
        () => [new InputStore(props.defaultValue), new InputStore()],
        [props.defaultValue]
    );

    return (
        <InputWithFiltersComponent
            adjustable={props.adjustable}
            className={props.class}
            filterFn={props.defaultFilter}
            filterFnList={[]}
            inputRef={useRef(null)}
            inputStores={inputStores}
            name="NumberFilter"
            onFilterChange={() => {}}
=======
import { createElement, ReactElement } from "react";
import { DatagridNumberFilterPreviewProps } from "../typings/DatagridNumberFilterProps";
import { FilterComponent } from "./components/FilterComponent";
import { parseStyle } from "@mendix/widget-plugin-platform/preview/parse-style";

export function preview(props: DatagridNumberFilterPreviewProps): ReactElement {
    return (
        <FilterComponent
            adjustable={props.adjustable}
            changeDelay={props.delay ?? 500}
            className={props.className}
            parentChannelName={null}
            defaultFilter={props.defaultFilter}
            name="NumberFilter"
            onChange={() => {}}
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            placeholder={props.placeholder}
            screenReaderButtonCaption={props.screenReaderButtonCaption}
            screenReaderInputCaption={props.screenReaderInputCaption}
            styles={parseStyle(props.style)}
<<<<<<< HEAD
            type="text"
        />
    );
}

export function preview(props: DatagridNumberFilterPreviewProps): ReactElement {
    return <Preview {...props} />;
}
=======
            value={undefined}
        />
    );
}
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

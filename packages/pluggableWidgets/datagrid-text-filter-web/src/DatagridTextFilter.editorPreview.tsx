<<<<<<< HEAD
import { enableStaticRendering } from "mobx-react-lite";
enableStaticRendering(true);

import { createElement, ReactElement, useMemo, useRef } from "react";
import { DatagridTextFilterPreviewProps } from "../typings/DatagridTextFilterProps";
import { parseStyle } from "@mendix/widget-plugin-platform/preview/parse-style";
import { InputWithFiltersComponent } from "@mendix/widget-plugin-filtering/controls";
import { InputStore } from "@mendix/widget-plugin-filtering/stores/InputStore";

function Preview(props: DatagridTextFilterPreviewProps): ReactElement {
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
            name="TextFilter"
            onFilterChange={() => {
                //
            }}
=======
import { createElement, ReactElement } from "react";
import { DatagridTextFilterPreviewProps } from "../typings/DatagridTextFilterProps";
import { FilterComponent } from "./components/FilterComponent";
import { parseStyle } from "@mendix/widget-plugin-platform/preview/parse-style";

export function preview(props: DatagridTextFilterPreviewProps): ReactElement {
    return (
        <FilterComponent
            adjustable={props.adjustable}
            className={props.className}
            defaultFilter={props.defaultFilter}
            changeDelay={props.delay ?? 500}
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

export function preview(props: DatagridTextFilterPreviewProps): ReactElement {
    return <Preview {...props} />;
}
=======
            value={props.defaultValue}
            onChange={() => {}}
            parentChannelName={null}
            name="TextFilter"
        />
    );
}
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

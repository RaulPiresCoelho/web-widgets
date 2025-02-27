<<<<<<< HEAD
import { enableStaticRendering } from "mobx-react-lite";
enableStaticRendering(true);

import { createElement, ReactElement, useRef } from "react";
import { DatagridDropdownFilterPreviewProps } from "../typings/DatagridDropdownFilterProps";
import { parseStyle } from "@mendix/widget-plugin-platform/preview/parse-style";
import { Select } from "@mendix/widget-plugin-filtering/controls/select/SelectComponent";

function Preview(props: DatagridDropdownFilterPreviewProps): ReactElement {
    return (
        <Select
            className={props.class}
            styles={parseStyle(props.style)}
            options={[]}
            empty={{ caption: props.emptyOptionCaption, value: "", selected: false }}
            inputValue={props.defaultValue}
            multiSelect={false}
            onSelect={() => {
                //
            }}
            id={(useRef<string>().current ??= `${Math.random()}`)}
        />
    );
}

export function preview(props: DatagridDropdownFilterPreviewProps): ReactElement {
    return <Preview {...props} />;
}
=======
import { createElement, ReactElement } from "react";
import { DatagridDropdownFilterPreviewProps } from "../typings/DatagridDropdownFilterProps";
import { FilterComponent } from "./components/FilterComponent";
import { parseStyle } from "@mendix/widget-plugin-platform/preview/parse-style";

export function preview(props: DatagridDropdownFilterPreviewProps): ReactElement {
    return (
        <FilterComponent
            ariaLabel={props.ariaLabel}
            className={props.className}
            initialSelected={props.defaultValue}
            options={[{ caption: "optionCaption", value: "option" }]}
            styles={parseStyle(props.style)}
            name="Dropdown"
            parentChannelName={null}
        />
    );
}
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

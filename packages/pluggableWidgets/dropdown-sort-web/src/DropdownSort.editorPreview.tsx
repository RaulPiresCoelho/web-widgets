import { createElement, ReactElement } from "react";
import { SortComponent } from "./components/SortComponent";
import { DropdownSortPreviewProps } from "../typings/DropdownSortProps";
import { parseStyle } from "@mendix/widget-plugin-platform/preview/parse-style";

export function preview(props: DropdownSortPreviewProps): ReactElement {
    return (
        <SortComponent
<<<<<<< HEAD
            value={null}
            direction="asc"
            className={props.className}
            placeholder={props.emptyOptionCaption}
=======
            className={props.className}
            emptyOptionCaption={props.emptyOptionCaption}
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            options={[{ caption: "optionCaption", value: "option" }]}
            screenReaderButtonCaption={props.screenReaderButtonCaption}
            screenReaderInputCaption={props.screenReaderInputCaption}
            styles={parseStyle(props.style)}
        />
    );
}

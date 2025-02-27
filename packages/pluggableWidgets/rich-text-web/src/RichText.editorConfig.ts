<<<<<<< HEAD
import { Properties, hidePropertyIn, hidePropertiesIn } from "@mendix/pluggable-widgets-tools";
=======
import { Properties, hidePropertiesIn, hidePropertyIn } from "@mendix/pluggable-widgets-tools";
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
import { StructurePreviewProps } from "@mendix/widget-plugin-platform/preview/structure-preview-api";
import { RichTextPreviewProps } from "typings/RichTextProps";
import RichTextPreviewSVGDark from "./assets/rich-text-preview-dark.svg";
import RichTextPreviewSVGLight from "./assets/rich-text-preview-light.svg";

<<<<<<< HEAD
const toolbarGroupKeys: Array<keyof RichTextPreviewProps> = [
    "history",
    "fontStyle",
    "fontScript",
    "fontColor",
    "list",
    "indent",
    "embed",
    "align",
    "code",
    "header",
    "remove"
];

export function getProperties(values: RichTextPreviewProps, defaultProperties: Properties): Properties {
    if (values.preset !== "custom") {
        hidePropertiesIn(defaultProperties, values, toolbarGroupKeys.concat(["toolbarConfig", "advancedConfig"]));
=======
export const toolbarGroups: Array<keyof RichTextPreviewProps> = [
    "basicstyle",
    "extendedstyle",
    "textalign",
    "clipboard",
    "fontstyle",
    "paragraph",
    "document",
    "history",
    "accordion",
    "code",
    "anchor",
    "direction",
    "link",
    "list",
    "preview",
    "table",
    "visualaid",
    "media",
    "util",
    "emoticon",
    "remove"
];

export const menubarGroups: Array<keyof RichTextPreviewProps> = [
    "fileMenubar",
    "editMenubar",
    "insertMenubar",
    "viewMenubar",
    "formatMenubar",
    "tableMenubar",
    "toolsMenubar",
    "helpMenubar"
];

export function getProperties(values: RichTextPreviewProps, defaultProperties: Properties): Properties {
    if (values.preset !== "custom") {
        hidePropertiesIn(defaultProperties, values, toolbarGroups.concat(["toolbarConfig", "advancedConfig"]));
    }

    if (values.menubarMode !== "custom") {
        hidePropertiesIn(defaultProperties, values, menubarGroups.concat(["menubarConfig", "advancedMenubarConfig"]));
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    }

    if (values.toolbarConfig === "basic") {
        hidePropertyIn(defaultProperties, values, "advancedConfig");
    }
    if (values.toolbarConfig === "advanced") {
<<<<<<< HEAD
        hidePropertiesIn(defaultProperties, values, toolbarGroupKeys);
    }

    if (values.heightUnit === "percentageOfWidth") {
        hidePropertyIn(defaultProperties, values, "height");
    } else {
        hidePropertiesIn(defaultProperties, values, [
            "minHeight",
            "minHeightUnit",
            "maxHeight",
            "maxHeightUnit",
            "OverflowY"
        ]);
    }

    if (values.minHeightUnit === "none") {
        hidePropertyIn(defaultProperties, values, "minHeight");
    }

    if (values.maxHeightUnit === "none") {
        hidePropertiesIn(defaultProperties, values, ["maxHeight", "OverflowY"]);
=======
        hidePropertiesIn(defaultProperties, values, toolbarGroups);
    }

    if (values.menubarConfig === "basic") {
        hidePropertyIn(defaultProperties, values, "advancedMenubarConfig");
    }
    if (values.menubarConfig === "advanced") {
        hidePropertiesIn(defaultProperties, values, menubarGroups);
    }

    if (values.heightUnit === "pixels") {
        hidePropertyIn(defaultProperties, values, "minHeight");
    }

    if (values.widthUnit === "percentage" && values.heightUnit === "percentageOfWidth") {
        hidePropertyIn(defaultProperties, values, "height");
    }

    if (!values.enableStatusBar) {
        hidePropertyIn(defaultProperties, values, "resize");
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    }

    if (!values.onChange) {
        hidePropertyIn(defaultProperties, values, "onChangeType");
    }
<<<<<<< HEAD
    if (values.toolbarLocation === "hide") {
        hidePropertyIn(defaultProperties, values, "preset");
    }
=======
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    return defaultProperties;
}

export function getPreview(props: RichTextPreviewProps, isDarkMode: boolean): StructurePreviewProps {
    const variant = isDarkMode ? RichTextPreviewSVGDark : RichTextPreviewSVGLight;
    const doc = decodeURIComponent(variant.replace("data:image/svg+xml,", ""));

    return {
        type: "Image",
        document: props.stringAttribute ? doc.replace("[No attribute selected]", `[${props.stringAttribute}]`) : doc,
<<<<<<< HEAD
        height: 150
=======
        height: 148
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    };
}

/**
 * This file was generated from RichText.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
<<<<<<< HEAD
import { ActionValue, EditableValue } from "mendix";

export type PresetEnum = "basic" | "standard" | "full" | "custom";

export type ToolbarLocationEnum = "auto" | "top" | "bottom" | "hide";

export type ReadOnlyStyleEnum = "text" | "bordered" | "readPanel";

export type WidthUnitEnum = "pixels" | "percentage";

export type HeightUnitEnum = "percentageOfWidth" | "pixels" | "percentageOfParent" | "percentageOfView";

export type MinHeightUnitEnum = "none" | "pixels" | "percentageOfParent" | "percentageOfView";

export type MaxHeightUnitEnum = "none" | "pixels" | "percentageOfParent" | "percentageOfView";

export type OverflowYEnum = "auto" | "scroll" | "hidden";
=======
import { ActionValue, DynamicValue, EditableValue } from "mendix";

export type MenubarModeEnum = "hide" | "basic" | "full" | "custom";

export type PresetEnum = "basic" | "standard" | "full" | "custom";

export type ToolbarModeEnum = "sliding" | "floating" | "scrolling" | "wrap";

export type ToolbarLocationEnum = "auto" | "top" | "bottom" | "inline";

export type ContextmenutypeEnum = "native" | "richtext";

export type ReadOnlyStyleEnum = "text" | "bordered" | "readPanel";

export type WidthUnitEnum = "percentage" | "pixels";

export type HeightUnitEnum = "percentageOfWidth" | "pixels" | "percentageOfParent";

export type ResizeEnum = "false" | "true" | "both";
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

export type OnChangeTypeEnum = "onLeave" | "onDataChange";

export type ToolbarConfigEnum = "basic" | "advanced";

<<<<<<< HEAD
export type CtItemTypeEnum = "separator" | "undo" | "redo" | "bold" | "italic" | "underline" | "strike" | "superScript" | "subScript" | "orderedList" | "bulletList" | "lowerAlphaList" | "checkList" | "minIndent" | "plusIndent" | "direction" | "link" | "image" | "video" | "formula" | "blockquote" | "codeBlock" | "viewCode" | "align" | "centerAlign" | "rightAlign" | "font" | "color" | "background" | "header" | "clean";
=======
export type CtItemTypeEnum = "separator" | "aligncenter" | "alignjustify" | "alignleft" | "alignnone" | "alignright" | "blockquote" | "backcolor" | "blocks" | "bold" | "copy" | "cut" | "fontfamily" | "fontsize" | "forecolor" | "hr" | "indent" | "italic" | "lineheight" | "newdocument" | "outdent" | "paste" | "pastetext" | "print" | "redo" | "remove" | "removeformat" | "selectall" | "strikethrough" | "subscript" | "superscript" | "underline" | "undo" | "visualaid" | "accordion" | "code" | "anchor" | "charmap" | "codesample" | "ltr" | "rtl" | "emoticons" | "fullscreen" | "help" | "image" | "insertdatetime" | "link" | "openlink" | "unlink" | "bullist" | "numlist" | "media" | "pagebreak" | "preview" | "searchreplace" | "table" | "tabledelete" | "tableinsertdialog" | "visualblocks" | "visualchars" | "wordcount";
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

export interface AdvancedConfigType {
    ctItemType: CtItemTypeEnum;
}

<<<<<<< HEAD
=======
export type MenubarConfigEnum = "basic" | "advanced";

export type MenubarItemTypeEnum = "file" | "edit" | "insert" | "view" | "format" | "table" | "tools" | "help";

export interface AdvancedMenubarConfigType {
    menubarItemType: MenubarItemTypeEnum;
}

>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
export interface AdvancedConfigPreviewType {
    ctItemType: CtItemTypeEnum;
}

<<<<<<< HEAD
=======
export interface AdvancedMenubarConfigPreviewType {
    menubarItemType: MenubarItemTypeEnum;
}

>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
export interface RichTextContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    stringAttribute: EditableValue<string>;
<<<<<<< HEAD
    enableStatusBar: boolean;
    preset: PresetEnum;
    toolbarLocation: ToolbarLocationEnum;
=======
    menubarMode: MenubarModeEnum;
    enableStatusBar: boolean;
    preset: PresetEnum;
    toolbarMode: ToolbarModeEnum;
    toolbarLocation: ToolbarLocationEnum;
    quickbars: boolean;
    contextmenutype: ContextmenutypeEnum;
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    readOnlyStyle: ReadOnlyStyleEnum;
    widthUnit: WidthUnitEnum;
    width: number;
    heightUnit: HeightUnitEnum;
    height: number;
<<<<<<< HEAD
    minHeightUnit: MinHeightUnitEnum;
    minHeight: number;
    maxHeightUnit: MaxHeightUnitEnum;
    maxHeight: number;
    OverflowY: OverflowYEnum;
    onChange?: ActionValue;
    onFocus?: ActionValue;
    onBlur?: ActionValue;
    onLoad?: ActionValue;
    onChangeType: OnChangeTypeEnum;
    spellCheck: boolean;
    toolbarConfig: ToolbarConfigEnum;
    history: boolean;
    fontStyle: boolean;
    fontScript: boolean;
    list: boolean;
    indent: boolean;
    embed: boolean;
    align: boolean;
    code: boolean;
    fontColor: boolean;
    header: boolean;
    remove: boolean;
    advancedConfig: AdvancedConfigType[];
=======
    minHeight: number;
    resize: ResizeEnum;
    onChange?: ActionValue;
    onFocus?: ActionValue;
    onBlur?: ActionValue;
    onKeyPress?: ActionValue;
    onChangeType: OnChangeTypeEnum;
    extended_valid_elements?: DynamicValue<string>;
    spellCheck: boolean;
    highlight_on_focus: boolean;
    content_css?: DynamicValue<string>;
    sandboxIframes: boolean;
    useRelativeUrl: boolean;
    toolbarConfig: ToolbarConfigEnum;
    basicstyle: boolean;
    extendedstyle: boolean;
    textalign: boolean;
    clipboard: boolean;
    fontstyle: boolean;
    paragraph: boolean;
    document: boolean;
    history: boolean;
    accordion: boolean;
    code: boolean;
    anchor: boolean;
    direction: boolean;
    link: boolean;
    list: boolean;
    preview: boolean;
    table: boolean;
    visualaid: boolean;
    media: boolean;
    util: boolean;
    emoticon: boolean;
    remove: boolean;
    advancedConfig: AdvancedConfigType[];
    menubarConfig: MenubarConfigEnum;
    fileMenubar: boolean;
    editMenubar: boolean;
    insertMenubar: boolean;
    viewMenubar: boolean;
    formatMenubar: boolean;
    tableMenubar: boolean;
    toolsMenubar: boolean;
    helpMenubar: boolean;
    advancedMenubarConfig: AdvancedMenubarConfigType[];
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
}

export interface RichTextPreviewProps {
    readOnly: boolean;
<<<<<<< HEAD
    renderMode?: "design" | "xray" | "structure";
    stringAttribute: string;
    enableStatusBar: boolean;
    preset: PresetEnum;
    toolbarLocation: ToolbarLocationEnum;
=======
    stringAttribute: string;
    menubarMode: MenubarModeEnum;
    enableStatusBar: boolean;
    preset: PresetEnum;
    toolbarMode: ToolbarModeEnum;
    toolbarLocation: ToolbarLocationEnum;
    quickbars: boolean;
    contextmenutype: ContextmenutypeEnum;
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    readOnlyStyle: ReadOnlyStyleEnum;
    widthUnit: WidthUnitEnum;
    width: number | null;
    heightUnit: HeightUnitEnum;
    height: number | null;
<<<<<<< HEAD
    minHeightUnit: MinHeightUnitEnum;
    minHeight: number | null;
    maxHeightUnit: MaxHeightUnitEnum;
    maxHeight: number | null;
    OverflowY: OverflowYEnum;
    onChange: {} | null;
    onFocus: {} | null;
    onBlur: {} | null;
    onLoad: {} | null;
    onChangeType: OnChangeTypeEnum;
    spellCheck: boolean;
    toolbarConfig: ToolbarConfigEnum;
    history: boolean;
    fontStyle: boolean;
    fontScript: boolean;
    list: boolean;
    indent: boolean;
    embed: boolean;
    align: boolean;
    code: boolean;
    fontColor: boolean;
    header: boolean;
    remove: boolean;
    advancedConfig: AdvancedConfigPreviewType[];
=======
    minHeight: number | null;
    resize: ResizeEnum;
    onChange: {} | null;
    onFocus: {} | null;
    onBlur: {} | null;
    onKeyPress: {} | null;
    onChangeType: OnChangeTypeEnum;
    extended_valid_elements: string;
    spellCheck: boolean;
    highlight_on_focus: boolean;
    content_css: string;
    sandboxIframes: boolean;
    useRelativeUrl: boolean;
    toolbarConfig: ToolbarConfigEnum;
    basicstyle: boolean;
    extendedstyle: boolean;
    textalign: boolean;
    clipboard: boolean;
    fontstyle: boolean;
    paragraph: boolean;
    document: boolean;
    history: boolean;
    accordion: boolean;
    code: boolean;
    anchor: boolean;
    direction: boolean;
    link: boolean;
    list: boolean;
    preview: boolean;
    table: boolean;
    visualaid: boolean;
    media: boolean;
    util: boolean;
    emoticon: boolean;
    remove: boolean;
    advancedConfig: AdvancedConfigPreviewType[];
    menubarConfig: MenubarConfigEnum;
    fileMenubar: boolean;
    editMenubar: boolean;
    insertMenubar: boolean;
    viewMenubar: boolean;
    formatMenubar: boolean;
    tableMenubar: boolean;
    toolsMenubar: boolean;
    helpMenubar: boolean;
    advancedMenubarConfig: AdvancedMenubarConfigPreviewType[];
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
}

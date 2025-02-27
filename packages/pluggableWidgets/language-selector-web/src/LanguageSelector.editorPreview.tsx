import { createElement, ReactElement } from "react";
import { LanguageSelectorPreviewProps } from "typings/LanguageSelectorProps";
<<<<<<< HEAD
import { LanguageSwitcherPreview } from "./components/LanguageSwitcherPreview";

export const preview = (props: LanguageSelectorPreviewProps): ReactElement => {
    return (
        <LanguageSwitcherPreview
            preview
            currentLanguage={{ _guid: "1", value: "Selected language" }}
            style={props.styleObject}
=======
import { LanguageSwitcher } from "./components/LanguageSwitcher";

export const preview = (props: LanguageSelectorPreviewProps): ReactElement => {
    return (
        <LanguageSwitcher
            preview
            currentLanguage={{ _guid: "1", value: "Selected language" }}
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            languageList={[{ _guid: "1", value: "Selected language" }]}
            position={props.position}
            onSelect={undefined}
            trigger={props.trigger}
            className={""}
<<<<<<< HEAD
            tabIndex={0}
            screenReaderLabelCaption={"LanguageSwitcherOptions"}
        ></LanguageSwitcherPreview>
=======
        ></LanguageSwitcher>
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    );
};

export function getPreviewCss(): string {
    return require("./ui/LanguageSelector.scss");
}

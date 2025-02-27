import { ValidationAlert } from "@mendix/widget-plugin-component-kit/Alert";
<<<<<<< HEAD
import classNames from "classnames";
import { createElement, Fragment, useEffect, useState } from "react";
import { RichTextContainerProps } from "../typings/RichTextProps";
import EditorWrapper from "./components/EditorWrapper";
import "./ui/RichText.scss";
import { constructWrapperStyle } from "./utils/helpers";

export default function RichText(props: RichTextContainerProps): JSX.Element {
    const { stringAttribute, readOnlyStyle } = props;

    const wrapperStyle = constructWrapperStyle(props);
=======
import { getDimensions } from "@mendix/widget-plugin-platform/utils/get-dimensions";
import classNames from "classnames";
import { createElement, Fragment, useState, useEffect } from "react";
import { RichTextContainerProps } from "../typings/RichTextProps";
import BundledEditor from "./components/Editor";
import "./ui/RichText.scss";
import { constructWrapperStyle } from "./utils/helpers";
import { createMenubar } from "./utils/menubar";
import { createPreset } from "./utils/presets";

export default function RichText(props: RichTextContainerProps): JSX.Element {
    const {
        stringAttribute,
        id,
        width: w,
        height: h,
        widthUnit,
        heightUnit,
        preset,
        menubarMode,
        readOnlyStyle,
        enableStatusBar,
        resize
    } = props;

    const { width, height } = getDimensions({
        width: w,
        widthUnit,
        height: h,
        heightUnit
    });
    const wrapperAttributes = stringAttribute?.readOnly && readOnlyStyle !== "readPanel" ? { readOnly: true } : {};

    const presets = createPreset(preset, props);
    const menubar = createMenubar(menubarMode, props);
    const wrapperStyle = constructWrapperStyle(props, { width, height });
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    const [isIncubator, setIsIncubator] = useState(true);

    useEffect(() => {
        // this is a fix for dojo runtime rendering
        // in dojo runtime, DOM is rendered inside <div class="mx-incubator mx-offscreen"> at the inital stage
        // and moved to content once it fully loads, which cause rich text editor looses reference to it's iframe
        // this fix waits for it to be fully out of incubator div, then only fully renders rich text afterwards.
        const observedIncubator = document.querySelector(`.mx-incubator.mx-offscreen`);
        const observer = new MutationObserver((_mutationList, _observer) => {
<<<<<<< HEAD
            if (!observedIncubator?.childElementCount || observedIncubator?.childElementCount <= 0) {
=======
            if (!observedIncubator?.childElementCount) {
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
                setIsIncubator(false);
            }
        });

        if (observedIncubator && observedIncubator.childElementCount) {
            observer.observe(observedIncubator, {
                childList: true
            });
        } else {
            setIsIncubator(false);
        }

        return () => {
            observer.disconnect();
        };
    }, []);
<<<<<<< HEAD

    return (
        <Fragment>
            {stringAttribute.status === "loading" || isIncubator ? (
                <div className="mx-progress"></div>
            ) : (
                <EditorWrapper
                    {...props}
                    style={wrapperStyle}
                    className={classNames(
                        "widget-rich-text",
                        stringAttribute.readOnly && readOnlyStyle === "readPanel"
                            ? "form-control-static"
                            : "form-control",
                        stringAttribute.readOnly ? `widget-rich-text-readonly-${readOnlyStyle}` : ""
                    )}
                    enableStatusBar={props.enableStatusBar && !stringAttribute.readOnly}
                />
            )}
=======
    return (
        <Fragment>
            <div
                id={id}
                className={classNames(
                    "widget-rich-text",
                    `${stringAttribute?.readOnly ? `editor-${readOnlyStyle}` : ""}`,
                    {
                        "form-control": props.toolbarLocation === "inline",
                        "widget-rich-text-min-height": heightUnit !== "pixels" && !stringAttribute?.readOnly,
                        "widget-rich-text-min-height-readonly": heightUnit !== "pixels" && stringAttribute?.readOnly
                    }
                )}
                style={wrapperStyle}
                {...wrapperAttributes}
            >
                {stringAttribute.status === "loading" || stringAttribute.status !== "available" || isIncubator ? (
                    <div className="mx-progress"></div>
                ) : (
                    <BundledEditor
                        {...props}
                        menubar={menubar}
                        toolbar={presets.toolbar}
                        editorHeight={height}
                        editorWidth={width}
                        key={`${String(stringAttribute.readOnly)}_${id}_${props.content_css?.value}`}
                        resize={enableStatusBar ? resize : "false"}
                    />
                )}
            </div>
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            <ValidationAlert>{stringAttribute.validation}</ValidationAlert>
        </Fragment>
    );
}

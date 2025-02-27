<<<<<<< HEAD
import Quill, { EmitterSource, QuillOptions, Range } from "quill";
import Delta from "quill-delta";
import {
    createElement,
    CSSProperties,
    forwardRef,
    Fragment,
    MutableRefObject,
    useEffect,
    useLayoutEffect,
    // useState,
    useRef
} from "react";
import "../utils/customPluginRegisters";
import MxQuill from "../utils/MxQuill";
import { enterKeyKeyboardHandler, getIndentHandler } from "./CustomToolbars/toolbarHandlers";
import { useEmbedModal } from "./CustomToolbars/useEmbedModal";
import Dialog from "./ModalDialog/Dialog";

export interface EditorProps {
    defaultValue?: string;
    onTextChange?: (...args: [delta: Delta, oldContent: Delta, source: EmitterSource]) => void;
    onSelectionChange?: (...args: [range: Range, oldRange: Range, source: EmitterSource]) => void;
    theme: string;
    style?: CSSProperties;
    className?: string;
    toolbarId?: string | Array<string | string[] | { [k: string]: any }>;
    readOnly?: boolean;
}

// Editor is an uncontrolled React component
const Editor = forwardRef((props: EditorProps, ref: MutableRefObject<Quill | null>) => {
    const { theme, defaultValue, style, className, toolbarId, onTextChange, onSelectionChange, readOnly } = props;
    const containerRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const onTextChangeRef = useRef(onTextChange);
    const onSelectionChangeRef = useRef(onSelectionChange);

    const {
        showDialog,
        setShowDialog,
        dialogConfig,
        customLinkHandler,
        customVideoHandler,
        customViewCodeHandler,
        customImageUploadHandler
    } = useEmbedModal(ref);
    const customIndentHandler = getIndentHandler(ref);

    // quill instance is not changing, thus, the function reference has to stays.
    useLayoutEffect(() => {
        onTextChangeRef.current = onTextChange;
        onSelectionChangeRef.current = onSelectionChange;
    }, [onTextChange, onSelectionChange]);

    // update quills content on value change.
    useEffect(() => {
        // if there is an update comes from external element
        if (!ref.current?.hasFocus()) {
            const newContent = ref.current?.clipboard.convert({
                html: defaultValue
            });
            if (newContent && newContent !== ref.current?.getContents()) {
                ref.current?.setContents(newContent);
            }
        }
    }, [ref, defaultValue]);

    // use effect for constructing Quill instance
    useEffect(
        () => {
            const container = containerRef.current;
            if (container) {
                const editorDiv = container.ownerDocument.createElement<"div">("div");
                editorDiv.innerHTML = defaultValue ?? "";
                const editorContainer = container.appendChild(editorDiv);

                // Quill instance configurations.
                const options: QuillOptions = {
                    theme,
                    modules: {
                        keyboard: {
                            bindings: {
                                enter: {
                                    key: "Enter",
                                    handler: enterKeyKeyboardHandler
                                }
                            }
                        },
                        toolbar: toolbarId
                            ? {
                                  container: Array.isArray(toolbarId) ? toolbarId : `#${toolbarId}`,
                                  handlers: {
                                      link: customLinkHandler,
                                      video: customVideoHandler,
                                      indent: customIndentHandler,
                                      "view-code": customViewCodeHandler,
                                      image: customImageUploadHandler
                                  }
                              }
                            : false
                    },
                    readOnly
                };
                const quill = new MxQuill(editorContainer, options);
                ref.current = quill;
                quill.on(Quill.events.TEXT_CHANGE, (...arg) => {
                    onTextChangeRef.current?.(...arg);
                });
                quill.on(Quill.events.SELECTION_CHANGE, (...arg) => {
                    onSelectionChangeRef.current?.(...arg);
                });
                quill.on("EDIT-TOOLTIP", (...arg: any[]) => {
                    customLinkHandler(arg[0]);
                });
            }

            return () => {
                ref.current = null;
                if (container) {
                    container.innerHTML = "";
                }
            };
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [ref, toolbarId]
    );

    return (
        <Fragment>
            <div ref={containerRef} style={style} className={className}></div>
            <div ref={modalRef}></div>
            <Dialog
                isOpen={showDialog}
                onOpenChange={open => setShowDialog(open)}
                parentNode={modalRef.current?.ownerDocument.body}
                {...dialogConfig}
            ></Dialog>
        </Fragment>
    );
});

Editor.displayName = "Editor";

export default Editor;
=======
import { ReactElement, createElement, useCallback, useEffect, useRef, useState } from "react";

import { Editor } from "@tinymce/tinymce-react";
import type { EditorEvent, Editor as TinyMCEEditor } from "tinymce";

import "react-dom";
import { RichTextContainerProps } from "typings/RichTextProps";
import { API_KEY, DEFAULT_CONFIG } from "../utils/constants";
import "../utils/plugins";

type EditorState = "loading" | "ready";

interface BundledEditorProps extends RichTextContainerProps {
    toolbar: string | false;
    menubar: string | boolean;
    editorHeight?: string | number;
    editorWidth?: string | number;
}

export default function BundledEditor(props: BundledEditorProps): ReactElement {
    const {
        id,
        toolbar,
        stringAttribute,
        menubar,
        onBlur,
        onFocus,
        onChange,
        onChangeType,
        onKeyPress,
        toolbarMode,
        enableStatusBar,
        toolbarLocation,
        spellCheck,
        highlight_on_focus,
        resize,
        extended_valid_elements,
        quickbars,
        tabIndex,
        editorHeight,
        editorWidth,
        sandboxIframes,
        useRelativeUrl
    } = props;
    const editorRef = useRef<TinyMCEEditor>();
    const editorValueRef = useRef<string>();
    const [canRenderEditor, setCanRenderEditor] = useState<boolean>(false);
    const [editorState, setEditorState] = useState<EditorState>("loading");
    const [editorValue, setEditorValue] = useState(stringAttribute.value ?? "");

    const _toolbarLocation = toolbarLocation === "inline" ? "auto" : toolbarLocation;

    useEffect(() => {
        setTimeout(() => {
            setCanRenderEditor(true);
        }, 50);
    }, []);

    useEffect(() => {
        if (editorState === "ready") {
            setEditorValue(stringAttribute.value ?? "");
        }
    }, [stringAttribute.value, stringAttribute.status, editorState]);

    const onEditorChange = useCallback(
        (value: string, _editor: TinyMCEEditor) => {
            setEditorValue(value);
            if (onChange?.canExecute && onChangeType === "onDataChange") {
                onChange.execute();
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [editorState]
    );

    const onEditorBlur = useCallback(
        (_event: EditorEvent<null>, editor: TinyMCEEditor) => {
            if (editorRef.current && editorState === "ready") {
                stringAttribute?.setValue(editorValue);

                if (onBlur?.canExecute) {
                    onBlur.execute();
                }
                if (
                    onChange?.canExecute &&
                    onChangeType === "onLeave" &&
                    editorValueRef.current !== editor.getContent()
                ) {
                    onChange.execute();
                }
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [stringAttribute, editorState, editorValue]
    );

    const onEditorFocus = useCallback(
        (_event: EditorEvent<null>, editor: TinyMCEEditor) => {
            if (onFocus?.canExecute) {
                onFocus.execute();
            }
            editorValueRef.current = editor.getContent();
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [editorState]
    );

    const onEditorKeyPress = useCallback(
        (_event: EditorEvent<null>, _editor: TinyMCEEditor) => {
            if (onKeyPress?.canExecute) {
                onKeyPress.execute();
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [editorState]
    );

    if (!canRenderEditor) {
        // this is to make sure that tinymce.init is ready to be triggered on the page
        // react page needs "mx-progress" a couple of milisecond to be rendered
        // use the next tick to trigger tinymce.init for consistent result
        // especially if we have multiple editor in single page
        return <div className="mx-progress"></div>;
    }

    return (
        <Editor
            id={`tinymceeditor_${id}`}
            onInit={(_evt, editor: TinyMCEEditor) => {
                editorRef.current = editor;
                setEditorState("ready");
            }}
            apiKey={API_KEY}
            value={editorValue}
            initialValue={stringAttribute.readOnly ? "" : stringAttribute.value}
            onEditorChange={onEditorChange}
            init={{
                ...DEFAULT_CONFIG,
                toolbar,
                menubar,
                content_style: [".widget-rich-text { font-family:Helvetica,Arial,sans-serif; font-size:14px }"].join(
                    "\n"
                ),
                toolbar_mode: toolbarMode,
                statusbar: enableStatusBar && !stringAttribute.readOnly,
                toolbar_location: _toolbarLocation,
                inline: toolbarLocation === "inline",
                browser_spellcheck: spellCheck,
                highlight_on_focus,
                resize: resize === "both" ? "both" : resize === "true",
                extended_valid_elements: extended_valid_elements?.value ?? "",
                quickbars_insert_toolbar: quickbars && !stringAttribute.readOnly,
                quickbars_selection_toolbar: quickbars && !stringAttribute.readOnly,
                height: editorHeight,
                width: editorWidth,
                contextmenu: props.contextmenutype === "richtext" ? "cut copy paste pastetext | link selectall" : false,
                content_css: props.content_css?.value || undefined,
                convert_unsafe_embeds: true,
                sandbox_iframes: sandboxIframes,
                convert_urls: useRelativeUrl,
                // Set the language dynamically based on the user's document language.
                // If the language is German (de-DE), load the 'de' localization; otherwise, default to English ('en').
                language: document.documentElement.lang === "de-DE" ? "de" : "en"
            }}
            tabIndex={tabIndex || 0}
            disabled={stringAttribute.readOnly}
            onBlur={onEditorBlur}
            onFocus={onEditorFocus}
            onKeyPress={onEditorKeyPress}
        />
    );
}
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

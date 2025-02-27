<<<<<<< HEAD
import { FloatingFocusManager } from "@floating-ui/react";
import classNames from "classnames";
import { createElement, CSSProperties, ReactElement, useState } from "react";
import { PositionEnum, TriggerEnum } from "../../typings/LanguageSelectorProps";
import { useFloatingUI } from "../hooks/useFloatingUI";
import { LanguageItem } from "../LanguageSelector";

export interface LanguageSwitcherProps {
    className: string;
    currentLanguage: LanguageItem | undefined;
    languageList: LanguageItem[];
    onSelect?: (lang: LanguageItem) => void;
    position: PositionEnum;
    screenReaderLabelCaption?: string;
    style?: CSSProperties;
    tabIndex: number;
    trigger: TriggerEnum;
}

export const LanguageSwitcher = ({
    className,
    currentLanguage,
    languageList,
    onSelect,
    position,
    screenReaderLabelCaption,
    style,
    tabIndex,
    trigger
}: LanguageSwitcherProps): ReactElement => {
    const [isOpen, setOpen] = useState(false);

    const {
        activeIndex,
        context,
        floatingStyles,
        getFloatingProps,
        getItemProps,
        getReferenceProps,
        handleSelect,
        isTypingRef,
        listRef,
        refs
    } = useFloatingUI({
        currentLanguage,
        isOpen,
        languageList,
        onSelect,
        position,
        setOpen,
        triggerOn: trigger
    });

    return (
        <div className={classNames(className, "widget-language-selector", "popupmenu")} style={style}>
            <div
                ref={refs?.setReference}
                className={"popupmenu-trigger popupmenu-trigger-alignment"}
                aria-label={screenReaderLabelCaption || "Language selector"}
                aria-autocomplete="none"
                aria-activedescendant={isOpen && activeIndex !== null ? "" : undefined}
                tabIndex={tabIndex}
                {...getReferenceProps?.()}
            >
                <span className="current-language-text">{currentLanguage?.value || ""}</span>
                <span className="language-arrow" aria-hidden="true">
                    <div className={`arrow-image ${isOpen ? "arrow-up" : "arrow-down"}`} />
                </span>
            </div>
            {isOpen && (
                <FloatingFocusManager context={context!} modal={false}>
                    <div
                        aria-activedescendant={isOpen && activeIndex !== null ? "" : undefined}
                        className="popupmenu-menu"
                        ref={refs?.setFloating}
                        style={{
                            ...floatingStyles,
                            outline: 0,
                            overflowY: "auto"
                        }}
                        {...getFloatingProps?.()}
                    >
                        {languageList.map((item, index) => (
                            <div
                                key={item._guid}
                                ref={node => {
                                    listRef.current[index] = node;
                                }}
                                role="option"
                                tabIndex={index === activeIndex ? 0 : -1}
                                className={classNames("popupmenu-basic-item", {
                                    active: currentLanguage === item,
                                    highlighted: activeIndex === index
                                })}
                                {...getItemProps?.({
                                    onKeyDown(event) {
                                        if (event.key === "Enter") {
                                            event.preventDefault();
                                            handleSelect(index);
                                        }

                                        if (event.key === " " && !isTypingRef.current) {
                                            event.preventDefault();
                                            handleSelect(index);
                                        }
                                    },
                                    onClick() {
                                        handleSelect(index);
                                    }
                                })}
                            >
                                {item.value}
                            </div>
                        ))}
                    </div>
                </FloatingFocusManager>
            )}
        </div>
    );
};
=======
import classNames from "classnames";
import { createElement, ReactElement, useEffect, useRef, useState, useCallback, SyntheticEvent } from "react";
import {
    isBehindElement,
    isBehindRandomElement,
    isElementPartiallyOffScreen,
    isElementVisibleByUser,
    moveAbsoluteElementOnScreen,
    unBlockAbsoluteElementBottom,
    unBlockAbsoluteElementLeft,
    unBlockAbsoluteElementRight,
    unBlockAbsoluteElementTop,
    handleOnClickOutsideElement
} from "../utils/document";
import { PositionEnum, TriggerEnum } from "../../typings/LanguageSelectorProps";
import { LanguageItem } from "../LanguageSelector";

export interface LanguageSwitcherProps {
    preview: boolean;
    currentLanguage: LanguageItem | undefined;
    languageList: LanguageItem[];
    position: PositionEnum;
    onSelect?: (lang: LanguageItem) => void;
    trigger: TriggerEnum;
    className: string;
}
export const LanguageSwitcher = (props: LanguageSwitcherProps): ReactElement => {
    const { languageList, trigger } = props;
    const [visibility, setVisibility] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    if (!props.preview) {
        handleOnClickOutsideElement(ref, () => setVisibility(false));
    }

    const onClickHandle = useCallback(
        (e: SyntheticEvent): void => {
            e.preventDefault();
            e.stopPropagation();
            setVisibility(prev => !prev);
        },
        [setVisibility]
    );

    const onHover =
        trigger === "hover"
            ? {
                  onMouseEnter: onClickHandle,
                  onMouseLeave: onClickHandle
              }
            : {};

    const onClick = trigger === "click" ? { onClick: onClickHandle } : {};

    useEffect(() => {
        const element = ref.current?.querySelector(".popupmenu-menu") as HTMLDivElement | null;
        if (element) {
            element.style.display = visibility ? "flex" : "none";
            if (visibility) {
                correctPosition(element, props.position);
            }
        }
    }, [props.position, visibility]);

    return (
        <div ref={ref} className={classNames(props.className, "widget-language-selector", "popupmenu")} {...onHover}>
            <div className={"popupmenu-trigger popupmenu-trigger-alignment"} {...onClick}>
                <span className="current-language-text">{props.currentLanguage?.value || ""}</span>
                <span className="language-arrow" aria-hidden="true">
                    <div className={`arrow-image ${visibility ? "arrow-up" : "arrow-down"}`} />
                </span>
            </div>
            <div className={classNames("popupmenu-menu", `popupmenu-position-${props.position}`)}>
                {languageList.map(item => (
                    <div
                        key={item._guid}
                        className={`popupmenu-basic-item ${
                            item._guid === props.currentLanguage?._guid ? "active" : ""
                        }`}
                        onClick={() => {
                            if (props.onSelect) {
                                return props.onSelect(item);
                            }
                        }}
                    >
                        {item.value}
                    </div>
                ))}
            </div>
        </div>
    );
};

function correctPosition(element: HTMLElement, position: PositionEnum): void {
    const dynamicDocument: Document = element.ownerDocument;
    const dynamicWindow = dynamicDocument.defaultView as Window;
    let boundingRect: DOMRect = element.getBoundingClientRect();
    const isOffScreen = isElementPartiallyOffScreen(dynamicWindow, boundingRect);
    if (isOffScreen) {
        moveAbsoluteElementOnScreen(dynamicWindow, element, boundingRect);
    }

    boundingRect = element.getBoundingClientRect();
    const blockingElement = isBehindRandomElement(dynamicDocument, element, boundingRect, 3, "popupmenu");
    if (blockingElement && isElementVisibleByUser(dynamicDocument, dynamicWindow, blockingElement)) {
        unBlockAbsoluteElement(element, boundingRect, blockingElement.getBoundingClientRect(), position);
    } else if (blockingElement) {
        let node = blockingElement;
        do {
            if (isBehindElement(element, node, 3) && isElementVisibleByUser(dynamicDocument, dynamicWindow, node)) {
                return unBlockAbsoluteElement(element, boundingRect, node.getBoundingClientRect(), position);
            } else if (node.parentElement) {
                node = node.parentElement as HTMLElement;
            } else {
                break;
            }
        } while (node.parentElement);
    }
}

function unBlockAbsoluteElement(
    element: HTMLElement,
    boundingRect: DOMRect,
    blockingElementRect: DOMRect,
    position: PositionEnum
): void {
    switch (position) {
        case "left":
            unBlockAbsoluteElementLeft(element, boundingRect, blockingElementRect);
            unBlockAbsoluteElementBottom(element, boundingRect, blockingElementRect);
            break;
        case "right":
            unBlockAbsoluteElementRight(element, boundingRect, blockingElementRect);
            unBlockAbsoluteElementBottom(element, boundingRect, blockingElementRect);
            break;
        case "top":
            unBlockAbsoluteElementTop(element, boundingRect, blockingElementRect);
            break;
        case "bottom":
            unBlockAbsoluteElementBottom(element, boundingRect, blockingElementRect);
            break;
    }
}
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

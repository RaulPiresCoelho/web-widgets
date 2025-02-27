import { executeAction } from "@mendix/widget-plugin-platform/framework/execute-action";
import classNames from "classnames";
import { ActionValue } from "mendix";
<<<<<<< HEAD
import { createElement, ReactElement, useCallback, useEffect, useState } from "react";
import { PopupMenuContainerProps } from "../../typings/PopupMenuProps";
import { usePopup } from "../hooks/usePopup";
import { Menu } from "./Menu";
import { PopupContext } from "./PopupContext";
import { PopupTrigger } from "./PopupTrigger";
=======
import { createElement, ReactElement, SyntheticEvent, useCallback, useEffect, useRef, useState } from "react";
import { PopupMenuContainerProps } from "../../typings/PopupMenuProps";
import { Menu } from "./Menu";
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

export interface PopupMenuProps extends PopupMenuContainerProps {
    preview?: boolean;
}
<<<<<<< HEAD

export function PopupMenu(props: PopupMenuProps): ReactElement {
    const preview = !!props.preview;
    const [visibility, setVisibility] = useState(preview && props.menuToggle);
    const open = visibility;
    const popup = usePopup({
        open,
        onOpenChange: setVisibility,
        placement: props.position,
        trigger: props.trigger,
        clippingStrategy: props.clippingStrategy
    });
=======
export function PopupMenu(props: PopupMenuProps): ReactElement {
    const { preview: isPreview, class: className, menuToggle, menuTrigger, trigger, hoverCloseOn } = props;
    const preview = !!isPreview;
    const [visibility, setVisibility] = useState(preview && menuToggle);
    const triggerRef = useRef<HTMLDivElement>(null);

    const handleOnClickTrigger = useCallback(
        (e: SyntheticEvent<HTMLElement>): void => {
            e.preventDefault();
            e.stopPropagation();
            setVisibility(prev => !prev);
        },
        [setVisibility]
    );

    const handleOnHoverEnter = useCallback(
        (e: SyntheticEvent<HTMLElement>): void => {
            e.preventDefault();
            e.stopPropagation();
            setVisibility(true);
        },
        [setVisibility]
    );
    const handleOnHoverLeave = useCallback(
        (e: SyntheticEvent<HTMLElement>): void => {
            e.preventDefault();
            e.stopPropagation();
            setVisibility(false);
        },
        [setVisibility]
    );
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

    const handleOnClickItem = useCallback((itemAction?: ActionValue): void => {
        setVisibility(false);
        executeAction(itemAction);
    }, []);

<<<<<<< HEAD
    useEffect(() => {
        setVisibility(props.menuToggle);
    }, [props.menuToggle]);

    return (
        <PopupContext.Provider value={popup}>
            <div className={classNames("popupmenu", props.class)}>
                <PopupTrigger>{props.menuTrigger}</PopupTrigger>
                <Menu {...props} onItemClick={handleOnClickItem} />
            </div>
        </PopupContext.Provider>
=======
    const handleCloseRequest = useCallback(() => {
        setVisibility(false);
    }, []);

    let eventHandlers = {};

    if (!preview) {
        if (trigger === "onhover") {
            if (hoverCloseOn === "onHoverLeave") {
                eventHandlers = {
                    onPointerEnter: handleOnHoverEnter,
                    onPointerLeave: handleOnHoverLeave
                };
            } else {
                eventHandlers = {
                    onPointerEnter: handleOnHoverEnter
                };
            }
        } else if (trigger === "onclick" && !preview) {
            eventHandlers = {
                onClick: handleOnClickTrigger
            };
        }
    }

    useEffect(() => {
        setVisibility(menuToggle);
    }, [menuToggle]);
    const open = visibility && triggerRef.current;
    return (
        <div ref={triggerRef} className={classNames("popupmenu", className)} {...eventHandlers}>
            <div className={"popupmenu-trigger"}>{menuTrigger}</div>
            {open ? (
                <Menu
                    {...props}
                    onItemClick={handleOnClickItem}
                    anchorElement={triggerRef.current}
                    onCloseRequest={handleCloseRequest}
                />
            ) : null}
        </div>
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    );
}

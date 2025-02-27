<<<<<<< HEAD
import { useOnClickOutside } from "@mendix/widget-plugin-hooks/useOnClickOutside";
import { usePositionObserver } from "@mendix/widget-plugin-hooks/usePositionObserver";
import classNames from "classnames";
import { createElement, CSSProperties, ReactElement, useCallback, useRef, useState } from "react";
=======
import { createElement, CSSProperties, ReactElement, useCallback, useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "@mendix/widget-plugin-hooks/useOnClickOutside";
import { usePositionObserver } from "@mendix/widget-plugin-hooks/usePositionObserver";
import { SortDirection } from "@mendix/widget-plugin-sorting";
import classNames from "classnames";
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
import { createPortal } from "react-dom";

export interface SortOption {
    caption: string;
<<<<<<< HEAD
    value: string | null;
}

interface SortComponentProps<Dir = "asc" | "desc"> {
    className?: string;
    placeholder?: string;
    id?: string;
    options: SortOption[];
    value: string | null;
    direction: Dir;
=======
    value: string;
}

interface SortComponentProps {
    className?: string;
    defaultDirection?: SortDirection;
    defaultOption?: SortOption;
    emptyOptionCaption?: string;
    id?: string;
    options: SortOption[];
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    tabIndex?: number;
    screenReaderButtonCaption?: string;
    screenReaderInputCaption?: string;
    styles?: CSSProperties;
<<<<<<< HEAD
    onSelect?: (option: SortOption) => void;
    onDirectionClick?: () => void;
}

export function SortComponent(props: SortComponentProps): ReactElement {
    const { onSelect } = props;
    const [show, setShow] = useState(false);
    const [dropdownWidth, setDropdownWidth] = useState(0);
    const componentRef = useRef<HTMLDivElement>(null);
    const optionsRef = useRef<HTMLUListElement>(null);
    const position = usePositionObserver(componentRef.current, show);

    const onClick = useCallback(
        (option: SortOption) => {
            onSelect?.(option);
            setShow(false);
        },
        [onSelect]
    );

    useOnClickOutside([componentRef, optionsRef], () => setShow(false));

    const selected = props.options.find(o => o.value === props.value);
=======
    updateSort?: (value: SortOption, direction: SortDirection) => void;
}

export function SortComponent(props: SortComponentProps): ReactElement {
    const [valueInput, setValueInput] = useState(props.defaultOption?.caption ?? props.emptyOptionCaption ?? "");
    const [selectedSort, setSelectedSort] = useState<SortOption>(
        props.defaultOption ?? {
            caption: props.emptyOptionCaption ?? "",
            value: ""
        }
    );
    const [show, setShow] = useState(false);
    const [dropdownWidth, setDropdownWidth] = useState(0);
    const [direction, setDirection] = useState(props.defaultDirection ?? "asc");

    const componentRef = useRef<HTMLDivElement>(null);
    const optionsRef = useRef<HTMLUListElement>(null);

    const position = usePositionObserver(componentRef.current, show);

    const onClick = useCallback((option: SortOption) => {
        setValueInput(option.caption);
        setSelectedSort(option);
        setShow(false);
    }, []);

    useOnClickOutside([componentRef, optionsRef], () => setShow(false));

    useEffect(() => {
        if (selectedSort) {
            props.updateSort?.(selectedSort, direction);
        }
    }, [direction, selectedSort]);

    const showPlaceholder = !selectedSort || valueInput === props.emptyOptionCaption;
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

    const optionsComponent = createPortal(
        <ul
            ref={optionsRef}
            id={`${props.id}-dropdown-list`}
            className="dropdown-list"
            role="menu"
            data-focusindex={0}
            style={{ position: "fixed", width: dropdownWidth, top: position?.bottom, left: position?.left }}
        >
            {props.options.map((option, index) => (
                <li
                    className={classNames({
<<<<<<< HEAD
                        "filter-selected": props.value === option.value
=======
                        "filter-selected": selectedSort?.value === option.value
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
                    })}
                    key={index}
                    onClick={e => {
                        e.preventDefault();
                        e.stopPropagation();
                        onClick(option);
                    }}
                    onKeyDown={e => {
                        if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            e.stopPropagation();
                            onClick(option);
                        } else if (e.key === "Tab" && index + 1 === props.options.length) {
                            e.preventDefault();
                            setShow(false);
                            componentRef.current?.querySelector("button")?.focus();
                        } else if ((e.key === "Tab" && e.shiftKey && index === 0) || e.key === "Escape") {
                            e.preventDefault();
                            setShow(false);
                            componentRef.current?.querySelector("input")?.focus();
                        }
                    }}
                    role="menuitem"
                    tabIndex={0}
                >
                    <div className="filter-label">{option.caption}</div>
                </li>
            ))}
        </ul>,
        document.body
    );

    const containerClick = useCallback(() => {
        setShow(show => !show);
        setTimeout(() => {
            (optionsRef.current?.querySelector("li.filter-selected") as HTMLElement)?.focus();
        }, 10);
    }, []);

    return (
        <div
            className={classNames("dropdown-container", props.className)}
            data-focusindex={props.tabIndex ?? 0}
            ref={componentRef}
            style={props.styles}
        >
            <div className="dropdown-triggerer-wrapper">
                <input
<<<<<<< HEAD
                    value={props.value ? selected?.caption : ""}
                    placeholder={props.placeholder}
=======
                    value={showPlaceholder ? "" : valueInput}
                    placeholder={showPlaceholder ? props.emptyOptionCaption : undefined}
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
                    className="form-control dropdown-triggerer"
                    onClick={containerClick}
                    onKeyDown={e => {
                        if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            e.stopPropagation();
                            containerClick();
                        }
                    }}
                    aria-haspopup
                    ref={inputRef => {
                        if (inputRef && inputRef.clientWidth) {
                            setDropdownWidth(inputRef.clientWidth);
                        }
                    }}
                    aria-expanded={show}
                    aria-controls={`${props.id}-dropdown-list`}
                    aria-label={props.screenReaderInputCaption}
<<<<<<< HEAD
                    readOnly
=======
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
                />
                <button
                    aria-label={props.screenReaderButtonCaption}
                    className={classNames("btn btn-default btn-sort", {
<<<<<<< HEAD
                        "icon-asc": props.direction === "asc",
                        "icon-desc": props.direction === "desc"
                    })}
                    onClick={props.onDirectionClick}
=======
                        "icon-asc": direction === "asc",
                        "icon-desc": direction === "desc"
                    })}
                    onClick={() => setDirection(prev => (prev === "asc" ? "desc" : "asc"))}
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
                />
            </div>
            {show && optionsComponent}
        </div>
    );
}

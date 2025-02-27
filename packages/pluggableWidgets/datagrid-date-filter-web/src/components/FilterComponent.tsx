<<<<<<< HEAD
import { FilterSelector } from "@mendix/widget-plugin-filtering/controls";
import classNames from "classnames";
import { createElement, ReactElement } from "react";
import { FilterTypeEnum } from "../helpers/base-types";
import { DatePicker, DatePickerProps } from "./DatePicker";

export interface FilterComponentProps extends DatePickerProps {
    id?: string;
    class: string;
    tabIndex?: number;
    style?: React.CSSProperties;
    placeholder?: string;
    screenReaderButtonCaption?: string;
    screenReaderCalendarCaption?: string;
    screenReaderInputCaption?: string;
    filterFn?: FilterTypeEnum;
    onFilterChange: (fn: FilterTypeEnum) => void;
=======
import { FilterSelector } from "@mendix/widget-plugin-filter-selector/FilterSelector";
import classNames from "classnames";
import { createElement, ReactElement } from "react";
import { FilterTypeEnum } from "../helpers/base-types";
import { DatePicker } from "./DatePicker";
import { SetupProps, useSetup } from "../helpers/useSetup";
import { useReset } from "../helpers/useReset";

export interface FilterComponentProps extends SetupProps {
    name: string;
    adjustable: boolean;
    class: string;
    tabIndex: number;
    defaultFilter: FilterTypeEnum;
    style?: React.CSSProperties;
    placeholder?: string;
    parentChannelName?: string | null;
    screenReaderButtonCaption?: string;
    screenReaderCalendarCaption?: string;
    screenReaderInputCaption?: string;
    defaultValue?: Date;
    defaultStartDate?: Date;
    defaultEndDate?: Date;
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
}

export type FilterComponent = typeof FilterComponent;

export function FilterComponent(props: FilterComponentProps): ReactElement {
<<<<<<< HEAD
=======
    const { id, filterStore, calendarStore, datePickerController } = useSetup(props);
    useReset(props, filterStore);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    return (
        <div
            className={classNames("filter-container", props.class)}
            data-focusindex={props.tabIndex}
            style={props.style}
        >
            {props.adjustable && (
                <FilterSelector
                    ariaLabel={props.screenReaderButtonCaption ?? "Select filter type"}
<<<<<<< HEAD
                    value={props.filterFn ?? "equal"}
                    onChange={props.onFilterChange}
                    options={OPTIONS}
                />
            )}
            <DatePicker {...props} />
=======
                    defaultFilter={filterStore.state.filterType}
                    id={id}
                    onChange={filterStore.setType}
                    options={OPTIONS}
                />
            )}
            <DatePicker
                adjustable={props.adjustable}
                parentId={id}
                placeholder={props.placeholder}
                screenReaderCalendarCaption={props.screenReaderCalendarCaption}
                screenReaderInputCaption={props.screenReaderInputCaption}
                filterStore={filterStore}
                calendarStore={calendarStore}
                datePickerController={datePickerController}
            />
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        </div>
    );
}

const OPTIONS = [
    { value: "between", label: "Between" },
    { value: "greater", label: "Greater than" },
    { value: "greaterEqual", label: "Greater than or equal" },
    { value: "equal", label: "Equal" },
    { value: "notEqual", label: "Not equal" },
    { value: "smaller", label: "Smaller than" },
    { value: "smallerEqual", label: "Smaller than or equal" },
    { value: "empty", label: "Empty" },
    { value: "notEmpty", label: "Not empty" }
] as Array<{ value: FilterTypeEnum; label: string }>;

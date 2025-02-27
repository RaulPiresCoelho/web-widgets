import classNames from "classnames";
import { createElement, Fragment, ReactElement, useState } from "react";
import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
<<<<<<< HEAD
import CalendarIcon from "./CalendarIcon";

type InheritedProps = Pick<
    ReactDatePickerProps<boolean>,
    | "calendarStartDay"
    | "dateFormat"
    | "disabled"
    | "endDate"
    | "locale"
    | "onCalendarClose"
    | "onCalendarOpen"
    | "onChange"
    | "onChangeRaw"
    | "onKeyDown"
    | "selected"
    | "selectsRange"
    | "startDate"
>;
export interface DatePickerProps extends InheritedProps {
    adjustable: boolean;
    id?: string;
    placeholder?: string;
    screenReaderCalendarCaption?: string;
    screenReaderInputCaption?: string;
    pickerRef?: React.RefObject<ReactDatePicker<undefined, undefined>>;
    expanded: boolean;
    onButtonMouseDown?: React.MouseEventHandler<HTMLButtonElement>;
    onButtonKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
=======
import { DatePickerController } from "../helpers/DatePickerController";
import { FilterStore } from "../helpers/store/FilterStore";
import { CalendarStore } from "../helpers/store/CalendarStore";
import { usePickerState } from "../helpers/usePickerState";
import { getLocale, pickerDateFormat, setupLocales } from "../utils/date-utils";
import CalendarIcon from "./CalendarIcon";

interface DatePickerProps {
    adjustable: boolean;
    datePickerController: DatePickerController;
    filterStore: FilterStore;
    parentId?: string;
    placeholder?: string;
    calendarStore: CalendarStore;
    screenReaderCalendarCaption?: string;
    screenReaderInputCaption?: string;
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
}

export function DatePicker(props: DatePickerProps): ReactElement {
    const staticProps = useSetup();
<<<<<<< HEAD
=======
    const { datePickerController: controller } = props;
    const state = usePickerState(props.filterStore, props.calendarStore);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

    return (
        <Fragment>
            <div id={staticProps.portalId} className="date-filter-container" />
<<<<<<< HEAD
            <span className="sr-only" id={`${props.id}-label`}>
=======
            <span className="sr-only" id={`${props.parentId}-label`}>
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
                {props.screenReaderInputCaption}
            </span>
            <ReactDatePicker
                {...staticProps}
<<<<<<< HEAD
                allowSameDay={false}
                ariaLabelledBy={`${props.id}-label`}
                autoFocus={false}
                calendarStartDay={props.calendarStartDay}
                className={classNames("form-control", { "filter-input": props.adjustable })}
                dateFormat={props.dateFormat}
                disabled={props.disabled}
                dropdownMode="select"
                enableTabLoop
                endDate={props.endDate}
                isClearable={props.selectsRange}
                locale={props.locale}
                onCalendarClose={props.onCalendarClose}
                onCalendarOpen={props.onCalendarOpen}
                onChange={props.onChange}
                onChangeRaw={props.onChangeRaw}
                onKeyDown={props.onKeyDown}
                placeholderText={props.placeholder}
                ref={props.pickerRef}
                selected={props.selected}
                selectsRange={props.selectsRange}
=======
                ariaLabelledBy={`${props.parentId}-label`}
                allowSameDay={false}
                autoFocus={false}
                className={classNames("form-control", { "filter-input": props.adjustable })}
                disabled={state.disabled}
                dropdownMode="select"
                enableTabLoop
                endDate={state.endDate}
                isClearable={state.selectsRange}
                onChange={controller.handlePickerChange}
                onCalendarClose={controller.handleCalendarClose}
                onCalendarOpen={controller.handleCalendarOpen}
                onKeyDown={controller.handleKeyDown}
                placeholderText={props.placeholder}
                ref={controller.pickerRef}
                selected={state.selected}
                selectsRange={state.selectsRange}
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
                shouldCloseOnSelect={false}
                showMonthDropdown
                showPopperArrow={false}
                showYearDropdown
<<<<<<< HEAD
                startDate={props.startDate}
                strictParsing
                useWeekdaysShort={false}
            />
            <button
                aria-controls={staticProps.portalId}
                aria-expanded={props.expanded}
                aria-haspopup
                aria-label={props.screenReaderCalendarCaption ?? "Show calendar"}
                className="btn btn-default btn-calendar"
                onMouseDown={props.onButtonMouseDown}
                onKeyDown={props.onButtonKeyDown}
=======
                startDate={state.startDate}
                strictParsing
                useWeekdaysShort={false}
                onChangeRaw={controller.UNSAFE_handleChangeRaw}
            />
            <button
                aria-controls={staticProps.portalId}
                aria-expanded={state.expanded}
                aria-haspopup
                aria-label={props.screenReaderCalendarCaption ?? "Show calendar"}
                className="btn btn-default btn-calendar"
                onMouseDown={controller.handleButtonMouseDown}
                onKeyDown={controller.handleButtonKeyDown}
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            >
                <CalendarIcon />
            </button>
        </Fragment>
    );
}

type StaticProps = Omit<ReactDatePickerProps, "onChange">;

function useSetup(): StaticProps {
    const [props] = useState<StaticProps>(() => {
<<<<<<< HEAD
        return {
=======
        const locale = getLocale();
        return {
            calendarStartDay: locale.firstDayOfWeek,
            dateFormat: pickerDateFormat(locale),
            locale: setupLocales(locale),
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            popperPlacement: "bottom-start",
            popperProps: {
                strategy: "fixed"
            },
            portalId: `datepicker_` + Math.random()
        };
    });

    return props;
}

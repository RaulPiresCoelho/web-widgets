<<<<<<< HEAD
import { createElement } from "react";
import { observer } from "mobx-react-lite";
import classNames from "classnames";
import { FilterSelector } from "../filter-selector/FilterSelector";
import { InputComponentProps } from "./typings";
import { AllFunctions } from "../../typings/FilterFunctions";

// eslint-disable-next-line prefer-arrow-callback
export function InputWithFiltersComponent<Fn extends AllFunctions>(props: InputComponentProps<Fn>): React.ReactElement {
    const {
        inputStores: [input1]
    } = props;
=======
import { createElement, memo } from "react";
import classNames from "classnames";
import { FilterSelector } from "@mendix/widget-plugin-filter-selector/FilterSelector";
import { InputComponentProps } from "./typings";

// eslint-disable-next-line prefer-arrow-callback
export const InputWithFilters = memo(function InputWithFilters<TFilterEnum extends string>(
    props: InputComponentProps<TFilterEnum>
): React.ReactElement {
    const { defaultFilter } = props;
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    return (
        <div
            className={classNames("filter-container", props.className)}
            data-focusindex={props.tabIndex ?? 0}
            style={props.styles}
        >
            {props.adjustable && (
                <FilterSelector
                    ariaLabel={props.screenReaderButtonCaption}
<<<<<<< HEAD
                    value={props.filterFn}
                    onChange={props.onFilterChange}
                    options={props.filterFnList}
=======
                    id={props.id}
                    defaultFilter={defaultFilter}
                    onChange={props.onFilterChange}
                    options={props.filters}
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
                />
            )}
            <input
                aria-label={props.screenReaderInputCaption}
                className={classNames("form-control", { "filter-input": props.adjustable })}
<<<<<<< HEAD
                disabled={props.disableInputs}
                onChange={input1.onChange}
                placeholder={props.placeholder}
                ref={props.inputRef}
                type={props.type}
                value={input1.value}
            />
        </div>
    );
}

export const InputWithFilters = observer(InputWithFiltersComponent);
=======
                disabled={props.inputDisabled}
                onChange={props.onInputChange}
                placeholder={props.placeholder}
                ref={props.inputRef}
                type={props.inputType}
                value={props.inputValue}
            />
        </div>
    );
});
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

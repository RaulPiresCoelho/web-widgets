<<<<<<< HEAD
import { observer } from "mobx-react-lite";
import { createElement, ReactElement, useRef } from "react";
import { useSortControl } from "@mendix/widget-plugin-sorting/helpers/useSortControl";
import { SortingStoreInterface } from "@mendix/widget-plugin-sorting/typings";
import { generateUUID } from "@mendix/widget-plugin-platform/framework/generate-uuid";
import { DropdownSortContainerProps } from "../typings/DropdownSortProps";
import { SortComponent } from "./components/SortComponent";
import { withSortStore } from "./hocs/withSortStore";

function Container(props: DropdownSortContainerProps & { sortStore: SortingStoreInterface }): ReactElement {
    const id = (useRef<string>().current ??= `DropdownSort${generateUUID()}`);
    const sortProps = useSortControl(
        { ...props, emptyOptionCaption: props.emptyOptionCaption?.value },
        props.sortStore
    );

    return (
        <SortComponent
            className={props.class}
            placeholder={props.emptyOptionCaption?.value}
            id={id}
=======
import { Context, createElement, ReactElement, useCallback, useContext, useMemo, useRef } from "react";
import { ListAttributeValue } from "mendix";
import { Alert } from "@mendix/widget-plugin-component-kit/Alert";
import { generateUUID } from "@mendix/widget-plugin-platform/framework/generate-uuid";
import { SortContextValue, SortDirection, SortInstruction, getSortDispatcher } from "@mendix/widget-plugin-sorting";
import { DropdownSortContainerProps } from "../typings/DropdownSortProps";
import { SortComponent, SortOption } from "./components/SortComponent";

export function DropdownSort(props: DropdownSortContainerProps): ReactElement {
    const id = useRef(`DropdownSort${generateUUID()}`);

    const SortContext = (getSortDispatcher() ?? {}) as Context<SortContextValue>;
    const alertMessage = (
        <Alert bootstrapStyle="danger">
            The Drop-down sort widget must be placed inside the header of the Gallery widget.
        </Alert>
    );
    const { sortDispatcher, attributes, initialSort } = useContext(SortContext) ?? {};

    let defaultValue;
    let defaultDirection;

    const options = useMemo(
        () => [
            {
                caption: props.emptyOptionCaption?.value ?? "",
                value: ""
            },
            ...(attributes?.map(attribute => ({ caption: attribute.caption, value: attribute.attribute.id })) ?? [])
        ],
        [attributes, props.emptyOptionCaption?.value]
    );

    const updateSort = useCallback(
        (value: SortOption, direction: SortDirection): void => {
            const filteredOption = attributes?.find(attr => attr.attribute.id === value.value);
            sortDispatcher({
                getSortCondition: () => getSortCondition(filteredOption?.attribute, direction, value)
            });
        },
        [attributes, sortDispatcher]
    );

    if (!sortDispatcher || !attributes) {
        return alertMessage;
    }

    if (initialSort && initialSort.length > 0) {
        // Keeping the code in order to implement a future multi-sorting
        const [sort] = initialSort;
        const [id, direction] = sort;
        if (id) {
            defaultValue = options.find(option => option.value === String(id));
        }
        if (direction) {
            defaultDirection = direction;
        }
    }

    return (
        <SortComponent
            key={defaultValue?.value ?? "sort-component"}
            className={props.class}
            defaultDirection={defaultDirection}
            defaultOption={defaultValue}
            emptyOptionCaption={props.emptyOptionCaption?.value}
            id={id.current}
            options={options}
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            screenReaderButtonCaption={props.screenReaderButtonCaption?.value}
            screenReaderInputCaption={props.screenReaderInputCaption?.value}
            styles={props.style}
            tabIndex={props.tabIndex}
<<<<<<< HEAD
            {...sortProps}
=======
            updateSort={updateSort}
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        />
    );
}

<<<<<<< HEAD
const Widget = withSortStore(observer(Container));

export function DropdownSort(props: DropdownSortContainerProps): ReactElement {
    return <Widget {...props} />;
=======
function getSortCondition(
    listAttribute: ListAttributeValue | undefined,
    direction: SortDirection,
    value: SortOption
): SortInstruction | undefined {
    if (!listAttribute || !listAttribute.sortable || !value) {
        return undefined;
    }

    const { id } = listAttribute;

    return [id, direction];
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
}

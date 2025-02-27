import classNames from "classnames";
import { ObjectItem } from "mendix";
import { ReactElement, createElement } from "react";
<<<<<<< HEAD
import { CellComponent, EventsController } from "../typings/CellComponent";
import { GridColumn } from "../typings/GridColumn";
import { SelectorCell } from "./SelectorCell";
import { CheckboxCell } from "./CheckboxCell";
import { SelectActionHelper } from "../helpers/SelectActionHelper";
=======
import { useWidgetProps } from "../helpers/useWidgetProps";
import { CellComponent } from "../typings/CellComponent";
import { GridColumn } from "../typings/GridColumn";
import { SelectorCell } from "./SelectorCell";
import { CheckboxCell } from "./CheckboxCell";
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

export interface RowProps<C extends GridColumn> {
    className?: string;
    CellComponent: CellComponent<C>;
    columns: C[];
    item: ObjectItem;
    index: number;
    showSelectorCell?: boolean;
<<<<<<< HEAD
    selectableWrapper?: (column: number, children: React.ReactElement) => React.ReactElement;
    selectActionHelper: SelectActionHelper;
    preview: boolean;
    totalRows: number;
    clickable: boolean;
    eventsController: EventsController;
}

export function Row<C extends GridColumn>(props: RowProps<C>): ReactElement {
    const { CellComponent: Cell, selectActionHelper, preview, totalRows, eventsController } = props;
=======
    selectableWrapper: (column: number, children: React.ReactElement) => React.ReactElement;
}

export function Row<C extends GridColumn>(props: RowProps<C>): ReactElement {
    const { CellComponent: Cell } = props;
    const { selectActionHelper, preview, data, rowClickable, cellEventsController } = useWidgetProps();
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    const selected = selectActionHelper.isSelected(props.item);
    const ariaSelected = selectActionHelper.selectionType === "None" ? undefined : selected;
    const borderTop = props.index === 0;

    return (
        <div
            className={classNames("tr", { "tr-selected": selected, "tr-preview": preview }, props.className)}
            role="row"
            aria-selected={ariaSelected}
        >
            {selectActionHelper.showCheckboxColumn && (
                <CheckboxCell
                    item={props.item}
                    key="checkbox_cell"
                    borderTop={borderTop}
                    rowIndex={props.index}
<<<<<<< HEAD
                    lastRow={props.index === totalRows - 1}
=======
                    lastRow={props.index === data.length - 1}
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
                />
            )}
            {props.columns.map((column, baseIndex) => {
                const cell = (
                    <Cell
                        key={`row_${props.item.id}_col_${column.columnId}`}
                        column={column}
                        rowIndex={props.index}
                        columnIndex={selectActionHelper.showCheckboxColumn ? baseIndex + 1 : baseIndex}
                        item={props.item}
<<<<<<< HEAD
                        clickable={props.clickable}
                        preview={preview}
                        eventsController={eventsController}
                    />
                );

                return preview ? props.selectableWrapper?.(baseIndex, cell) : cell;
            })}
            {props.showSelectorCell && (
                <SelectorCell
                    key="column_selector_cell"
                    borderTop={borderTop}
                    clickable={props.clickable}
                    tabIndex={-1}
                />
=======
                        clickable={rowClickable}
                        preview={preview}
                        eventsController={cellEventsController}
                    />
                );

                return preview ? props.selectableWrapper(baseIndex, cell) : cell;
            })}
            {props.showSelectorCell && (
                <SelectorCell key="column_selector_cell" borderTop={borderTop} clickable={rowClickable} tabIndex={-1} />
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            )}
        </div>
    );
}

import { Pagination } from "@mendix/widget-plugin-grid/components/Pagination";
import { SelectionStatus } from "@mendix/widget-plugin-grid/selection";
import classNames from "classnames";
import { ListActionValue, ObjectItem } from "mendix";
<<<<<<< HEAD
import { CSSProperties, ReactElement, ReactNode, createElement, Fragment } from "react";
import {
    PagingPositionEnum,
    PaginationEnum,
    ShowPagingButtonsEnum,
    LoadingTypeEnum
} from "../../typings/DatagridProps";
import { WidgetPropsProvider } from "../helpers/useWidgetProps";
import { CellComponent, EventsController } from "../typings/CellComponent";
import { ColumnId, GridColumn } from "../typings/GridColumn";
import { Grid } from "./Grid";
import { GridBody } from "./GridBody";
=======
import { CSSProperties, ReactElement, ReactNode, createElement, useCallback, useState, Fragment } from "react";
import { PagingPositionEnum, PaginationEnum, ShowPagingButtonsEnum } from "../../typings/DatagridProps";
import { WidgetPropsProvider } from "../helpers/useWidgetProps";
import { CellComponent, EventsController } from "../typings/CellComponent";
import { ColumnId, GridColumn } from "../typings/GridColumn";
import { CheckboxColumnHeader } from "./CheckboxColumnHeader";
import { ColumnResizer } from "./ColumnResizer";
import { ColumnSelector } from "./ColumnSelector";
import { Grid } from "./Grid";
import { GridBody } from "./GridBody";
import { Header } from "./Header";
import { Row } from "./Row";
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
import { WidgetContent } from "./WidgetContent";
import { WidgetFooter } from "./WidgetFooter";
import { WidgetHeader } from "./WidgetHeader";
import { WidgetRoot } from "./WidgetRoot";
import { WidgetTopBar } from "./WidgetTopBar";
import { ExportWidget } from "./ExportWidget";
<<<<<<< HEAD
import { SelectActionHelper } from "../helpers/SelectActionHelper";
import { FocusTargetController } from "@mendix/widget-plugin-grid/keyboard-navigation/FocusTargetController";
import { observer } from "mobx-react-lite";
import { RowsRenderer } from "./RowsRenderer";
import { GridHeader } from "./GridHeader";
=======
import { KeyNavProvider } from "@mendix/widget-plugin-grid/keyboard-navigation/context";
import { SelectActionHelper } from "../helpers/SelectActionHelper";
import { FocusTargetController } from "@mendix/widget-plugin-grid/keyboard-navigation/FocusTargetController";
import { observer } from "mobx-react-lite";
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

export interface WidgetProps<C extends GridColumn, T extends ObjectItem = ObjectItem> {
    CellComponent: CellComponent<C>;
    className: string;
    columnsDraggable: boolean;
    columnsFilterable: boolean;
    columnsHidable: boolean;
    columnsResizable: boolean;
    columnsSortable: boolean;
    data: T[];
    emptyPlaceholderRenderer?: (renderWrapper: (children: ReactNode) => ReactElement) => ReactElement;
    exporting: boolean;
    filterRenderer: (renderWrapper: (children: ReactNode) => ReactElement, columnIndex: number) => ReactElement;
    hasMoreItems: boolean;
    headerContent?: ReactNode;
    headerTitle?: string;
    headerWrapperRenderer: (columnIndex: number, header: ReactElement) => ReactElement;
    id: string;
    numberOfItems?: number;
    onExportCancel?: () => void;
    page: number;
    paginationType: PaginationEnum;
    loadMoreButtonCaption?: string;
    pageSize: number;
    paging: boolean;
    pagingPosition: PagingPositionEnum;
    showPagingButtons: ShowPagingButtonsEnum;
    preview?: boolean;
    processedRows: number;
    rowClass?: (item: T) => string;
<<<<<<< HEAD
    gridInteractive: boolean;
=======
    rowClickable: boolean;
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    setPage?: (computePage: (prevPage: number) => number) => void;
    styles?: CSSProperties;
    rowAction?: ListActionValue;
    selectionStatus: SelectionStatus;
    showSelectAllToggle?: boolean;
    exportDialogLabel?: string;
    cancelExportLabel?: string;
    selectRowLabel?: string;
<<<<<<< HEAD
    isLoading: boolean;
    loadingType: LoadingTypeEnum;
    columnsLoading: boolean;
=======
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

    // Helpers
    cellEventsController: EventsController;
    checkboxEventsController: EventsController;
    selectActionHelper: SelectActionHelper;
    focusController: FocusTargetController;

    visibleColumns: GridColumn[];
    availableColumns: GridColumn[];

    columnsSwap: (source: ColumnId, target: [ColumnId, "after" | "before"]) => void;
<<<<<<< HEAD
    setIsResizing: (status: boolean) => void;
=======
    columnsCreateSizeSnapshot: () => void;
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
}

export const Widget = observer(<C extends GridColumn>(props: WidgetProps<C>): ReactElement => {
    const { className, exporting, numberOfItems, onExportCancel, selectActionHelper } = props;

    const selectionEnabled = selectActionHelper.selectionType !== "None";

    return (
        <WidgetPropsProvider value={props}>
            <WidgetRoot
                className={className}
                selectionMethod={selectActionHelper.selectionMethod}
                selection={selectionEnabled}
                style={{}}
                exporting={exporting}
            >
                <Main {...props} data={exporting ? [] : props.data} />
                {exporting && (
                    <ExportWidget
                        alertLabel={props.exportDialogLabel ?? "Export progress"}
                        cancelLabel={props.cancelExportLabel ?? "Cancel data export"}
                        failed={false}
                        onCancel={onExportCancel}
                        open={exporting}
                        progress={props.processedRows}
                        total={numberOfItems}
                    />
                )}
            </WidgetRoot>
        </WidgetPropsProvider>
    );
});

const Main = observer(<C extends GridColumn>(props: WidgetProps<C>): ReactElement => {
    const {
<<<<<<< HEAD
        CellComponent,
        columnsHidable,
        data: rows,
        emptyPlaceholderRenderer,
        hasMoreItems,
        headerContent,
        headerTitle,
=======
        availableColumns,
        CellComponent,
        columnsDraggable,
        columnsFilterable,
        columnsHidable,
        columnsResizable,
        columnsSortable,
        data: rows,
        emptyPlaceholderRenderer,
        filterRenderer: filterRendererProp,
        hasMoreItems,
        headerContent,
        headerTitle,
        headerWrapperRenderer,
        id,
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        loadMoreButtonCaption,
        numberOfItems,
        page,
        pageSize,
        paginationType,
        paging,
        pagingPosition,
        preview,
        selectActionHelper,
        setPage,
        visibleColumns
    } = props;

<<<<<<< HEAD
    const isInfinite = paginationType === "virtualScrolling";
    const showHeader = !!headerContent;
    const showTopBar = paging && (pagingPosition === "top" || pagingPosition === "both");

=======
    const isInfinite = !paging;
    const [isDragging, setIsDragging] = useState<[ColumnId | undefined, ColumnId, ColumnId | undefined] | undefined>();
    const [dragOver, setDragOver] = useState<[ColumnId, "before" | "after"] | undefined>(undefined);
    const showHeader = !!headerContent;
    const showTopBar = paging && (pagingPosition === "top" || pagingPosition === "both");

    const renderFilterWrapper = useCallback(
        (children: ReactNode) => (
            <div className="filter" style={{ pointerEvents: isDragging ? "none" : undefined }}>
                {children}
            </div>
        ),
        [isDragging]
    );

>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    const pagination = paging ? (
        <Pagination
            canNextPage={hasMoreItems}
            canPreviousPage={page !== 0}
            gotoPage={(page: number) => setPage && setPage(() => page)}
            nextPage={() => setPage && setPage(prev => prev + 1)}
            numberOfItems={numberOfItems}
            page={page}
            pageSize={pageSize}
            showPagingButtons={props.showPagingButtons}
            previousPage={() => setPage && setPage(prev => prev - 1)}
<<<<<<< HEAD
            pagination={paginationType}
=======
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        />
    ) : null;

    const cssGridStyles = gridStyle(visibleColumns, {
        selectItemColumn: selectActionHelper.showCheckboxColumn,
        visibilitySelectorColumn: columnsHidable
    });

    const selectionEnabled = selectActionHelper.selectionType !== "None";

    return (
        <Fragment>
            {showTopBar && <WidgetTopBar>{pagination}</WidgetTopBar>}
            {showHeader && <WidgetHeader headerTitle={headerTitle}>{headerContent}</WidgetHeader>}
            <WidgetContent
                isInfinite={isInfinite}
                hasMoreItems={hasMoreItems}
                setPage={setPage}
                paginationType={paginationType}
<<<<<<< HEAD
                isLoading={props.isLoading && props.loadingType === "spinner"}
                pageSize={props.pageSize}
=======
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            >
                <Grid
                    aria-multiselectable={selectionEnabled ? selectActionHelper.selectionType === "Multi" : undefined}
                >
                    <GridBody style={cssGridStyles}>
<<<<<<< HEAD
                        <GridHeader
                            availableColumns={props.availableColumns}
                            columns={visibleColumns}
                            setIsResizing={props.setIsResizing}
                            columnsDraggable={props.columnsDraggable}
                            columnsFilterable={props.columnsFilterable}
                            columnsHidable={props.columnsHidable}
                            columnsResizable={props.columnsResizable}
                            columnsSortable={props.columnsSortable}
                            columnsSwap={props.columnsSwap}
                            filterRenderer={props.filterRenderer}
                            headerWrapperRenderer={props.headerWrapperRenderer}
                            id={props.id}
                            isLoading={props.columnsLoading}
                            preview={props.preview}
                        />
                        <RowsRenderer
                            preview={props.preview ?? false}
                            interactive={props.gridInteractive}
                            Cell={CellComponent}
                            columns={visibleColumns}
                            columnsHidable={columnsHidable}
                            rows={rows}
                            rowClass={props.rowClass}
                            selectableWrapper={props.headerWrapperRenderer}
                            selectActionHelper={selectActionHelper}
                            focusController={props.focusController}
                            eventsController={props.cellEventsController}
                            isLoading={props.isLoading}
                            pageSize={props.pageSize}
                        />
=======
                        <div key="headers_row" className="tr" role="row">
                            <CheckboxColumnHeader key="headers_column_select_all" />
                            {visibleColumns.map((column, index) =>
                                headerWrapperRenderer(
                                    index,
                                    <Header
                                        key={`${column.columnId}`}
                                        className={`align-column-${column.alignment}`}
                                        gridId={props.id}
                                        column={column}
                                        draggable={columnsDraggable}
                                        dropTarget={dragOver}
                                        filterable={columnsFilterable}
                                        filterWidget={filterRendererProp(renderFilterWrapper, column.columnIndex)}
                                        hidable={columnsHidable}
                                        isDragging={isDragging}
                                        preview={preview}
                                        resizable={columnsResizable && visibleColumns.at(-1) !== column}
                                        resizer={
                                            <ColumnResizer
                                                onResizeStart={props.columnsCreateSizeSnapshot}
                                                setColumnWidth={(width: number) => column.setSize(width)}
                                            />
                                        }
                                        swapColumns={props.columnsSwap}
                                        setDropTarget={setDragOver}
                                        setIsDragging={setIsDragging}
                                        sortable={columnsSortable}
                                    />
                                )
                            )}
                            {columnsHidable && (
                                <ColumnSelector
                                    key="headers_column_selector"
                                    columns={availableColumns}
                                    id={id}
                                    visibleLength={visibleColumns.length}
                                />
                            )}
                        </div>
                        <KeyNavProvider focusController={props.focusController}>
                            {rows.map((item, rowIndex) => {
                                return (
                                    <Row
                                        CellComponent={CellComponent}
                                        className={props.rowClass?.(item)}
                                        columns={visibleColumns}
                                        index={rowIndex}
                                        item={item}
                                        key={`row_${item.id}`}
                                        showSelectorCell={columnsHidable}
                                        selectableWrapper={headerWrapperRenderer}
                                    />
                                );
                            })}
                        </KeyNavProvider>
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
                        {(rows.length === 0 || preview) &&
                            emptyPlaceholderRenderer &&
                            emptyPlaceholderRenderer(children => (
                                <div
                                    key="row-footer"
                                    className={classNames("td", { "td-borders": !preview })}
                                    style={{
                                        gridColumn: `span ${
                                            visibleColumns.length +
                                            (columnsHidable ? 1 : 0) +
                                            (selectActionHelper.showCheckboxColumn ? 1 : 0)
                                        }`
                                    }}
                                >
                                    <div className="empty-placeholder">{children}</div>
                                </div>
                            ))}
                    </GridBody>
                </Grid>
            </WidgetContent>
            <WidgetFooter
                pagination={pagination}
                pagingPosition={pagingPosition}
                paginationType={paginationType}
                loadMoreButtonCaption={loadMoreButtonCaption}
                hasMoreItems={hasMoreItems}
                setPage={setPage}
            />
        </Fragment>
    );
});

function gridStyle(columns: GridColumn[], optional: OptionalColumns): CSSProperties {
<<<<<<< HEAD
    const columnSizes = columns.map(c => c.getCssWidth());
=======
    const columnSizes = columns.map(c => {
        const isLast = columns.at(-1) === c;
        const columnResizedSize = c.size;
        if (columnResizedSize) {
            return isLast ? "minmax(min-content, auto)" : `${columnResizedSize}px`;
        }
        return c.getCssWidth();
    });
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

    const sizes: string[] = [];

    if (optional.selectItemColumn) {
        sizes.push("48px");
    }

    sizes.push(...columnSizes);

    if (optional.visibilitySelectorColumn) {
        sizes.push("54px");
    }

    return {
        gridTemplateColumns: sizes.join(" ")
    };
}

type OptionalColumns = {
    selectItemColumn?: boolean;
    visibilitySelectorColumn?: boolean;
};

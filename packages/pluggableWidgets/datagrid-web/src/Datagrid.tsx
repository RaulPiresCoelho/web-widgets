<<<<<<< HEAD
import { useSelectionHelper } from "@mendix/widget-plugin-grid/selection";
import { generateUUID } from "@mendix/widget-plugin-platform/framework/generate-uuid";
import { ValueStatus } from "mendix";
import { ReactElement, ReactNode, createElement, useCallback, useMemo } from "react";
=======
import { useFilterContext } from "@mendix/widget-plugin-filtering";
import { useCreateSelectionContextValue, useSelectionHelper } from "@mendix/widget-plugin-grid/selection";
import { generateUUID } from "@mendix/widget-plugin-platform/framework/generate-uuid";
import { ReactElement, ReactNode, createElement, useCallback, useEffect, useMemo } from "react";
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
import { DatagridContainerProps } from "../typings/DatagridProps";
import { Cell } from "./components/Cell";
import { Widget } from "./components/Widget";
import { WidgetHeaderContext } from "./components/WidgetHeaderContext";
<<<<<<< HEAD
=======
import "./ui/Datagrid.scss";
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
import { useShowPagination } from "./utils/useShowPagination";
import { useSelectActionHelper } from "./helpers/SelectActionHelper";
import { useClickActionHelper } from "@mendix/widget-plugin-grid/helpers/ClickActionHelper";
import { useCellEventsController } from "./features/row-interaction/CellEventsController";
import { useCheckboxEventsController } from "./features/row-interaction/CheckboxEventsController";
import { useFocusTargetController } from "@mendix/widget-plugin-grid/keyboard-navigation/useFocusTargetController";
import { useOnResetFiltersEvent } from "@mendix/widget-plugin-external-events/hooks";
import { IColumnGroupStore } from "./helpers/state/ColumnGroupStore";
import { observer } from "mobx-react-lite";
import { RootGridStore } from "./helpers/state/RootGridStore";
import { useRootStore } from "./helpers/state/useRootStore";
import { useDataExport } from "./features/data-export/useDataExport";
import { ProgressStore } from "./features/data-export/ProgressStore";
<<<<<<< HEAD
import { useRefreshReload } from "./utils/useRefreshReload";
=======
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

interface Props extends DatagridContainerProps {
    columnsStore: IColumnGroupStore;
    rootStore: RootGridStore;
    progressStore: ProgressStore;
}

const Container = observer((props: Props): ReactElement => {
    const isInfiniteLoad = props.pagination === "virtualScrolling" || props.pagination === "loadMore";
    const currentPage = isInfiniteLoad
        ? props.datasource.limit / props.pageSize
        : props.datasource.offset / props.pageSize;

<<<<<<< HEAD
=======
    const { FilterContext } = useFilterContext();
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    const { columnsStore, rootStore } = props;

    const items = props.datasource.items ?? [];

    const [exportProgress, abortExport] = useDataExport(props, props.columnsStore, props.progressStore);

<<<<<<< HEAD
    const { isRefreshing } = useRefreshReload({ datasource: props.datasource, refreshInterval: props.refreshInterval });
=======
    useEffect(() => {
        if (props.refreshInterval > 0) {
            setTimeout(() => {
                props.datasource.reload();
            }, props.refreshInterval * 1000);
        }
    }, [props.datasource, props.refreshInterval]);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

    const setPage = useCallback(
        (computePage: (prevPage: number) => number) => {
            const newPage = computePage(currentPage);
            if (isInfiniteLoad) {
                props.datasource.setLimit(newPage * props.pageSize);
            } else {
                props.datasource.setOffset(newPage * props.pageSize);
            }
        },
        [props.datasource, props.pageSize, isInfiniteLoad, currentPage]
    );

    const selectionHelper = useSelectionHelper(props.itemSelection, props.datasource, props.onSelectionChange);

    const selectActionHelper = useSelectActionHelper(props, selectionHelper);

    const clickActionHelper = useClickActionHelper({
        onClickTrigger: props.onClickTrigger,
        onClick: props.onClick
    });
<<<<<<< HEAD
    useOnResetFiltersEvent(rootStore.staticInfo.name, rootStore.staticInfo.filtersChannelName);
=======
    const filtersChannelName = useMemo(() => `datagrid/${generateUUID()}`, []);
    useOnResetFiltersEvent(props.name, filtersChannelName);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

    const visibleColumnsCount = selectActionHelper.showCheckboxColumn
        ? columnsStore.visibleColumns.length + 1
        : columnsStore.visibleColumns.length;

    const focusController = useFocusTargetController({
        rows: items.length,
        columns: visibleColumnsCount,
        pageSize: props.pageSize
    });

    const cellEventsController = useCellEventsController(selectActionHelper, clickActionHelper, focusController);

    const checkboxEventsController = useCheckboxEventsController(selectActionHelper, focusController);

<<<<<<< HEAD
    const datasourceIsLoading = useMemo((): boolean => {
        if (exportProgress.exporting) {
            return false;
        }

        if (isRefreshing) {
            return false;
        }

        if (!props.datasource.hasMoreItems) {
            return false;
        }

        return props.datasource.status === ValueStatus.Loading;
    }, [exportProgress, isRefreshing, props.datasource.status, props.datasource.hasMoreItems]);

    const showPagingButtonsOrRows = props.pagination === "buttons" ? props.showPagingButtons : props.showNumberOfRows;
=======
    const selectionContextValue = useCreateSelectionContextValue(selectionHelper);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

    return (
        <Widget
            className={props.class}
            CellComponent={Cell}
            columnsDraggable={props.columnsDraggable}
            columnsFilterable={props.columnsFilterable}
            columnsHidable={props.columnsHidable}
            columnsResizable={props.columnsResizable}
            columnsSortable={props.columnsSortable}
            data={items}
            emptyPlaceholderRenderer={useCallback(
                (renderWrapper: (children: ReactNode) => ReactElement) =>
                    props.showEmptyPlaceholder === "custom" ? renderWrapper(props.emptyPlaceholder) : <div />,
                [props.emptyPlaceholder, props.showEmptyPlaceholder]
            )}
            filterRenderer={useCallback(
                (renderWrapper, columnIndex) => {
                    const columnFilter = columnsStore.columnFilters[columnIndex];
<<<<<<< HEAD
                    return renderWrapper(columnFilter.renderFilterWidgets());
                },
                [columnsStore.columnFilters]
=======

                    if (!columnFilter.needsFilterContext) {
                        return renderWrapper(columnFilter.renderFilterWidgets());
                    }

                    return renderWrapper(
                        <FilterContext.Provider
                            value={{
                                eventsChannelName: filtersChannelName,
                                filterDispatcher: prev => {
                                    rootStore.headerFiltersStore.setDirty();
                                    columnFilter.setFilterState(prev);
                                    return prev;
                                },
                                ...columnFilter.getFilterContextProps()
                            }}
                        >
                            {columnFilter.renderFilterWidgets()}
                        </FilterContext.Provider>
                    );
                },
                [FilterContext, columnsStore.columnFilters, rootStore.headerFiltersStore, filtersChannelName]
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            )}
            headerTitle={props.filterSectionTitle?.value}
            headerContent={
                props.filtersPlaceholder && (
<<<<<<< HEAD
                    <WidgetHeaderContext selectionHelper={selectionHelper} filtersStore={rootStore.headerFiltersStore}>
=======
                    <WidgetHeaderContext
                        selectionContextValue={selectionContextValue}
                        eventsChannelName={filtersChannelName}
                        headerFilterStore={rootStore.headerFiltersStore}
                    >
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
                        {props.filtersPlaceholder}
                    </WidgetHeaderContext>
                )
            }
            hasMoreItems={props.datasource.hasMoreItems ?? false}
            headerWrapperRenderer={useCallback((_columnIndex: number, header: ReactElement) => header, [])}
            id={useMemo(() => `DataGrid${generateUUID()}`, [])}
            numberOfItems={props.datasource.totalCount}
            onExportCancel={abortExport}
            page={currentPage}
            pageSize={props.pageSize}
            paginationType={props.pagination}
            loadMoreButtonCaption={props.loadMoreButtonCaption?.value}
            paging={useShowPagination({
                pagination: props.pagination,
<<<<<<< HEAD
                showPagingButtonsOrRows,
                totalCount: props.datasource.totalCount,
                limit: props.datasource.limit,
                requestTotalCount: props.datasource.requestTotalCount
=======
                showPagingButtons: props.showPagingButtons,
                totalCount: props.datasource.totalCount,
                limit: props.datasource.limit
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            })}
            pagingPosition={props.pagingPosition}
            showPagingButtons={props.showPagingButtons}
            rowClass={useCallback((value: any) => props.rowClass?.get(value)?.value ?? "", [props.rowClass])}
<<<<<<< HEAD
            gridInteractive={!!(props.itemSelection || props.onClick)}
=======
            rowClickable={!!(props.itemSelection || props.onClick)}
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            setPage={setPage}
            styles={props.style}
            selectionStatus={selectionHelper?.type === "Multi" ? selectionHelper.selectionStatus : "unknown"}
            exporting={exportProgress.exporting}
            processedRows={exportProgress.loaded}
            exportDialogLabel={props.exportDialogLabel?.value}
            cancelExportLabel={props.cancelExportLabel?.value}
            selectRowLabel={props.selectRowLabel?.value}
            visibleColumns={columnsStore.visibleColumns}
            availableColumns={columnsStore.availableColumns}
<<<<<<< HEAD
            setIsResizing={(status: boolean) => columnsStore.setIsResizing(status)}
=======
            columnsCreateSizeSnapshot={() => columnsStore.createSizeSnapshot()}
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            columnsSwap={(moved, [target, placement]) => columnsStore.swapColumns(moved, [target, placement])}
            selectActionHelper={selectActionHelper}
            cellEventsController={cellEventsController}
            checkboxEventsController={checkboxEventsController}
            focusController={focusController}
<<<<<<< HEAD
            isLoading={datasourceIsLoading}
            loadingType={props.loadingType}
            columnsLoading={!columnsStore.loaded}
=======
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        />
    );
});

const ContainerWithLoading = observer((props: Props) => {
    if (!props.rootStore.isLoaded) {
        return null;
    }
    return <Container {...props} />;
});

export default function Datagrid(props: DatagridContainerProps): ReactElement | null {
    const rootStore = useRootStore(props);

    return (
        <ContainerWithLoading
            {...props}
            rootStore={rootStore}
            columnsStore={rootStore.columnsStore}
            progressStore={rootStore.progressStore}
        />
    );
}

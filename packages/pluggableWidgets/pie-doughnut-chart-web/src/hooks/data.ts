<<<<<<< HEAD
import { ensure } from "@mendix/pluggable-widgets-tools";
import { ChartWidgetProps, compareAttrValuesAsc } from "@mendix/shared-charts/main";
import { executeAction } from "@mendix/widget-plugin-platform/framework/execute-action";
import Big from "big.js";
import { ObjectItem, ValueStatus } from "mendix";
import { useCallback, useEffect, useMemo, useState } from "react";
import { PieChartContainerProps } from "../../typings/PieChartProps";
=======
import { ValueStatus } from "mendix";
import { useEffect, useMemo, useState } from "react";
import { ensure } from "@mendix/pluggable-widgets-tools";
import Big from "big.js";
import { PieChartContainerProps } from "../../typings/PieChartProps";
import { ChartWidgetProps, compareAttrValuesAsc } from "@mendix/shared-charts/common";
import { executeAction } from "@mendix/widget-plugin-platform/framework/execute-action";
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

type PieChartDataSeriesHooks = Pick<
    PieChartContainerProps,
    | "customSeriesOptions"
    | "holeRadius"
    | "onClickAction"
    | "seriesColorAttribute"
    | "seriesDataSource"
    | "seriesName"
    | "seriesSortAttribute"
    | "seriesSortOrder"
    | "seriesValueAttribute"
    | "tooltipHoverText"
<<<<<<< HEAD
    | "seriesItemSelection"
=======
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
>;

type LocalPieChartData = {
    itemName: string | undefined;
    itemValue: number | undefined;
    itemColor: string | undefined;
    itemSortValue: string | boolean | Date | Big | undefined;
    itemHoverText: string | undefined;
};

export const usePieChartDataSeries = ({
    holeRadius,
    customSeriesOptions,
    seriesColorAttribute,
    seriesDataSource,
    seriesName,
    seriesSortAttribute,
    seriesSortOrder,
    seriesValueAttribute,
    onClickAction,
<<<<<<< HEAD
    tooltipHoverText,
    seriesItemSelection
=======
    tooltipHoverText
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
}: PieChartDataSeriesHooks): ChartWidgetProps["data"] => {
    const [pieChartData, setPieChartData] = useState<LocalPieChartData[]>([]);

    useEffect(() => {
        if (seriesDataSource.status === ValueStatus.Available && seriesDataSource.items) {
            const dataSourceItems = seriesDataSource.items.map(dataSourceItem => ({
                itemName: seriesName.get(dataSourceItem).value,
                itemValue: ensure(seriesValueAttribute).get(dataSourceItem).value?.toNumber(),
                itemColor: seriesColorAttribute?.get(dataSourceItem).value,
                itemSortValue: seriesSortAttribute?.get(dataSourceItem).value,
                itemHoverText: tooltipHoverText?.get(dataSourceItem).value
            }));
            if (seriesSortAttribute) {
                dataSourceItems.sort(({ itemSortValue: firstItemSortValue }, { itemSortValue: secondItemSortValue }) =>
                    compareAttrValuesAsc(firstItemSortValue, secondItemSortValue)
                );
                if (seriesSortOrder === "desc") {
                    dataSourceItems.reverse();
                }
            }
            setPieChartData(dataSourceItems);
        }
    }, [
        seriesColorAttribute,
        seriesDataSource,
        seriesName,
        seriesSortAttribute,
        seriesSortOrder,
        seriesValueAttribute,
        tooltipHoverText
    ]);

<<<<<<< HEAD
    const onClick = useCallback(
        (item: ObjectItem) => {
            executeAction(onClickAction?.get(item));
            if (seriesItemSelection && seriesItemSelection.type === "Single") {
                seriesItemSelection.setSelection(item);
            }
        },
        [onClickAction, seriesItemSelection]
    );
=======
    const onClick = useMemo(() => (onClickAction ? () => executeAction(onClickAction) : undefined), [onClickAction]);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

    return useMemo<ChartWidgetProps["data"]>(
        () => [
            {
                customSeriesOptions,
                hole: holeRadius / 100,
                labels: pieChartData.map(({ itemName }) => itemName ?? null),
                values: pieChartData.map(({ itemValue }) => itemValue ?? 0),
                marker: {
                    colors: pieChartData.map(({ itemColor }) => itemColor)
                },
                hovertext: pieChartData.map(({ itemHoverText }) => itemHoverText ?? ""),
                hoverinfo: pieChartData.some(({ itemHoverText }) => itemHoverText !== undefined && itemHoverText !== "")
                    ? "text"
                    : "none",
<<<<<<< HEAD
                dataSourceItems: sortDatasourceItems(
                    seriesDataSource.items ?? [],
                    seriesSortOrder,
                    seriesSortAttribute
                ),
                onClick
            }
        ],
        [
            customSeriesOptions,
            holeRadius,
            pieChartData,
            onClick,
            seriesDataSource.items,
            seriesSortAttribute,
            seriesSortOrder
        ]
    );
};

function sortDatasourceItems(
    items: ObjectItem[],
    seriesSortOrder: "asc" | "desc",
    seriesSortAttribute: PieChartContainerProps["seriesSortAttribute"]
): ObjectItem[] {
    const sortedItems = [...items].sort((firstItem, secondItem) => {
        const first = seriesSortAttribute?.get(firstItem).value;
        const second = seriesSortAttribute?.get(secondItem).value;
        return compareAttrValuesAsc(first, second);
    });

    if (seriesSortOrder === "desc") {
        sortedItems.reverse();
    }

    return sortedItems;
}
=======
                dataSourceItems: [],
                onClick
            }
        ],
        [customSeriesOptions, holeRadius, pieChartData, onClick]
    );
};
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

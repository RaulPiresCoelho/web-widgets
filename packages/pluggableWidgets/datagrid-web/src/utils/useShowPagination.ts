<<<<<<< HEAD
import { useMemo, useEffect } from "react";
=======
import { useMemo } from "react";
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
import { PaginationEnum, ShowPagingButtonsEnum } from "../../typings/DatagridProps";

interface ShowPaginationProps {
    pagination: PaginationEnum;
<<<<<<< HEAD
    showPagingButtonsOrRows: ShowPagingButtonsEnum | boolean;
    totalCount?: number;
    limit: number;
    requestTotalCount: (needTotalCount: boolean) => void;
}

export const useShowPagination = (props: ShowPaginationProps): boolean => {
    const { pagination, showPagingButtonsOrRows, totalCount, limit, requestTotalCount } = props;

    useEffect(() => {
        if (pagination !== "buttons" && showPagingButtonsOrRows) {
            requestTotalCount(true);
        }
    }, [pagination]);

    return useMemo(() => {
        return (
            showPagingButtonsOrRows === true ||
            showPagingButtonsOrRows === "always" ||
            (showPagingButtonsOrRows === "auto" && (totalCount ? totalCount > limit : false))
        );
    }, [pagination, showPagingButtonsOrRows, totalCount, limit]);
=======
    showPagingButtons: ShowPagingButtonsEnum;
    totalCount?: number;
    limit: number;
}

export const useShowPagination = (props: ShowPaginationProps): boolean => {
    const { pagination, showPagingButtons, totalCount, limit } = props;
    return useMemo(() => {
        return (
            pagination === "buttons" &&
            (showPagingButtons === "always" ||
                (showPagingButtons === "auto" && (totalCount ? totalCount > limit : false)))
        );
    }, [pagination, showPagingButtons, totalCount, limit]);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
};

import { useCallback, useEffect, useState } from "react";
import { InfiniteBodyProps, useInfiniteControl } from "@mendix/widget-plugin-grid/components/InfiniteBody";
<<<<<<< HEAD
import { ListValue } from "mendix";
=======
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

type UseLazyLoadingProps = Pick<InfiniteBodyProps, "hasMoreItems" | "isInfinite"> & {
    isOpen: boolean;
    loadMore?: () => void;
<<<<<<< HEAD
    datasourceFilter?: ListValue["filter"];
    readOnly?: boolean;
=======
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
};

type UseLazyLoadingReturn = {
    onScroll: (e: any) => void;
};

export function useLazyLoading(props: UseLazyLoadingProps): UseLazyLoadingReturn {
<<<<<<< HEAD
    const { hasMoreItems, isInfinite, isOpen, loadMore, datasourceFilter, readOnly } = props;

=======
    const { hasMoreItems, isInfinite, isOpen, loadMore } = props;
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    const [firstLoad, setFirstLoad] = useState(false);
    const setPageCallback = useCallback(() => {
        if (loadMore) {
            loadMore();
        }
    }, [loadMore]);

    const [trackScrolling] = useInfiniteControl({ hasMoreItems, isInfinite, setPage: setPageCallback });

    useEffect(() => {
        if (firstLoad === false && isInfinite === true && isOpen === true) {
            setFirstLoad(true);
            setPageCallback();
        }
    }, [firstLoad, isInfinite, isOpen, setPageCallback]);

<<<<<<< HEAD
    useEffect(() => {
        setFirstLoad(false);
    }, [readOnly, datasourceFilter]);

=======
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    return { onScroll: trackScrolling };
}

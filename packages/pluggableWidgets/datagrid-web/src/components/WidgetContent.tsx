import { InfiniteBodyProps, useInfiniteControl } from "@mendix/widget-plugin-grid/components/InfiniteBody";
import classNames from "classnames";
import { ReactElement, ReactNode, createElement } from "react";
import { StickySentinel } from "./StickySentinel";
import { PaginationEnum } from "../../typings/DatagridProps";
<<<<<<< HEAD
import { SpinnerLoader } from "./loader/SpinnerLoader";
=======
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

type PickProps = "hasMoreItems" | "setPage" | "isInfinite";

export type WidgetContentProps = {
    className?: string;
    children?: ReactNode;
    style?: React.CSSProperties;
    paginationType: PaginationEnum;
<<<<<<< HEAD
    isLoading: boolean;
    pageSize: number;
} & Pick<InfiniteBodyProps, PickProps>;

const Container = ({
=======
} & Pick<InfiniteBodyProps, PickProps>;

export function WidgetContent({
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    children,
    className,
    hasMoreItems,
    isInfinite,
    style,
    setPage,
    paginationType
<<<<<<< HEAD
}: WidgetContentProps): ReactElement => {
=======
}: WidgetContentProps): ReactElement {
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    const [trackScrolling, bodySize, containerRef] = useInfiniteControl({
        hasMoreItems,
        isInfinite,
        setPage
    });

    return (
        <div
            className={classNames(
                "widget-datagrid-content",
                "sticky-table-container",
                { "infinite-loading": isInfinite },
                className
            )}
            ref={containerRef}
            onScroll={isInfinite && paginationType !== "loadMore" ? trackScrolling : undefined}
            style={isInfinite && bodySize > 0 ? { ...style, maxHeight: bodySize } : style}
        >
            <StickySentinel />
            {children}
        </div>
    );
<<<<<<< HEAD
};

export function WidgetContent(props: WidgetContentProps): ReactElement {
    if (props.isLoading) {
        return (
            <div className="widget-datagrid-loader-container">
                <SpinnerLoader withMargins size="large" />
            </div>
        );
    }

    return <Container {...props} />;
=======
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
}

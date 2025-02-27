import { DatagridContainerProps } from "../../../typings/DatagridProps";
import { useEffect, useRef, useState } from "react";
import { RootGridStore } from "./RootGridStore";
import { autorun, IReactionDisposer } from "mobx";
<<<<<<< HEAD
=======
import { and } from "mendix/filters/builders";
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

export function useRootStore(props: DatagridContainerProps): RootGridStore {
    const [rootStore] = useState(() => {
        return new RootGridStore(props);
    });

<<<<<<< HEAD
    useEffect(() => {
        const cleanup = rootStore.setup();
        return () => {
            rootStore.dispose();
            cleanup?.();
        };
    }, [rootStore]);

    useEffect(() => {
        rootStore.updateProps(props);
    });

=======
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    const datasourceRef = useRef(props.datasource);
    datasourceRef.current = props.datasource;

    useEffect(() => {
        const disposers: IReactionDisposer[] = [];
<<<<<<< HEAD

=======
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        // apply sorting
        disposers.push(
            autorun(() => {
                datasourceRef.current.setSortOrder(rootStore.sortInstructions);
            })
        );

        // apply filters
        disposers.push(
            autorun(() => {
<<<<<<< HEAD
                datasourceRef.current.setFilter(rootStore.conditions);
=======
                const filters = rootStore.filterConditions;

                if (!filters) {
                    // filters didn't change, don't apply them
                    return;
                }

                if (filters.length > 0) {
                    datasourceRef.current.setFilter(filters.length > 1 ? and(...filters) : filters[0]);
                } else {
                    datasourceRef.current.setFilter(undefined);
                }
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            })
        );

        return () => {
            disposers.forEach(d => d());
<<<<<<< HEAD
        };
    }, [rootStore]);

=======
            rootStore.dispose();
        };
    }, [rootStore]);

    useEffect(() => {
        rootStore.updateProps(props);
    });

>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    return rootStore;
}

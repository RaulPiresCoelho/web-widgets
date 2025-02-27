<<<<<<< HEAD
import { useCallback, useEffect, useState } from "react";
=======
import { useState, useEffect, useCallback } from "react";
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
import { ExportController } from "./ExportController";
import { ProgressStore } from "./ProgressStore";
import { getExportRegistry } from "./registry";
import { DatagridContainerProps } from "../../../typings/DatagridProps";
import { IColumnGroupStore } from "../../helpers/state/ColumnGroupStore";

type ResourceEntry = {
    key: string;
    controller: ExportController;
};

export function useDataExport(
    props: DatagridContainerProps,
    columnsStore: IColumnGroupStore,
    progress: ProgressStore
): [store: ProgressStore, abort: () => void] {
<<<<<<< HEAD
    const [entry] = useState(() => createEntry(props.name, progress));
    const abort = useCallback(() => entry?.controller.abort(), [entry]);

    // Remove entry when widget unmounted.
    useEffect(() => {
        addController(entry);
        return () => {
            entry?.controller.abort();
            removeController(entry);
        };
    }, [entry]);
=======
    const [entry] = useState(() => addController(props.name, progress));
    const abort = useCallback(() => entry?.controller.abort(), [entry]);

    // Remove entry when widget unmounted.
    useEffect(
        () => () => {
            entry?.controller.abort();
            removeController(entry);
        },
        [entry]
    );
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

    useEffect(() => {
        entry?.controller.emit("sourcechange", props.datasource);
    }, [props.datasource, entry]);

    useEffect(() => {
        entry?.controller.emit("propertieschange", props.columns);
    }, [props.columns, entry]);

    useEffect(() => {
        entry?.controller.emit(
            "columnschange",
            columnsStore.visibleColumns.map(col => col.columnIndex)
        );
    }, [columnsStore.visibleColumns, entry]);

    return [progress, abort];
}

<<<<<<< HEAD
function createEntry(name: string, progress: ProgressStore): ResourceEntry {
    return {
        key: name,
        controller: new ExportController(progress)
    };
}

function addController(entry: ResourceEntry): void {
    const registry = getExportRegistry();

    // this overrides existing entries
    // but this is expected behaviour, the last one wins.
    // In the scenario where a new page has a data grid
    // with the same name and gets mounted while the old one
    // is not yet unmounted the new one has to win.
    registry.set(entry.key, entry.controller);
}

function removeController(entry: ResourceEntry | null): void {
    if (!entry) {
        return;
    }

    const registry = getExportRegistry();

    // only remove the exact controller we placed
    // it can happen that other grid has overridden the key
    // in this case we don't do anything.
    if (registry.get(entry.key) === entry.controller) {
        registry.delete(entry.key);
=======
function addController(name: string, progress: ProgressStore): ResourceEntry | null {
    const registry = getExportRegistry();

    if (registry.has(name)) {
        return null;
    }

    const entry = {
        key: name,
        controller: new ExportController(progress)
    };

    registry.set(entry.key, entry.controller);

    return entry;
}

function removeController(entry: ResourceEntry | null): void {
    if (entry) {
        getExportRegistry().delete(entry.key);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    }
}

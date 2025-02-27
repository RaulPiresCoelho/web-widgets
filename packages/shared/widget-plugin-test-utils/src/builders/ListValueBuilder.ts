import type { ListValue, ObjectItem } from "mendix";
import { Status } from "../constants.js";
<<<<<<< HEAD
import { Writable } from "./type-utils.js";
import { obj } from "../primitives/obj.js";
import { objArray } from "../primitives/objArray.js";

export class ListValueBuilder {
    mock: Writable<ListValue>;
    constructor() {
        this.mock = {
            status: Status.Available,
            offset: 0,
            limit: 2,
            items: [obj(), obj()],
            totalCount: 2,
            hasMoreItems: false,
            setLimit: jest.fn(),
            setOffset: jest.fn(),
            requestTotalCount: jest.fn(),
            sortOrder: [],
            filter: undefined,
            setSortOrder: jest.fn(),
            setFilter: jest.fn(),
            reload: jest.fn()
        };
    }

    withItems(items: ObjectItem[]): this {
        this.mock.items = items;
        this.mock.totalCount = items.length;
        this.mock.limit = items.length;
        return this;
    }

    withSize(size: number): this {
        this.withItems(objArray(size));
        return this;
    }

    withHasMore(value: boolean): this {
        this.mock.hasMoreItems = value;
        return this;
    }

    isLoading(): this {
        this.mock.status = Status.Loading;
        this.mock.items = undefined;
        return this;
    }

    isUnavailable(): this {
        this.mock.status = Status.Loading;
        this.mock.items = undefined;
        return this;
    }

    build(): ListValue {
        return { ...this.mock };
    }
=======

// eslint-disable-next-line no-unused-vars
type ListValueBuilder = {
    withItems(items: ObjectItem[]): ListValue;
    withAmountOfItems(amount: number): ListValue;
    isLoading(): ListValue;
    isUnavailable(): ListValue;
    simple(): ListValue;
};

export function ListValueBuilder(): ListValueBuilder {
    const listValue: ListValue = {
        status: Status.Available,
        offset: 0,
        limit: 1,
        items: [{ id: "1" } as ObjectItem, { id: "2" } as ObjectItem],
        totalCount: 2,
        hasMoreItems: false,
        setLimit: jest.fn(),
        setOffset: jest.fn(),
        requestTotalCount: jest.fn(),
        sortOrder: [],
        filter: undefined,
        setSortOrder: jest.fn(),
        setFilter: jest.fn(),
        reload: jest.fn()
    };
    return {
        withItems(items: ObjectItem[]): ListValue {
            return { ...listValue, items, totalCount: items.length };
        },

        withAmountOfItems(amount: number): ListValue {
            const items: ObjectItem[] = [];
            for (let i = 0; i < amount; i++) {
                items.push({ id: i.toString() } as ObjectItem);
            }
            return this.withItems(items);
        },
        isLoading(): ListValue {
            return { ...listValue, status: Status.Loading };
        },

        isUnavailable(): ListValue {
            return { ...listValue, status: Status.Unavailable };
        },

        simple(): ListValue {
            return listValue;
        }
    };
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
}

import { Item, BaseItem } from '../interfaces/item.interface';
import { Items } from '../interfaces/items.interface'
import { items } from '../data/item.data'

export const findAll = async (): Promise<Items[]> => Object.values(items);
export const findOne = async (id: number): Promise<Item> => items[id];
export const create = async (newItem: BaseItem): Promise<Item> => {
    const id = new Date().valueOf();
    items[id] = {
        id,
        ...newItem,
    };

    return items[id]
}

export const update = async (id: number, itemUpdate: BaseItem): Promise<Item | null> => {
    const item = await findOne(id);
    if (!item) {
        return null
    }

    items[id] = { id, ...itemUpdate };

    return items[id]
}

export const remove = async (id: number): Promise<null | void> => {
    const item = await findOne(id)
    if (!item) {
        return null
    }
    delete items[id]

}

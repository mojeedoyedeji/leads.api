import { Request, Response, NextFunction } from 'express'
import axios, { AxiosResponse } from 'axios'

import { Item, BaseItem } from '../interfaces/item.interface';
import { Items } from '../interfaces/items.interface';
import * as ItemService from '../services/item.service';

export const getItem = async (req: Request, res: Response, next: NextFunction) => {
    const id: number = parseInt(req.params.id, 10);
    try {
        const item: Item = await ItemService.findOne(id);
        if (item) {
            return res.status(200).send(item);
        }
        return res.status(404).send("item not found")
    } catch (ex: unknown) {
        res.status(500).send(ex.message)
    }
}

export const getItems = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const items: Items[] = await ItemService.findAll()
        return res.status(200).send(items);
    } catch (ex: unknown) {
        res.status(500).send(ex.message)
    }
}

export const createItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const item: BaseItem = req.body;
        const newItem = await ItemService.create(item);
        res.status(201).json(newItem);
    } catch (ex: unknown) {
        res.status(500).send(ex.message);
    }
}

export const updateItem = async (req: Request, res: Response, next: NextFunction) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        const itemUpdate: Item = req.body;
        const existingItem: Item = await ItemService.findOne(id)

        if (existingItem) {
            const updateItem = await ItemService.update(id, itemUpdate);
            return res.status(200).json(updatedItem);
        }

        const newItem = await ItemService.create(itemUpdate);
        return res.status(201).json(newItem);

    } catch (ex: unknown) {
        res.status(500).send(ex.message);
    }
}

export const deleteItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: number = parseInt(req.params.id, 10);
        await ItemService.remove(id);
        res.sendStatus(204);

    } catch (ex: unknown) {
        res.status(500).send(ex.message);
    }
}
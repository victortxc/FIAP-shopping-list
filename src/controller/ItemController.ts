import { AppDataSource } from "../data-source";

import { Item } from "../entity/Item";
import { Request, Response, response, request } from "express";

const repository = AppDataSource.getRepository(Item);

export const getItems = async (request: Request, response: Response) => {
  const items = await repository.find();

  return response.json(items);
};

export const createItem = async (request: Request, response: Response) => {
  const item = await repository.save(request.body);

  return response.json(item);
};

export const getItem = async (request: Request, response: Response) => {
  const { id } = request.params;

  const item = await repository.findOneBy({ id: parseInt(id) });

  if (item != null) {
    return response.json(item);
  } else {
    return response.status(404).json({ message: "Item não encontrado" });
  }
};

export const updateItem = async (request: Request, response: Response) => {
  const { id } = request.params;

  const item = await repository.update(id, request.body);

  if (item.affected == 1) {
    const updatedItem = await repository.findOneBy({ id: parseInt(id) });
    return response.json(updatedItem);
  } else {
    return response.status(404).json({ message: "Item não encontrado" });
  }
};

export const deleteItem = async (request: Request, response: Response) => {
  const { id } = request.params;

  const item = await repository.delete(id);

  if (item.affected == 1) {
    return response.status(204);
  } else {
    return response.status(404).json({ message: "Item não encontrado" });
  }
};

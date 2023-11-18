import { Router } from "express";
import {
  getItems,
  createItem,
  getItem,
  updateItem,
  deleteItem,
} from "./controller/ItemController";
const routes = Router();

routes.get("/items", getItems);
routes.post("/items", createItem);
routes.get("/items/:id", getItem);
routes.patch("/items/:id", updateItem);
routes.delete("/items/:id", deleteItem);

export default routes;

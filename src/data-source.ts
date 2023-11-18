import "reflect-metadata";
import { DataSource } from "typeorm";
import { Item } from "./entity/Item";
require("dotenv").config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: true,
  entities: [Item],
  migrations: [],
  subscribers: [],
});

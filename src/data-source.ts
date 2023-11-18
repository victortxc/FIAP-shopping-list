import "reflect-metadata";
import { DataSource } from "typeorm";
import { Item } from "./entity/Item";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: true,
  entities: [Item],
  migrations: [],
  subscribers: [],
});

import { DataSource } from "typeorm";
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['src/entities/**/*.ts'],
    synchronize: true,
    logging: true,
});
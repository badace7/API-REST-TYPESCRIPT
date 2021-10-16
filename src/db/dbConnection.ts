import {Dialect, Sequelize} from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbHost = process.env.DB_HOST as string;
const dbDriver = process.env.DB_DRIVER as Dialect;
const dbPassword = process.env.DB_PASSWORD as string;


const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    dialect: dbDriver, 
    host: dbHost 
});


export const database = {
    sequelize
};
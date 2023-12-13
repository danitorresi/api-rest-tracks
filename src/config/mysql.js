import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config({path: '.env'});

const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;

const sequelize = new Sequelize(
    database,
    username,
    password,
    {
        host,
        dialect: "mysql",
    }
);

const dbConnectMySql = async () => {
    try {
        await sequelize.authenticate();
        console.log("MySql conexión correcta");
    } catch (error) {
        console.log("MySql error de conexión", error);
    }
}

export {
    sequelize,
    dbConnectMySql
}
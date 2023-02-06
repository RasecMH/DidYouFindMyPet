"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config = {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '123456',
    database: 'DID_YOU_FIND_MY_PET',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3002,
    dialect: 'mysql',
    dialectModule: require('mysql2'),
    dialectOptions: {
        timezone: 'Z',
    },
    logging: false,
};
module.exports = config;
//# sourceMappingURL=database.js.map
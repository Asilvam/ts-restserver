"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
let uri = process.env.DATABASE_URL || 'postgres://admin_db:admin_12345678@postgres:5432/postgres_db';
//let uri:string= process.env.DATABASE_URL || 'postgres://admin_db:admin_12345678@127.0.0.1:5432/postgres_db';
const db = new sequelize_1.Sequelize(uri);
exports.default = db;
//# sourceMappingURL=conexion.js.map
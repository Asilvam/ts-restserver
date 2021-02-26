"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//  const db = new Sequelize("postgres_db", "admin_db", "admin_12345678", {
//    host:"localhost",
//    port: 5432,
//    dialect: "postgres",
//  });
let uri = process.env.DATABASE_URL || 'postgres://admin_db:admin_12345678@127.0.0.1:5432/postgres_db';
const db = new sequelize_1.Sequelize(uri);
exports.default = db;
//# sourceMappingURL=conexion.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//  const db = new Sequelize("postgres_db", "admin_db", "admin_12345678", {
//    host:"localhost",
//    port: 5432,
//    dialect: "postgres",
//  });
const db = new sequelize_1.Sequelize('postgres://admin_db:admin_12345678@postgres:5432/postgres_db');
exports.default = db;
//# sourceMappingURL=conexion.js.map
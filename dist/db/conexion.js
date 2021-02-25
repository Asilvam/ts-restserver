"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize(process.env.POSTGRES_DB || "postgres_db", process.env.POSTGRES_USER || "admin_db", "admin_12345678", {
    host: process.env.PSQL_HOST || "localhost",
    port: 5432,
    dialect: "postgres",
});
//const sequelize = new Sequelize('postgres://user:pass@localhost:5432/dbname') // Example for postgres
exports.default = db;
//# sourceMappingURL=conexion.js.map
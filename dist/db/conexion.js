"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('postgres', 'postgres', 'mysecretpassword', {
    host: '192.168.0.13',
    port: 5433,
    dialect: 'postgres',
});
exports.default = db;
//# sourceMappingURL=conexion.js.map
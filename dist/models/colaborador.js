"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conexion_1 = __importDefault(require("../db/conexion"));
const Colaborador = conexion_1.default.define("Colaboradores", {
    nombre: { type: sequelize_1.DataTypes.STRING },
    rut: { type: sequelize_1.DataTypes.STRING, primaryKey: true },
    estado: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: true },
    h1: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false },
    h2: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false },
    h3: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false },
    h4: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false },
    h5: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false },
    h6: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false },
    h7: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false },
    h8: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false },
    h9: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false },
    h10: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false },
});
exports.default = Colaborador;
//# sourceMappingURL=colaborador.js.map
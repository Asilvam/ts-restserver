"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Horario = void 0;
const sequelize_1 = require("sequelize");
const conexion_1 = __importDefault(require("../db/conexion"));
const Colaborador = conexion_1.default.define("Colaboradores", {
    rut: { type: sequelize_1.DataTypes.STRING, primaryKey: true },
    nombre: { type: sequelize_1.DataTypes.STRING },
    estado: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: true },
});
exports.Horario = conexion_1.default.define("Horarios", {
    rut: { type: sequelize_1.DataTypes.STRING },
    cod_jornada: { type: sequelize_1.DataTypes.STRING },
});
exports.default = Colaborador;
//# sourceMappingURL=colaborador.js.map
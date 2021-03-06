"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conexion_1 = __importDefault(require("../db/conexion"));
const Jornada = conexion_1.default.define("Jornada", {
    nombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    cod_jornada: {
        type: sequelize_1.DataTypes.STRING,
    },
    horario: {
        type: sequelize_1.DataTypes.STRING,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true,
    },
});
exports.default = Jornada;
//# sourceMappingURL=jornada.js.map
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteColaborador = exports.postColaborador = exports.getColaborador = exports.getColaboradores = void 0;
const colaborador_1 = __importDefault(require("../models/colaborador"));
// Colaborador.hasMany(Horario, { foreignKey: "rut" });
// Horario.belongsTo(Colaborador, { foreignKey: "rut" });
const getColaboradores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const colaboradores = yield colaborador_1.default.findAll({
        where: { estado: true },
    });
    res.json(colaboradores);
});
exports.getColaboradores = getColaboradores;
const getColaborador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const colaborador = yield colaborador_1.default.findAll({
        where: { id: id },
    });
    if (colaborador.length > 0) {
        res.json(colaborador);
    }
    else {
        res.status(404).json({
            msg: `No existe colaborador con ID ${id}`,
        });
    }
});
exports.getColaborador = getColaborador;
const postColaborador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeRut = yield colaborador_1.default.findOne({
            where: {
                rut: body.rut,
            },
        });
        if (existeRut) {
            return res.status(400).json({
                msg: "Ya existe usuario con rut " + body.rut,
            });
        }
        const colaborador = new colaborador_1.default(body);
        yield colaborador.save();
        res.json(colaborador);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Revisar con Administrador",
        });
    }
});
exports.postColaborador = postColaborador;
const deleteColaborador = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "deleteColaborador",
        id,
    });
};
exports.deleteColaborador = deleteColaborador;
//# sourceMappingURL=colaboradores.js.map
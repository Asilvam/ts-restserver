"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteColaborador = exports.postColaborador = exports.getColaborador = exports.getColaboradores = void 0;
const colaborador_1 = __importStar(require("../models/colaborador"));
colaborador_1.default.hasMany(colaborador_1.Horario, { foreignKey: "rut" });
colaborador_1.Horario.belongsTo(colaborador_1.default, { foreignKey: "rut" });
const getColaboradores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const colaboradores = yield colaborador_1.default.findAll({
        where: { estado: true },
        include: [colaborador_1.Horario],
    });
    res.json(colaboradores);
});
exports.getColaboradores = getColaboradores;
const getColaborador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const colaborador = yield colaborador_1.default.findAll({
        where: { id: id },
        include: [colaborador_1.Horario],
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
    const rut = req.body.rut;
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
        const horario = new colaborador_1.Horario();
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
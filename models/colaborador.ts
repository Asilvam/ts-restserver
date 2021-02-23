import { DataTypes } from "sequelize";
import db from "../db/conexion";

const Colaborador = db.define("Colaboradores", {
  rut: { type: DataTypes.STRING , primaryKey:true},
  nombre: { type: DataTypes.STRING },
  estado: { type: DataTypes.BOOLEAN, defaultValue: true },
});

export const Horario = db.define("Horarios", {
  rut: { type: DataTypes.STRING },
  cod_jornada: { type: DataTypes.STRING },
});

export default Colaborador;

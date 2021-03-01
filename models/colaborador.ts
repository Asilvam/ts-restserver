import { DataTypes } from "sequelize";
import db from "../db/conexion";

const Colaborador = db.define("Colaboradores", {
  nombre: { type: DataTypes.STRING },
  rut: { type: DataTypes.STRING , primaryKey:true},
  estado: { type: DataTypes.BOOLEAN, defaultValue: true },
  h1: { type: DataTypes.BOOLEAN, defaultValue: false },
  h2: { type: DataTypes.BOOLEAN, defaultValue: false },
  h3: { type: DataTypes.BOOLEAN, defaultValue: false },
  h4: { type: DataTypes.BOOLEAN, defaultValue: false },
  h5: { type: DataTypes.BOOLEAN, defaultValue: false },
  h6: { type: DataTypes.BOOLEAN, defaultValue: false },
  h7: { type: DataTypes.BOOLEAN, defaultValue: false },
  h8: { type: DataTypes.BOOLEAN, defaultValue: false },
  h9: { type: DataTypes.BOOLEAN, defaultValue: false },
  h10: { type: DataTypes.BOOLEAN, defaultValue: false },
});

export default Colaborador;

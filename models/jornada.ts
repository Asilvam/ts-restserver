import { DataTypes } from "sequelize";
import db from "../db/conexion";

const Jornada = db.define("Jornada",{
    nombre: {
        type: DataTypes.STRING,
      },
      estado: {
        type: DataTypes.BOOLEAN, defaultValue:true,
      }, 
});

export default Jornada;
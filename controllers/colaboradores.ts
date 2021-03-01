import { Request, Response } from "express";
import Colaborador from "../models/colaborador";

// Colaborador.hasMany(Horario, { foreignKey: "rut" });
// Horario.belongsTo(Colaborador, { foreignKey: "rut" });

export const getColaboradores = async (req: Request, res: Response) => {
  const colaboradores = await Colaborador.findAll({
    where: { estado: true },
  });
  res.json(colaboradores);
};

export const getColaborador = async (req: Request, res: Response) => {
  const { id } = req.params;
  const colaborador = await Colaborador.findAll({
    where: { id: id },
  });
  if (colaborador.length > 0) {
    res.json(colaborador);
  } else {
    res.status(404).json({
      msg: `No existe colaborador con ID ${id}`,
    });
  }
};

export const postColaborador = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const existeRut = await Colaborador.findOne({
      where: {
        rut: body.rut,
      },
    });
    if (existeRut) {
      return res.status(400).json({
        msg: "Ya existe usuario con rut " + body.rut,
      });
    }
    const colaborador = new Colaborador(body);
    await colaborador.save();
    res.json(colaborador);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Revisar con Administrador",
    });
  }
};

export const deleteColaborador = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    msg: "deleteColaborador",
    id,
  });
};

import express, { Application } from "express";
import cors from "cors";
import userRoutes from "../routes/usuario";
import colaboradorRoutes from "../routes/colaborador";
import db from "../db/conexion";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    usuarios: "/api/usuarios",
    colaboradores: "/api/colaboradores",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";
    this.dbConexion();
    this.middlewares();
    this.routes();
  }

  async dbConexion() {
    try {
      await db.authenticate();
      console.log("Database online");
    } catch (error) {
      throw new Error(error);
    }
  }

  middlewares() {
    this.app.use(cors());

    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.apiPaths.usuarios, userRoutes);
    this.app.use(this.apiPaths.colaboradores, colaboradorRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor en Puerto " + this.port);
    });
  }
}

export default Server;

import { Sequelize } from "sequelize";

const db = new Sequelize(process.env.POSTGRES_DB||"postgres_db", process.env.POSTGRES_USER ||"admin_db", "admin_12345678", {
  host:process.env.PSQL_HOST || "localhost",
  port: 5432,
  dialect: "postgres",
});

export default db;

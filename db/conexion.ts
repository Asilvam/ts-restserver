import { Sequelize } from "sequelize";

//  const db = new Sequelize("postgres_db", "admin_db", "admin_12345678", {
//    host:"localhost",
//    port: 5432,
//    dialect: "postgres",
//  });
const db = new Sequelize('postgres://admin_db:admin_12345678@postgres:5432/postgres_db')
export default db;

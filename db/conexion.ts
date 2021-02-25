import { Sequelize } from "sequelize";

 const db = new Sequelize("postgres_db", "admin_db", "admin_12345678", {
   host:"postgres",
   port: 5432,
   dialect: "postgres",
 });

//const sequelize = new Sequelize('postgres://user:pass@localhost:5432/dbname') // Example for postgres

export default db;

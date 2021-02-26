import { Sequelize } from "sequelize";

//  const db = new Sequelize("postgres_db", "admin_db", "admin_12345678", {
//    host:"localhost",
//    port: 5432,
//    dialect: "postgres",
//  });
let uri:string= process.env.DATABASE_URL || 'postgres://admin_db:admin_12345678@127.0.0.1:5432/postgres_db';
const db= new Sequelize(uri);
export default db;

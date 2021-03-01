import { Sequelize } from "sequelize";
//let uri:string= process.env.DATABASE_URL || 'postgres://admin_db:admin_12345678@postgres:5432/postgres_db';
let uri:string= process.env.DATABASE_URL || 'postgres://admin_db:admin_12345678@127.0.0.1:5432/postgres_db';
const db= new Sequelize(uri);
export default db;

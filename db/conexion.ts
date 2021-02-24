import {Sequelize} from 'sequelize';

const db= new Sequelize('postgres_db','admin_db','admin_12345678',{
    host:'localhost',
    port:5432,
    dialect:'postgres',
})

export default db;
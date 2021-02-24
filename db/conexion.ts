import {Sequelize} from 'sequelize';

const db= new Sequelize('POSTGRES_DB','POSTGRES_USER','POSTGRES_PASSWORD',{
    host:'localhost',
    port:5432,
    dialect:'postgres',
})

export default db;
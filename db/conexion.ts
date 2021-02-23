import {Sequelize} from 'sequelize';

const db= new Sequelize('postgres','postgres','mysecretpassword',{
    host:'100.65.44.79',
    port:5433,
    dialect:'postgres',
})

export default db;
import {Sequelize} from 'sequelize';

const db= new Sequelize('postgres','postgres','mysecretpassword',{
    host:'192.168.0.13',
    port:5433,
    dialect:'postgres',
})

export default db;
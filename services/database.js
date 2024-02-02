import Sequelize from 'sequelize';

const sequelize = new Sequelize(
    "gadgetdb",//database
    "root",//database username
    "6000million$Y",//database password
    {
        dialect: 'mysql',
        host:'localhost'
    }
)










export default sequelize;
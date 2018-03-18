const { get } = require('lodash');
const appConfig = require('rc')('env');
const Sequelize = require('sequelize');

const config = {
    user: get(appConfig, 'PGUSER', 'postgres'),
    password: get(appConfig, 'PGPASSWORD', '0NLIN3-ex4m'),
    database: get(appConfig, 'PGDATABASE', 'postgres'),
    port: 5432,
    idleTimeoutMillis: 1000, // close idle clients after 1 second
    connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
}

const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    },
    define: {
        last_updated_by: Sequelize.STRING
    }
});

module.exports = sequelize;
const mysql = require('mysql2/promise');
const {DB_HOST, DB_USER, DB_PASSWORD, DB_NAME} = require('../configs/db.config');
const { Sequelize, DataTypes } = require('sequelize');

// async function query(sql, params) {
//   const connection = await mysql.createConnection(dbConfig);
//   const [results, ] = await connection.execute(sql, params);

//   return results;
// }

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  logging: false
});


module.exports = {
  db
}


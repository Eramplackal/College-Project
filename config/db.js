// db.js
const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'firstapp',
});

const db = {
    query: (sql, params) => new Promise((resolve, reject) => {
        pool.query(sql, params, (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    })
};

module.exports = db;
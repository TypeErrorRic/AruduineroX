const mysql = require('mysql');
const { promisify } = require('util')

const { database } = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if(err){
        if(err.code ===  'PROTOCOL_CONECTION_LOST'){
            console.error('La conexión se Perdio');
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('DATABASE HAS TO MANY CONNECTIONS');
        }
        if(err.code === 'ECONNEREFUSED'){
            console.error('DATABASE WAS REFUSED');
        }
    }
    if (connection) {
        connection.release();
        console.log('DB is Connected');
    }
});

pool.query = promisify(pool.query)

module.exports = pool;
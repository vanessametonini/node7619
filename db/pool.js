const mysql = require('mysql')

module.exports = {
    getConnection: function(){

        const conexao = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'casadocodigo',
            port: process.env.DB_PORT
        })
        return conexao
    }
}
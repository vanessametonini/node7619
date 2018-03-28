const pool = require('../db/pool')

function LivrosDAO() {
    this.conexao = pool.getConnection()
}

LivrosDAO.prototype.listar =  function(callback) {
    this.conexao.query('SELECT * FROM livros', callback)    
}

LivrosDAO.prototype.cadastrar = function (callback) {
    //conexao.query('', callback)
}

module.exports = LivrosDAO
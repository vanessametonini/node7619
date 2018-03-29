const pool = require('../db/pool')

function LivrosDAO() {

    //const this = LivrosDAO.prototype
    
    this._conexao = pool.getConnection()
}

LivrosDAO.prototype.listar =  function(callback) {
    this._conexao.query('SELECT * FROM livros', callback)    
}

LivrosDAO.prototype.cadastrar = function (livro, callback) {
    this._conexao.query('INSERT INTO Livros SET ?', livro, callback)
}

module.exports = LivrosDAO
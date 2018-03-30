const pool = require('../db/pool')

function LivrosDAO() {
    //const this = LivrosDAO.prototype
    this._conexao = pool.getConnection()
}

LivrosDAO.prototype.listar =  function(callback) {
    this._conexao.query('SELECT * FROM livros', callback)    
}

LivrosDAO.prototype.cadastrar = function (livro) {
    return new Promise((resolve, reject) => {
        this._conexao.query(
            'INSERT INTO Livros SET ?'
            , livro
            , erro => erro ? reject([erro]) : resolve()
        )
    })
}

module.exports = LivrosDAO
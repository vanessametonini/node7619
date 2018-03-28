const LivrosDAO = require('../db/livrosDAO')

module.exports = servidor => {

    servidor.get('/', function (request, response) {

        livrosService = new LivrosDAO()

        livrosService.listar(function (erro, resultado) {

            if (erro) {
                console.log('deu ruim')
                response.render('erros/500.ejs', {
                    mensagem: erro
                })
            }
            else {
                response.render('produtos/lista.ejs', {
                    livros: resultado || []
                })
            }

        })        
        
    })
}
const LivrosDAO = require('../db/livrosDAO')
const queryString = require('query-string')

module.exports = servidor => {

    servidor.get('/', function (request, response) {

        let livrosService = new LivrosDAO()

        livrosService.listar(function (erro, resultado) {

            if (erro) {
                response.render('erros/500.ejs', {
                    msgErro: erro
                })
            }
            else {
                response.render('produtos/lista.ejs', {
                    livros: resultado || [],
                    msgErro: erro
                })
            }

        })        
        
    })

    servidor.get('/produtos/cadastra', function(request, response) {

        response.render('produtos/form.ejs', {
            validationErrors: []
        })
    })

    servidor.post('/produtos', function (request, response) {
        
        let dadosString = ''

        request.on('data', function(chunk){
            dadosString += chunk.toString()
        })

        request.on('end', function(){
            const livro = queryString.parse(dadosString)

            let livrosService = new LivrosDAO()

            livrosService.cadastrar(livro, function() {
                response.redirect('/')
            })

        })
    })
}
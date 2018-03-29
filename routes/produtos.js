module.exports = servidor => {

    servidor.get('/', function (request, response, next) {

        request.livrosService.listar(function (erro, resultado) {

            if (erro) next(erro)
            else {
                response.format({
                    html: () => {
                        response.render('produtos/lista.ejs', {
                            livros: resultado || [],
                            msgErro: erro
                        })
                    }
                    ,json: () => response.send(resultado)
                })
            }

        })        
    })

    servidor.get('/produtos/cadastra', function(request, response) {

        response.render('produtos/form.ejs', {
            validationErrors: []
        })
    })

    servidor.post('/produtos', function (request, response, next) {

        livro = request.body

        request.livrosService.cadastrar(livro, function(erro) {
            
            erro 
            ? next(erro) 
            : response.redirect('/')
            
        })
        
    })
}
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
            ,livro: {}
        })
    })

    servidor.post('/produtos', function (request, response, next) {

        let livro = request.body

        request.assert('titulo', "Titulo vazio").notEmpty()
        request.assert('preco', "Preço vazio").notEmpty()
        request.assert('preco', "Preço deve ser um número").isNumeric()

        request.asyncValidationErrors().then(() => {
            request.livrosService.cadastrar(
                livro
                , erro => erro ? next(erro) : response.redirect('/')
            )
        })
        .catch(erros => {
            response.render('produtos/form.ejs', {
                validationErrors: erros
                , livro: livro
            })
        })  
        .catch(next)
    })
}
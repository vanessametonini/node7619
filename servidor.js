const express = require('express'),
      server = express(),
      LivrosDAO = require('./db/livrosDAO')
    
server.set('view engine', 'ejs')

server.use(express.urlencoded())
server.use(express.static('public'))

server.use(function(request, response, next){
    request.livrosService = new LivrosDAO()    
    next()
})
require('./routes/produtos')(server)

//middleware para tratar os erros Cap8
//https://github.com/ericelliott/express-error-handler
server.use(function (erro, request, response, next) {
    response.render('erros/500', {erro})
})

server.use(function (request, response, next) {
    response.render('erros/500', { erro: 'Erro 404' })
})

module.exports = server

//next() vai pro use de 3 parametros
//next(algo) vai pro use de 4 parametros
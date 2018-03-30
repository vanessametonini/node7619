require('dotenv').config()

const express = require('express'),
      server = express(),
      LivrosDAO = require('./db/livrosDAO'),
      expressValidator = require('express-validator')
    
server.set('view engine', 'ejs')

server.use(express.urlencoded())
server.use(express.json())
server.use(express.static('public'))
server.use(expressValidator())

server.use(function(request, response, next){
    request.livrosService = new LivrosDAO()    
    next()
})
require('./routes/produtos')(server)

//middleware para tratar os erros Cap8
//https://github.com/ericelliott/express-error-handler
server.use(function (erro, request, response, next) {
    response.format({
        default: () => response.send({erro:erro})
        ,html: () => response.render('erros/500', { erro })
        ,json: () => response.send({erro:erro})
    })
})

server.use(function (request, response, next) {
    response.format({
        default: () => response.send({ erro: 'Erro 404' })
        ,html: () => response.render('erros/500', { erro: 'Erro 404' })
        ,json: () => response.send({ erro: 'Erro 404' })
    })
})

module.exports = server

//next() vai pro use de 3 parametros
//next(algo) vai pro use de 4 parametros
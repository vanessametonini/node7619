const assert = require('assert'),
    http = require('http'), //nativo do node
    request = require('supertest'), //foca em testar requisicoes http
    servidor = require('../../servidor')

// O Describe e o it server para você modularizar seus testes
describe('# API de Produtos', () => {

    it(
        'Home com Produtos HTML'
        , done => {
            request(servidor)
                .get('/')
                .expect('Content-Type', /html/)
                .expect(200)
                .end(done)
        }
    )

    /*
    it(
        'Home com Produtos JSON'
        , done => {
            request(servidor)
                .get('/')
                .expect('Content-Type', /json/)
                .expect(200, done)
                .end(done)
        }
    )
    */
})
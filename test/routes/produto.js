const assert = require('assert'),
      http = require('http') //nativo do node

// O Describe e o it server para você modularizar seus testes
describe('# API de Produtos', function () {
    
    const opcoes = {
        hostname: 'localhost',
        port: '3000',
        path: '/',
    }

    it(
        'Home com Produtos HTML'
        , done => {
            //done é para testes assíncronos    
            opcoes.headers = {
                'Accept': 'text/html'
            }

            http.get(
                opcoes
                , response => {
                    assert.equal(response.headers['content-type'], 'text/html; charset=utf-8')
                    done()  
                }
            )
            
        }
    )

    it(
        'Home com Produtos JSON'
        , done => {
            opcoes.headers = {
                'Accept': 'application/json'
            }

            http.get(
                opcoes
                , response => {
                    assert.equal(response.headers['content-type'], 'application/json; charset=utf-8')
                    done()
                }
            )

        }
    )
})

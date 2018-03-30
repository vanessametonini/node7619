const assert = require('assert')
const http = require('http') //nativo do node


describe('# API de Produtos', function () {
    it(
        'Home com Produtos'
        , () => {
        
            http.get(
                'http://localhost:3000'
                , response => assert.equal(response.headers['Content-Type'], 'application/json')
            )
            
        }
    )
})

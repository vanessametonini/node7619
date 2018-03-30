const assert = require('assert')

function soma (n1,n2) {
    return n1+n2
}

describe('# Modulo de Soma', function () {
    it('2 + 2 deve ser 4', () => assert.deepEqual(soma(2,2), 4, "deve retornar 4"))

    it('2 + 3 deve ser 5', () => assert.equal(soma(2,3), 5, "deve retornar 5"))

})

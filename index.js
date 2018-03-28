const servidor = require('./servidor')()

servidor.listen(3000, function () {
    console.log('servidor rodando na porta 3000')
})
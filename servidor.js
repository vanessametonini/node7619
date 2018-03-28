const express = require('express')

module.exports = function(){
    let app = express()
    
    app.use(express.static('public'))
    app.set('view engine', 'ejs')
    
    require('./routes/produtos')(app)

    return app
    
}
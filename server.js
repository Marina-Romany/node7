const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true}))
app.set('view engine' , 'ejs')
app.set('views' , 'views')

require('./startup/db')()

require('./routes')(app)

app.listen(4000)
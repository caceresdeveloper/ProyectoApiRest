const express = require('express')
const cors = require('cors')

const app = express();

//conectar la base de datos
require('./drivers/connect-db')

//middlewares
app.use(express.json())
app.use(cors())

//setters
app.set('PORT',process.env.PORT || 3000)

app.use('/products', require('./routes/products'))
app.use('/users', require('./routes/users'))

app.listen(app.get('PORT'),()=>console.log(`Sever Listen to Port ${app.get('PORT')}`))

module.exports = app;

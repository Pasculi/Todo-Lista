require('./database')
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

app.set('Port', 8000)

app.use(morgan('dev'))
app.use(express.urlencoded({ extended:true }))
app.use(express.json())
app.use(cors({ origen:'*'}))

const usersRoutes = require('./routes/User.routes');
require('./database');

usersRoutes(app);

app.listen(app.get('Port'), () => {
    console.log('Servidor escuchando por el puerto',app.get('Port'))
})


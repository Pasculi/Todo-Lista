//creamos la constante e importamos express
const express = require('express');
//creamos la constante app y le asignamos express
const app = express();//creamos la constante app y le asignamos express
const port = 8080; //puerto en el que va a correr la aplicacion

const proyectoRoutes = require('./server/routes/proyecto');//importamos las rutas
require('./server/config/mongoose.config');//Solicitamos la configuración de mongoose en el archivo mongoose.config.js

app.use(express.json());//le decimos a express que use json
app.use(express.urlencoded({extended: true}));//le decimos a express que use urlencoded

proyectoRoutes(app);//llamamos a las rutas

app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`);//mensaje de que el servidor esta corriendo
});
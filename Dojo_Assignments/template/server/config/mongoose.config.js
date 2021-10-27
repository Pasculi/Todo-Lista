const mongoose = require('mongoose');//importamos mongoose

mongoose.connect('mongodb://localhost/proyecto_db', {//conectamsos a la base de datos
    useNewUrlParser: true,//para que no nos muestre los warnings
    useUnifiedTopology: true//para que no nos muestre los warnings
}).then(() => {
    console.log('Conectado a la base de datos');//si se conecta nos muestra este mensaje
}).catch((error) => {
    console.log(error);
});

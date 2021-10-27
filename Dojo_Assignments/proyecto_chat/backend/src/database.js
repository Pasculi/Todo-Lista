const mongoose = require('mongoose')
URI = ('mongodb://localhost/api')

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Conexión establecida a la base de datos'))
    .catch(err => console.log('Hay un error al conectar a la base de datos', err))

module.exports = mongoose
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/manager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Estableciendo conexión con la base de datos"))
    .catch(err => console.log("Algo ocurrio cuando se estaba conectando a la base de datos", err));


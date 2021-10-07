const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/name_of_your_DB", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Estableciendo conexión a la base de datos"))
	.catch(err => console.log("Algo salió mal cuando se estaba conectando a la base dee datos", err));
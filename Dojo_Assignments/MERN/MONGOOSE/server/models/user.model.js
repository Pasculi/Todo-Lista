const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	fullName:{ 
		type:String,
	required: [true, 'Debe ingresar un nombre'],
	minlength: [2, 'El nombre no puede tener menos de 2 caracteres']

},
stack:{ 
	type:String,
	required: [true, 'Debe ingresar un satck al estudiante'],
},
	age: {
		type: Number,
		required: [true, 'Debe ingresar la edad al estudiante'],
	},
	isActive: {
		type:Boolean,
		default:false

	},
	assignamentsFinished:{ 
		typetype:Array, 
		default:false
	},

}, {timestamps: true}

);

const User = mongoose.model("User", UserSchema);
UserSchema.plugin(uniqValidator);

module.exports = User;
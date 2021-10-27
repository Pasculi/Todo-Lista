const mongoose = require('mongoose');
const ProductosSchema = new mongoose.Schema({
    titulo: { type: String },
    precio: { type: String },
    description: { type: String }
}, { timestamps: true });
module.exports.Producto = mongoose.model('Producto', ProductosSchema);

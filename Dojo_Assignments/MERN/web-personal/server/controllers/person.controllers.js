module.exports.index = (request, response) => {
    response.json({
        message: "Hola Mundo"
    });
}
// The method below is new
module.exports.createProducto = (request, response) => {
    const { titulo, precio, description } = request.body;
    Producto.create({
        titulo,
        precio,
        description
    })
        .then(producto => response.json(producto))
        .catch(err => response.json(err));
}
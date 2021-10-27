const PersonController = require('../controllers/person.controllers');
module.exports = function(app){
    app.get('/manager', PersonController.index);
    app.post('/manager/productos', PersonController.createProducto);
}
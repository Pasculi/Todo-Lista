const { createUser, getAllUsers, getOneUser, deleteOneUser, updateOneUser } = require('../controllers/User.controller');

module.exports = (app) => {
    app.post('/api/users', createUser);
    app.get('/api/users', getAllUsers);
    app.get('/api/users/:id', getOneUser);
    app.delete('/api/users/:id', deleteOneUser);
    app.put('/api/users/:id', updateOneUser);
}
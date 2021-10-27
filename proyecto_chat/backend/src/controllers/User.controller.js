//const bcrypt= require('bcryptjs');
//const jwt= require('jsonwebtoken');

const User = require('../models/User.model');


module.exports.login = async (req, res) =>{
    const {email, password} = req.body
    const User = await User.findOne({email:email})
    if(!User) {
        return res.json({
            email: 'Email incorrecto'
        })
    }
}


module.exports.createUser = (req, res) => {
    const { body } = req;
    User.create(body)
        .then(user => res.json({ user }) )
        .catch(err => {
            if(err?.name === 'ValidationError') {
                console.error(Object.values(err.errors).map(val => val.message))
                const errors = Object.values(err.errors).map(val => val.message);
                return res.status(500).json({errors: errors})

            }
            console.log("🚀 ~ file: user.controller.js ~ line 8 ~ err", err)
        })
};

module.exports.getAllUsers = async (req, res) => {
    try {
        const usersList = await User.find();
        return res.json({ usersList });

    } catch(err) {
        return res.status(500).json({error: err});
    }
}

module.exports.getOneUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        return res.json({ user });

    } catch(err) {
        return res.status(500).json({error: err});
    }
}

module.exports.deleteOneUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndRemove({_id:id});
        return res.json({ user });

    } catch(err) {
        return res.status(500).json({error: err});
    }
}


module.exports.updateOneUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate({_id:id}, req.body, {new: true});
        return res.json({ user });

    } catch(err) {
        return res.status(500).json({error: err});
    }
}
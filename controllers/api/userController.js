const User = require('../../models/userModel')
const bcrypt = require ('bcrypt')
const jwt = require ('jsonwebtoken')


exports.auth = async (req, res, next) => {
    try{
        const token = require.header('Authorization').replace('Bearer ', '')
        const data = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET)
        const user = await User.findOne({_id:data._id})
        if(!user){throw new Error()} req.user = user
        next()
    }
    catch (error) {
        res.status(401).send('not authorized')
    }
}

exports.indexUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    }
    catch (error) {
        res.status(401).send({message: error.message})
    }
}

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        const token = await User.generateAuthToken()
        res.json({user, token})
    }
    catch (error){
        res.status(401).send({message: error.message})
    }
}
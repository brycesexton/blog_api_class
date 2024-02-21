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

exports.loginUser = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email})
        if(!user || !await bcrypt.compare(req.body.password, user.password)) {
            res.status(400).send('invalid login credentials')
        }
        else {
            const token = await User.generateAuthToken()
            res.json({user, token})
        }
    }
    catch(error) {
        res.status(401).send({message: error.message})
    }
}

exports.indexUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(userItem)
    }
    catch(error) {
        res.status(401).send({message: error.message})
    }
}

exports.updateUser = async (req, res) => {
    try {
        const updates = Object.keys(req.body)
        const user = await User.findOne({_id:req.params.id})
        updates.forEach(update = user[update] = req.body[update])
        await user.save()
        res.json({user})
    }
    catch(error) {
        res.status(401).send({message: error.message})
    }
}

exports.deleteUser = async (req, res) => {
    try {
        await req.user.deleteOne()
        res.json ({message: 'user deleted'})
    }
    catch(error) {
        res.status(401).send({message: error.message})
    }
}
require('dotenv').config()
const jwt = require('jsonwebtoken')
const User = require('../../models/userModel')
const Blog = require('../../models/blogModel')
const bcrypt = require('bcrypt')
const crypto = require('crypto')

// signUp
const signUp = async (req, res, next) => {
    try {
        const user = await User.create(req.body)
        const blog = await Blog.findOne({ id: res.locals.data.id })
        const token = createJWT(user)
        res.locals.data.user = user
        res.locals.data.token = token
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

// login
const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if(!user) throw new Error('user not found, email was invalid')
        const password = crypto.createHmac('sha256', process.env.SECRET).update(req.body.password).digest('hex').split('').reverse().join('')
        const match = await bcrypt.compare(password, user.password)
        if(!match) throw new Error('Password did not match')
        res.locals.data.user = user
        res.locals.data.token = createJWT(user)
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

// getBlogsByUser
const getBlogsByUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: res.locals.data.email }).populate('blogs').sort('blogs.createdAt').exec()
        const blogs = user.blogs
        res.locals.data.blogs = blogs
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const respondWithToken = (req, res) => {
    res.json(res.locals.data.token)
}

const respondWithUser = (req, res) => {
    res.json(res.locals.data.user)
}

const respondWithBlogs = (req, res) => {
    res.json(res.locals.data.blogs)
}

module.exports = {
    signUp,
    login,
    getBlogsByUser,
    respondWithToken,
    respondWithUser,
    respondWithBlogs
}

// Helper function
function createJWT(user){
    return jwt.sign({ user }, process.env.SECRET, {expiresIn: '48h' })
}
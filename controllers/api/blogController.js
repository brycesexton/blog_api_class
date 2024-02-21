const Blog = require('../../models/blogModel')
const User = require('../../models/userModel')

module.exports = {
    create,
    index,
    show,
    update,
    destroy
}

async function create(req, res, next){
    try {
        const blog = await Blog.create(req.body)
        const user = await User.findOne({email: res.locals.data.email})
        res.locals.data.blog = blog
        blog.author = user._id
        user.blogs.addToSet(blog)
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

async function index(req, res) {
    try {
        const foundBlogs = await Blog.find(req.body)
        res.status(200).json(foundBlogs)
      } catch (error) {
        res.status(400).json({ msg: error.message })
      }
}

async function show(req ,res,next) {
    try {
        const blog = await Blog.findById(req.params.id)
        res.locals.data.blog = blog
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

async function update(req ,res, next) {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.locals.data.blog = blog
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

async function destroy(req ,res, next) {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id)
        res.locals.data.blog = blog
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
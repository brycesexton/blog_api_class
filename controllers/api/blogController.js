require('dotenv').config()
const User = require('../../models/userModel')
const Blog = require('../../models/blogModel')

// destroy blog
const destroyBlog = async (req, res, next) => {
    try {
        const deletedBookmark = await Bookmark.findByIdAndDelete(req.params.id)
        res.locals.data.blog = deletedBookmark
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

// create blog
const createBlog = async (req, res, next) => {
    try {
        const createdBlog = await Blog.create(req.body)
        const user = await User.findOne({ email: res.locals.data.email })
        user.blogs.addToSet(createdBlog)
        createdBlog.author = user._id
        await user.save()
        res.locals.data.blog = createdBlog
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

// update blog
const updateBlog = async (req, res, next) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.locals.data.blog = updatedBlog
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const respondWithBlog = (req, res) => {
    res.json(res.locals.data.blog)
}

module.exports = {
    destroyBlog,
    updateBlog,
    createBlog,
    respondWithBlog
}
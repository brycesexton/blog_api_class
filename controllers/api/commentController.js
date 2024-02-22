require('dotenv').config()
const Blog = require('../../models/blogModel')
const Comment = require('../../models/commentModel')

// destroy comment
const destroyComment = async (req, res, next) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.id)
        res.locals.data.comment = deletedComment
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

// create comment
const createComment = async (req, res, next) => {
    try {
        const createdComment = await Comment.create(req.body)
        const blog = await Blog.findOne({ _id: req.params.blogId })
        blog.comments.push(createdComment._id)
        await blog.save()
        res.locals.data.comment = createdComment
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

// update comment
const updateComment = async (req, res, next) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.locals.data.comment = updatedComment
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const respondWithComment = (req, res) => {
    res.json(res.locals.data.comment)
}

module.exports = {
    destroyComment,
    updateComment,
    createComment,
    respondWithComment
}
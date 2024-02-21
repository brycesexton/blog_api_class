const { model, Schema } = require('mongoose')

const blogSchema = new Schema ({
    title: { required: true, type: String },
    body: { required: true, type: String },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    author: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true
})

const Blog = model('Blog', blogSchema)

module.exports = Blog
const { model, Schema } = require('mongoose')

const blogSchema = new Schema ({
    title: { type: String, required: true },
    body: { type: String, required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    author: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true
})

module.exports = model('Blog', blogSchema)
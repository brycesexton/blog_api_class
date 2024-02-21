const { model, Schema } = require('mongoose')

const commentSchema = new Schema ({
    authorName: { type: String, required: true },
    body: { type: String, required: true },
}, {
    timestamps: true
})

module.exports = model('Comment', commentSchema)
const { model, Schema } = require('mongoose')

const commentSchema = new Schema ({
    comment: { required: true, type: String},
    author: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true
})

const Comment = model('Comment', commentSchema)

module.exports = Comment
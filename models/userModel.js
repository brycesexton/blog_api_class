const { model, Schema } = require('mongoose')


const userSchema = new Schema ({
    name: { required: true, type: String },
    email: { required: true, type: String },
    password: { required: true, type: String },
    posts: [{ type: Schema.Types.ObjectId, ref: 'Blog' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, {
    timestamps: true
})

const User = model('User', userSchema)

module.exports = User
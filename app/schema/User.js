const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    username: {
        type: String,
        required: true,
    },
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String,
    },
    role: {
        type: String,
        default: 'User',
    },
})

module.exports = mongoose.model('user', User)

const db = require('../../schema/models')
const bcrypt = require('bcryptjs')
const _ = require('lodash')
const salt = 10

module.exports = async (req, res) => {
    const { password } = req.body
    bcrypt.hash(password, salt, function (err, hash) {
        const userForm = { ...req.body, password: hash }
        const { username } = req.body

        db.user
            .create({
                ...userForm,
                email: _.toLower(userForm.email),
                lowerUsername: _.toLower(username),
            })
            .then(() => {
                console.log('User signed up successfully!')
            })
            .catch(() => console.log('we cant create your profile bitch'))
    })

    res.send({ message: `User ${req.body.username} created!`, exit: 0 })
}

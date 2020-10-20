const db = require('../schema/models')
const bcrypt = require('bcrypt')
const salt = 10

module.exports = async (req, res) => {
    const { password } = req.body
    bcrypt.hash(password, salt, function (err, hash) {
        const userForm = { ...req.body, password: hash }

        db.user
            .create({ ...userForm })
            .then(() => {
                console.log('User signed up successfully!')
            })
            .catch(() => console.log('we cant create your profile bitch'))
    })

    res.send({ Message: `User ${req.body.username} created!`, exit: 0 })
}

const db = require('../schema/models')

module.exports = async (req, res) => {
    db.user
        .create({ ...req.body })
        .then(() => {
            console.log('User signed up successfully!')
        })
        .catch(() => console.log('we cant create your profile bitch'))

    res.send({ Message: `User ${req.body.username} created!`, exit: 0 })
}

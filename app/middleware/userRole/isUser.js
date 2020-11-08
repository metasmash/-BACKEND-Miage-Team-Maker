const db = require('../../schema/models')

module.exports = async (req, res, next) => {
    const { token } = req.body

    const role = db.user.findOne({ token }).then((user) => user.role)

    if (role === 'Admin' || 'Moderator' || 'User') {
        next()
    } else {
        res.status(401).send('sorry, you are Banned from the service.')
    }
}

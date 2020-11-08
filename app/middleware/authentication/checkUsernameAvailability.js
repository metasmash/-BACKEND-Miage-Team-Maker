const db = require('../../schema/models')
const _ = require('lodash')

module.exports = async (req, res, next) => {
    const { username } = req.body
    const userExists = !!(
        await db.user.find({ lowerUsername: _.toLower(username) })
    ).length

    if (userExists) {
        console.log('Username already exists')
        res.status(403).json({ error: 403, message: 'User already exists!' })
    } else {
        next()
    }
}

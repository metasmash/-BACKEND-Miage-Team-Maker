const db = require('../../schema/models')
const _ = require('lodash')

module.exports = async (req, res, next) => {
    const { username } = req.body
    const lowerUsername = _.toLower(username)

    const userExists = !!(await db.user.find({ lowerUsername })).length

    if (userExists) {
        next()
    } else {
        console.log("Username doesn't exists")
        res.json({
            Error: 400,
            message: 'User does not exists or password is wrong',
        })
    }
}

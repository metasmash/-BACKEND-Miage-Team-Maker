const db = require('../../schema/models')
const _ = require('lodash')

module.exports = async (req, res, next) => {
    const email = _.toLower(req.body.email)

    const userExists = !!(await db.user.find({ email })).length

    if (userExists) {
        console.log('Email already exists')
        res.status(403).json({ message: 'Email already exists!' })
    } else {
        next()
    }
}

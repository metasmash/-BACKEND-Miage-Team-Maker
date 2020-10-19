const db = require('../schema/models')

module.exports = async (req, res, next) => {
    const { username } = req.body

    const userExists = !!(await db.user.find({ username: username })).length

    if (userExists) {
        console.log('Username already exists')
        res.json({ Error: 400, message: 'User already exists!' })
    } else {
        next()
    }
}

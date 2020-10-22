const db = require('../../schema/models')

module.exports = async (req, res, next) => {
    const { username } = req.body

    const userExists = !!(await db.user.find({ username: username })).length

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

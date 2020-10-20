const db = require('../schema/models')

module.exports = async (req, res, next) => {
    const { email } = req.body

    const userExists = !!(await db.user.find({ email: email })).length

    if (userExists) {
        console.log('Email already exists')
        res.json({ Error: 400, message: 'Email already exists!' })
    } else {
        next()
    }
}

const db = require('../../schema/models')

module.exports = async (req, res, next) => {
    const { token } = req.body

    const { expectedRole } = await db.user.findOne({ token })

    if (expectedRole === 'Admin') {
        next()
    } else {
        res.status(401).send('sorry, you are not Admin.')
    }
}

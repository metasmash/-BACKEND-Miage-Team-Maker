const db = require('../../schema/models')

module.exports = async (req, res, next) => {
    const { token } = req.body

    const { expectedRole } = await db.user.findOne({ token })

    if (expectedRole === 'Admin' || 'Moderator') {
        next()
    } else {
        throw Error(`Sorry, you're not admin`)
    }
}

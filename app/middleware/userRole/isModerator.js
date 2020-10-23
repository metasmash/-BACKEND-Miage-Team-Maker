const jwt = require('jsonwebtoken')
const db = require('../../schema/models')

module.exports = async (req, res, next) => {
    const { token } = req.params

    const { role } = await db.user.findOne({ token })

    await jwt.verify(token, 'shhhhh', async (err, decoded) => {
        try {
            if (role === 'Mod' || 'Admin') {
                next()
            } else {
                res.error(
                    'Sorry, you are not a moderator. You dont have permission to access this.'
                )
            }
        } catch (err) {
            res.error(err)
        }
        if (err) {
            res.error(err)
        }
    })
}

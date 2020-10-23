const jwt = require('jsonwebtoken')
const db = require('../../schema/models')

module.exports = async (req, res, next) => {
    const { token } = req.body

    const { expectedRole } = await db.user.findOne({ token })

    await jwt.verify(token, 'shhhhh', async (err, decoded) => {
        try {
            const { role } = await decoded
            if (role === expectedRole) {
                next()
            } else {
                res.error(
                    `Sorry, you are not a ${role}. You dont have permission to access this.`
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
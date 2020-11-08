const jwt = require('jsonwebtoken')
const db = require('../../schema/models')

module.exports = async (req, res, next) => {
    const { token } = req.body

    const user = await db.user.findOne({ token })

    const expectedRole = user.role
    console.log(expectedRole)
    await jwt.verify(token, 'shhhhh', async (err, decoded) => {
        try {
            const { role } = await decoded
            console.log(role === expectedRole)
            if (role === expectedRole) {
                next()
            } else {
                res.status(401).send(
                    `Sorry, you are not a ${role}. You dont have permission to access this.`
                )
            }
        } catch (err) {
            res.status(500).send(err)
        }
        if (err) {
            res.status(500).send(err)
        }
    })
}

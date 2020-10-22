const jwt = require('jsonwebtoken')
const db = require('../../schema/models')

module.exports = async (req, res) => {
    const { token } = await req.params
    const user = await db.user.findOne({ token })

    await jwt.verify(token, 'shhhhh', async (err, decoded) => {
        console.log(decoded)
        res.json({ decoded })
        if (err) {
            /*
              err = {
                name: 'TokenExpiredError',
                message: 'jwt expired',
                expiredAt: 1408621000
              }
            */
        }
    })
}

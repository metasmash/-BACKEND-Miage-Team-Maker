const jwt = require('jsonwebtoken')
const db = require('../../schema/models')

module.exports = async (req, res) => {
    const { token } = await req.params
    console.log(token)
    console.log(await db.user.findOne({ token }))
    await jwt.verify(token, 'shhhhh', function (err, decoded) {
        console.log(decoded)
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

    res.json({ status: 0 })
}

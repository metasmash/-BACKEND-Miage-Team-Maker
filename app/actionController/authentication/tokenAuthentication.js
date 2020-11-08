const jwt = require('jsonwebtoken')
const db = require('../../schema/models')

module.exports = async (req, res) => {
    const { token } = await req.params
    const user = await db.user.findOne({ token })
    console.log(user)

    await jwt.verify(token, 'shhhhh', async (err, decoded) => {
        if (decoded) {
            res.json(user)
        }
        if (err) {
            console.log(err)
            res.status(401).send('wrong token authentification.')
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

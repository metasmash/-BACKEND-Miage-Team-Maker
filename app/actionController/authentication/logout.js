const db = require('../../schema/models')
const jwt = require('jsonwebtoken')

module.exports = async (req, res) => {
    const { token } = await req.params
    const user = await db.user.findOne({ token })
    console.log(user)

    await jwt.verify(token, 'shhhhh', async (err) => {
        db.user
            .updateOne({ token }, { token: '' })
            .then(() =>
                res.json({ message: 'Successfully logged out!', token: '' })
            )
        if (err) {
            console.log(err)
            res.status(500).send('wrong token authentification.')
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

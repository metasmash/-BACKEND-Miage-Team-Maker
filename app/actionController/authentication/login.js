const db = require('../../schema/models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = async (req, res) => {
    const { username, password } = req.body
    const hash = (await db.user.findOne({ username })).password

    bcrypt.compare(password, hash, async (err, result) => {
        if (result) {
            const { token } = await db.user.findOne({ username })
            console.log(!!token)

            if (!!token) {
            } else {
                const token = await jwt.sign(
                    {
                        exp: Math.floor(Date.now() / 1000) + 60 * 60,
                        data: 'foobar',
                    },
                    'secret'
                )

                console.log(jsonWebToken)
                await db.user.updateOne({ username }, { token })
            }

            res.json({ token })
        } else {
            res.json({ token: false })
        }
    })
}

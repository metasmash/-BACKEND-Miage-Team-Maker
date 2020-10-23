const db = require('../../schema/models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = async (req, res) => {
    const { username, password } = req.body
    const hash = (await db.user.findOne({ username })).password

    bcrypt.compare(password, hash, async (err, result) => {
        if (result) {
            const { token, role } = await db.user.findOne({ username })

            if (!!token) {
                await jwt.verify(token, 'shhhhh', async (err, decoded) => {
                    if (decoded) {
                        res.json({
                            message: `Hello, ${username}, you are logged in!`,
                            token,
                        })
                    }
                    if (err) {
                        const token = await jwt.sign(
                            {
                                role,
                            },
                            'shhhhh',
                            { expiresIn: '7d' }
                        )

                        console.log(token)
                        await db.user.updateOne({ username }, { token })

                        res.json({
                            message: `Hello, ${username}, you are logged in!`,
                            token,
                        })
                    }
                })
            } else {
                const token = await jwt.sign(
                    {
                        role,
                    },
                    'shhhhh',
                    { expiresIn: '7d' }
                )

                console.log(token)
                await db.user.updateOne({ username }, { token })

                res.json({
                    message: `Hello, ${username}, you are logged in!`,
                    token,
                })
            }
        } else {
            res.json({ message: 'User does not exists or password is wrong.' })
        }
    })
}

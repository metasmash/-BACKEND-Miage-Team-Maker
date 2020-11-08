const db = require('../schema/models')

module.exports = async (req, res, next) => {
    console.log(await req.body)

    const { token } = await req.body
    const user = await db.user.findOne({ token })

    return !!user ? next() : res.status(401).send('wrong token')
}

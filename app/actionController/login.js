const db = require('../schema/models')
const bcrypt = require('bcryptjs')

module.exports = async (req, res) => {
    const { username, password } = req.body
    const hash = (await db.user.findOne({ username: username })).password

    bcrypt.compare(password, hash, function (err, result) {
        res.json({ loggedIn: result ? 'success!' : 'failed!!' })
    })
}

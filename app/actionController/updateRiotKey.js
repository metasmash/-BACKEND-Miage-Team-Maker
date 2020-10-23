const db = require('../schema/models')

module.exports = async (req, res) => {
    const { key } = req.body

    console.log(`${key} updated on TABLE ServerConfig.`)

    await db.serverConfig.updateOne({ type: 'APIKEY' }, { riotKey: key })
    res.json({ message: 'Table updated', exit: 0 })
}

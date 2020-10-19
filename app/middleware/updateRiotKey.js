const db = require('../schema/models')

module.exports = async (req, res, next) => {
    const apiKey = await db.serverConfig.find({})
    const length = apiKey.length
    const { key } = req.body
    if (length === 0) {
        console.log('success on middleware call')
        next()
    } else {
        console.log(`${key} added to TABLE ServerConfig.`)

        await db.serverConfig.updateOne({ type: 'APIKEY' }, { riotKey: key })
        res.json({ Message: 'Table updated', exit: 0 })
    }
}

const db = require('./schema/models')

module.exports = async () => {
    const { riotKey } = await db.serverConfig.findOne({ type: 'APIKEY' })
    return riotKey
}

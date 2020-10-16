const db = require('./schema/models')

const API_KEY = async () => {
    const { riotKey } = await db.serverConfig.findOne({ type: 'APIKEY' })
    return riotKey
}

module.exports = API_KEY

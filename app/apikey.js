
const db = require('./schema/models')

const API_KEY = async () => await db.serverConfig.findOne({type:'APIKEY'})


module.exports = API_KEY

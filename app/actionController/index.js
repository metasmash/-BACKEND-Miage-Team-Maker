const createDBRiotKey = require('./createDBRiotKey')
const getUserInformation = require('./getUserInformation')
const getRiotApiKey = require('./getRiotApiKey')
const getUserLevel = require('./getUserLevel')

module.exports = {
    CREATE_DB_RIOT_KEY: createDBRiotKey,
    GET_USER_INFORMATION: getUserInformation,
    GET_RIOT_API_KEY: getRiotApiKey,
    GET_USER_LEVEL: getUserLevel,
}

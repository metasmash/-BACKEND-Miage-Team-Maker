const setRiotKey = require('./updateRiotKey')
const getUserInformation = require('./getUserInformation')
const getRiotApiKey = require('./getRiotApiKey')
const getUserLevel = require('./getUserLevel')
const signUp = require('./signUp')
const login = require('./login')

module.exports = {
    SET_RIOT_KEY: setRiotKey,
    GET_USER_INFORMATION: getUserInformation,
    GET_RIOT_API_KEY: getRiotApiKey,
    GET_USER_LEVEL: getUserLevel,
    SIGNUP: signUp,
    LOGIN: login,
}

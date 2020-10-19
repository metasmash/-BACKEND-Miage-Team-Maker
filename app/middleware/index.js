const checkRiotKey = require('./checkRiotKey')
const createDBRiotKey = require('./createDBRiotKey')
const checkUsername = require('./checkUsername')
const checkEmail = require('./checkEmail')

module.exports = {
    CHECK_RIOT_KEY: checkRiotKey,
    CREATE_DB_RIOT_KEY: createDBRiotKey,
    CHECK_USERNAME_AVAILABILITY: checkUsername,
    CHECK_EMAIL_AVAILABILITY: checkEmail,
}

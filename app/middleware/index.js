const checkRiotKey = require('./checkRiotKey')
const createDBRiotKey = require('./createDBRiotKey')
const checkUsernameAvailability = require('./checkUsernameAvailability')
const checkEmailAvailability = require('./checkEmailAvailability')
const checkIfUsernameExists = require('./checkIfUsernameExists')

module.exports = {
    CHECK_RIOT_KEY: checkRiotKey,
    CREATE_DB_RIOT_KEY: createDBRiotKey,
    CHECK_USERNAME_AVAILABILITY: checkUsernameAvailability,
    CHECK_EMAIL_AVAILABILITY: checkEmailAvailability,
    CHECK_IF_USERNAME_EXISTS: checkIfUsernameExists,
}

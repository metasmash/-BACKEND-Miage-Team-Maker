module.exports = {
    CHECK_RIOT_KEY: require('./checkRiotKey'),
    CREATE_DB_RIOT_KEY: require('./createDBRiotKey'),
    CHECK_USERNAME_AVAILABILITY: require('./authentication/checkUsernameAvailability'),
    CHECK_EMAIL_AVAILABILITY: require('./authentication/checkEmailAvailability'),
    CHECK_IF_USERNAME_EXISTS: require('./authentication/checkIfUsernameExists'),
}

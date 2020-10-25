module.exports = {
    SET_RIOT_KEY: require('./updateRiotKey'),
    GET_USER_INFORMATION: require('./getUserInformation'),
    GET_RIOT_API_KEY: require('./getRiotApiKey'),
    GET_USER_LEVEL: require('./getUserLevel'),
    SIGNUP: require('./authentication/signUp'),
    LOGIN: require('./authentication/login'),
    TOKEN_AUTH: require('./authentication/tokenAuthentication'),
    LOGOUT: require('./authentication/logout'),
}

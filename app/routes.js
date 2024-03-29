const ROLE = {
    USER: '/user/:token',
    MODERATOR: '/moderator/:token',
    ADMIN: '/admin/:token',
}

module.exports = {
    ROOT: '/',
    USER_LEVEL: '/:username/level',
    USER_INFORMATION: '/:username/information',
    RIOT_API_KEY: '/serverConfiguration/apikey',
    SIGNUP: '/signup',
    LOGIN: '/login',
    LOGIN_TOKEN: '/login/:token',
    LOGOUT: '/logout/:token',
    ROLE,
}

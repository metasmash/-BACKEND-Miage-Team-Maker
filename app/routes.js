const ROLE = {
    USER: '/user',
    MODERATOR: '/moderator',
    ADMIN: '/admin',
}

module.exports = {
    ROOT: '/',
    USER_LEVEL: '/:username/level',
    USER_INFORMATION: '/:username/information',
    RIOT_API_KEY: '/serverConfiguration/apikey',
    SIGNUP: '/signup',
    LOGIN: '/login',
    LOGIN_TOKEN: '/login/:token',
    ROLE,
}

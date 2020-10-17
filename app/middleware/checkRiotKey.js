const RIOT = require('../riotGamesHelper')

module.exports = async (req, res, next) => {
    const { key } = req.body
    RIOT.checkApiKey(key)
        .then((res) => {
            if (res === 200) {
                console.log('API key is valid!')
                next()
            } else {
                throw 'error, api key not valid!'
            }
        })
        .catch((err) => {
            console.log(err)
            res.json({ status: 403 })
        })
}

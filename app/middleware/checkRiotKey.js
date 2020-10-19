const RIOT = require('../riotGamesHelper')

module.exports = async (req, res, next) => {
    const { key } = req.body
    RIOT.checkApiKey(key)
        .then((res) => {
            if (res === 200) {
                next()
            } else {
                throw 'error, api key not valid!'
            }
        })
        .catch((err) => {
            console.log(err)
            res.status(403).send(err)
        })
}

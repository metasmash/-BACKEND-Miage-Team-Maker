const RIOT = require('../riotGamesHelper')

module.exports = async (req, res) => {
    const response = { information: {} }
    try {
        const username = req.params.username
        const id = await RIOT.getSummonerSecretId(username)
        response.information = await RIOT.getSummonerRanking(id)
        res.json(response.information)
    } catch (e) {
        res.status(404)
    }
}

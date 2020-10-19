const RIOT = require('../riotGamesHelper')

module.exports = async (req, res) => {
    const response = { information: {} }
    try {
        const username = req.params.username
        const id = await RIOT.getSummonerSecretId(username)
        response.information = await RIOT.getSummonerRanking(id)
    } catch (e) {
        response.information = { error: true }
        console.log('Error: invalid summoner name.')
    }

    res.json(response.information)
}

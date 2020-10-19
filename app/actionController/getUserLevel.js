const RIOT = require('../riotGamesHelper')

module.exports = async (req, res) => {
    const response = { information: {} }
    try {
        const username = req.params.username
        response.information = await RIOT.getSummonerLevel(username)
    } catch (e) {
        response.information = { error: true }
        console.log('Error: invalid summoner name.')
    }

    res.json(response.information)
}

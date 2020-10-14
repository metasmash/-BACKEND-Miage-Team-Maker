const axios = require('axios')
const API_KEY = require('./apikey')

const RIOT = {
  // to get summonerName and level
  getSummonerLevel: async (summonerName) =>
    await axios
      .get(
        `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`
      )
      .then((res) => {
        const { data } = res
        return {
          name: data.name,
          level: data.summonerLevel,
        }
      }),

  //to get the secret summonerID for more riot game api request
  getSummonerSecretId: async (summonerName) =>
    await axios
      .get(
        `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`
      )
      .then((res) => {
        const { data } = res
        return data.id
      }),

  //we can get summoner ranks information, elo, game won & lost.
  getSummonerRanking: async (id) =>
    await axios
      .get(
        `https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${API_KEY}`
      )
      .then((res) => {
        return res.data
      }),
}

module.exports = RIOT

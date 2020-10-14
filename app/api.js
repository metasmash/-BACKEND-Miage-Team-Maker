const RIOT = require('./riotGamesHelper')
const app = require('../index')
const db = require('./schema/models')

app.get('/:username/level', async (req, res) => {
  const response = { information: {} }
  try {
    const username = req.params.username
    const information = await RIOT.getSummonerLevel(username)
    response.information = information
  } catch (e) {
    response.information = { error: true }
    console.log('Error: invalid summoner name.')
  }

  res.json(response.information)
})

app.get('/:username/information', async (req, res) => {
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
})

app.post(
  '/serverConfiguration/apikey',
  async (req, res) => {
    const apiKey = await db.serverConfig.find({})
    const length = apiKey.length
    if (length === 0) {
      next()
    } else {
      console.log('Error: table already exists')
      res.json({ error: true })
    }
  },
  async (req, res) => {
    const { body } = req
    console.log(await db.serverConfig.find({}))
    console.log(body)

    db.serverConfig
      .create({ riotKey: 'hello world' })
      .then(() => {
        console.log('table created successfully!')
      })
      .catch(() => console.log('we got an error captain!'))

    db.serverConfig.find({}).then((res) => {
      console.log()
    })

    res.send(await db.serverConfig.find({}))
  }
)

const RIOT = require('./riotGamesHelper')
const app = require('../index')
const db = require('./schema/models')
const API_KEY = require('./apikey')


app.get('/',async (req,res,err) => {

})

app.get('/:username/level', async (req, res) => {
  const response = { information: {} }
  try {
    const username = req.params.username
      response.information = await RIOT.getSummonerLevel(username)
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

app.get('/serverConfiguration/apikey', async (req,res) => {
  try {
 const riotKey = await API_KEY()
 res.json(riotKey)
  } catch (err) {
 res.json({error:0})
  }
})

app.post(
  '/serverConfiguration/apikey',
  async (req, res, next) => {
    const apiKey = await db.serverConfig.find({})
    const length = apiKey.length
    const {key} = req.body
    if (length === 0) {
      console.log('success on middleware call')
      next()
    } else {
      console.log('Error: table already exists')
      console.log(key)

     await db.serverConfig.updateOne({type:'APIKEY'}, {riotKey:key})
      res.json({ Message: 'Table updated', exit:0 })
    }
  },
  async (req, res) => {
    const { body } = req
    console.log(await db.serverConfig.find({}))

    db.serverConfig
      .create({type:'APIKEY', riotKey: '__define.api.key' })
      .then(() => {
        console.log('table created successfully!')
      })
      .catch(() => console.log('we got an error captain!'))

      console.log('DB APIKEY created successfully!')

    res.send({Message:'Table created successfully',exit:0})
  }
)

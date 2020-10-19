const db = require('../schema/models')

module.exports = async (req, res) => {
    console.log(await db.serverConfig.find({}))

    console.log('DB doesnt exists yet! We created one with your key :-)')

    db.serverConfig
        .create({ type: 'APIKEY', riotKey: '__define.api.key' })
        .then(() => {
            console.log('table created successfully!')
        })
        .catch(() => console.log('we got an error captain!'))

    console.log('DB APIKEY created successfully!')

    res.send({ Message: 'Table created successfully', exit: 0 })
}

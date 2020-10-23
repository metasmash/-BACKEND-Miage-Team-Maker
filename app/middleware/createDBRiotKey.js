const db = require('../schema/models')

module.exports = async (req, res, next) => {
    const apiKey = await db.serverConfig.find({})
    const length = apiKey.length
    const { key } = req.body
    if (length > 0) {
        console.log('RIOT API KEY is VALID!')
        next()
    } else {
        db.serverConfig
            .create({ type: 'APIKEY', riotKey: key })
            .then(() => {
                console.log('table created successfully!')
            })
            .catch(() => console.log('we got an error captain!'))

        console.log('DB APIKEY created successfully!')

        res.send({ message: 'Table created successfully', exit: 0 })
    }
}

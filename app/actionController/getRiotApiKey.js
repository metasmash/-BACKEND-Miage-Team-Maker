const API_KEY = require('../apikey')

module.exports = async (req, res) => {
    res.json({ Error: 'You dont have access right to this.' })
    try {
        const riotKey = await API_KEY()
        res.json(riotKey)
    } catch (err) {
        res.json({ error: 0 })
    }
}

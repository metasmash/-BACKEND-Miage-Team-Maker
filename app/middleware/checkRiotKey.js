module.exports =  async (req, res, next) => {
    const apiKey = await db.serverConfig.find({})
    const length = apiKey.length
    if (length === 0) {
      next()
    } else {
      console.log('Error: table already exists')
      res.json({ error: true })
    }
  }
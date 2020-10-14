const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ServerConfig = new Schema({
  riotKey: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('serverConfig', ServerConfig)

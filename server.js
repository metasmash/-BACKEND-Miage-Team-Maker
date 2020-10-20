const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/miage', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const mongo = mongoose.connection
mongo.on('error', console.error.bind(console, 'connection error:'))
mongo.once('open', function () {
    console.log('connected to DB!')
})

const corsOptions = {
    origin: 'https://miage-tournament.tk',
}

app.use(cors(corsOptions))
app.use((req, res, next) => {
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
})

// parse requests of content-type - application/json
app.use(bodyParser.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// set port, listen for requests
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})

module.exports = app

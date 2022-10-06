const express = require('express')
const methodOverride = require('method-override')

const mongoConfig = require('./config')

const musicController = require('./routes/musicRoutes')

require('dotenv').config()

const app = express()

const port = process.env.PORT

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
app.use(methodOverride("_method"))

app.use('/', musicController)

app.listen(port, () => console.log('Listening on port: ', port))

mongoConfig()





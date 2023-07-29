require('dotenv').config()
const express = require ('express')
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const {createClient} = require('redis');
const db = require('./db')
const app = express()

//configuraciones


let redisClient = createClient({legacyMode: true})
redisClient.connect(function () {
}).catch(console.error)




app.set('port',process.env.PORT || 3003 )
app.set('appName',process.env.APP_NAME)

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'pug')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())

app.use(morgan('dev'))

app.use('/public', express.static(path.join(__dirname, 'public')))

app.use(session({
    store: new RedisStore({
        client: redisClient,
    }),
    secret: process.env.EXPRESS_SESSION_SECRET,
    name: process.env.NAME_COOKIE_SESSION,
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)},
    httpOnly: true
}));

//rutas
app.use(require('./viewEngine/routes'))
app.use('/api', require('./routes/_api'))

//Inicializando el servidor
app.listen(app.get('port'), () => {
    console.log(app.get('appName'))
    console.log("Server corriendo en el puerto:", app.get('port'))

})


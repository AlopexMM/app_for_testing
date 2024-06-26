// General imports
import path from 'node:path'
import express, { Express, Request, Response} from 'express'
import session, { SessionData } from 'express-session'
import bodyParser from 'body-parser'
import serveFavicon from 'serve-favicon'
import { dollarDb, beerShopDb, initDBs } from './DBInitializers.js'

// Adding user to session

declare module "express-session" {
    interface SessionData {
        user: string
    }
}

// App imports
import mainRoutes from './routes/mainRoutes.js'
import beerShopRoutes from './routes/beerShopRoutes.js'
import dollarHistoryRoutes from './routes/dollarHistoryRoutes.js'

// Config variables
const PORT = 3001

// Middleware
const app = express()
app.set('trusty-proxy', 1)
app.use(session({
    secret: 'testing app',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// static
const src = path.resolve('.')
app.use('/images', express.static(path.join(__dirname, 'public/img')))
app.use('/js', express.static(path.join(__dirname, 'public/js')))
app.use('/css', express.static(path.join(__dirname, 'public/css')))
app.use(serveFavicon(path.join(__dirname, 'public/favicon.ico')))

// Engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Routes
app.use(mainRoutes)
app.use(beerShopRoutes)
app.use(dollarHistoryRoutes)

// File for database in memory
const dollarFilePath = path.join(__dirname, 'data/evolution.json')
const productsFilePath = path.join(__dirname, 'data/shop.json')
const clientsFilePath = path.join(__dirname, 'data/clients.json')

app.listen(PORT, async () => {
    await initDBs()
    await dollarDb(dollarFilePath)
    await beerShopDb(productsFilePath, clientsFilePath)
    console.log(`Aplicacion corriendo en el puerto ${PORT}`)
})
// General imports
import { URL } from 'node:url'
import express from 'express'
import session from 'express-session'
import bodyParser from 'body-parser'
import serveFavicon from 'serve-favicon'
import { dollarDb, beerShopDb, initDBs } from './data/DBInitializers.mjs'

// App imports
import mainRoutes from './routes/mainRoutes.mjs'
import beerShopRoutes from './routes/beerShopRoutes.mjs'
import dollarHistoryRoutes from './routes/dollarHistoryRoutes.mjs'

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
const img = new URL('./public/img',import.meta.url).pathname.replace('/','')
const js = new URL('./public/js', import.meta.url).pathname.replace('/','')
const css = new URL('./public/css', import.meta.url).pathname.replace('/','')

app.use('/images', express.static(img))
app.use('/js', express.static(js))
app.use('/css', express.static(css))
app.use(serveFavicon(new URL('./public/favicon.ico', import.meta.url).pathname.replace('/', '')))

// Engine
app.set('view engine', 'ejs')

// Routes
app.use(mainRoutes)
app.use(beerShopRoutes)
app.use(dollarHistoryRoutes)

// File for database in memory
const dollarFilePath = new URL('./data/evolution.json', import.meta.url).pathname.replace('/', '')
const productsFilePath = new URL('./data/shop.json', import.meta.url).pathname.replace('/', '')
const clientsFilePath = new URL('./data/clients.json', import.meta.url).pathname.replace('/', '')

app.listen(PORT, async () => {
    await initDBs()
    await dollarDb(dollarFilePath)
    await beerShopDb(productsFilePath, clientsFilePath)
    console.log(`Aplicacion corriendo en el puerto ${PORT}`)
})
// General imports
// import { dirname } from 'node:path'
// import { fileURLToPath } from 'node:url'
import { URL } from 'node:url'
import express from 'express'

// App imports
import mainRoutes from './routes/mainRoutes.mjs'
import beerShopRoutes from './routes/beerShopRoutes.mjs'
import dollarHistoryRoutes from './routes/dollarHistoryRoutes.mjs'

// Config variables
const PORT = 3001

// Middleware
const app = express()

// static
const img = new URL('./public/img',import.meta.url).pathname.replace('/','')
const js = new URL('./public/js', import.meta.url).pathname.replace('/','')
const css = new URL('./public/css', import.meta.url).pathname.replace('/','')

app.use('/images', express.static(img))
app.use('/js', express.static(js))
app.use('/css', express.static(css))

// Engine
app.set('view engine', 'ejs')

// Routes
app.use(mainRoutes)
app.use(beerShopRoutes)
app.use(dollarHistoryRoutes)


app.listen(PORT, () => {
    console.log(`Aplicacion corriendo en el puerto ${PORT}`)
})
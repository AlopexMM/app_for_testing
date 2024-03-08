const path = require('path')
const express = require('express')

PORT = 3001

// Middleware
const app = express()

// Engine
app.set('view engine', 'ejs')




app.listen(PORT, () => {
    console.log(`Aplicacion corriendo en el puerto ${PORT}`)
})
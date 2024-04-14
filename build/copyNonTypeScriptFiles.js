const fs = require('fs')
const path = require('path')

const views = path.join(path.resolve('.'), 'src/views')
const dist = path.join(path.resolve('.'), 'dist/')
// console.log(views)
fs.cp(views, dist, { recursive: true }, (err) => {
    console.log(views)
    console.log(dist)
    if(err) console.error(err)
})
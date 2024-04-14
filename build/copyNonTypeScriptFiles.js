const fs = require('fs')
const path = require('path')

const views = path.join(path.resolve('.'), 'src/views')
const public = path.join(path.resolve('.'), 'src/public')
const data = path.join(path.resolve('.'), 'src/data')
const distViews = path.join(path.resolve('.'), 'dist/views')
const distPublic = path.join(path.resolve('.'), 'dist/public')
const distData = path.join(path.resolve('.'), 'dist/data')

// console.log(views)
fs.cp(views, distViews, { recursive: true }, (err) => {
    if(err) console.error(err)
})
fs.cp(public, distPublic, { recursive: true }, (err) => {
    if(err) console.error(err)
})
fs.cp(data, distData, { recursive: true }, (err) => {
    if(err) console.error(err)
})
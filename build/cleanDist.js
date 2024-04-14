const fs = require('fs')
const path = require('path')

const dist = path.join(path.resolve('.'), 'dist')
const items = fs.readdirSync(dist)

for (let item of items) {
    // console.log(path.join(dist,item))
    fs.rmSync(path.join(dist,item), { recursive: true, force: true })
}
import Dollar from "../models/dollar.mjs";
import fs from "node:fs"

export function initDollarDb() {
    fs.readFile('./evolution.json',{encoding: 'utf-8'}, (err, data) => {
        if (err) console.error(err)
        console.log(data)
    })
}

initDollarDb()
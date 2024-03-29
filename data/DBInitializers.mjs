import Dollar from "../models/dollar.mjs"
import fs from "node:fs"

/**
 * Procesa el archivo que contiene los datos del dollar desde 2012 a 2023
 * @param filePath con la ubicacion del archivo
*/
export function dollarDb(filePath) {
    
    fs.readFile(filePath,{encoding: 'utf-8'}, async (err, data) => {
        if (err) console.error(err)
        const jsonData = JSON.parse(data)
        await Dollar.sync()
        for(let dObject of jsonData) {
            await Dollar.create({
                date: dObject.date,
                source: dObject.source,
                sell: dObject.value_sell,
                buy: dObject.value_buy,
            })
        }
    })
};

// initDollarDb()
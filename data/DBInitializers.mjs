import Dollar from "../models/dollar.mjs"
import Client from "../models/client.mjs"
import Product from "../models/product.mjs"
import Ticket from "../models/ticket.mjs"
import fs from "node:fs"

/**
 * Procesa el archivo que contiene los datos del dollar desde 2012 a 2023
 * @param filePath con la ubicacion del archivo
*/
export function dollarDb(filePath) {
    
    fs.readFile(filePath,{ encoding: 'utf-8' }, async (err, data) => {
        if (err) console.error(err)
        const jsonData = JSON.parse(data)
        await Dollar.sync()
        for (let dObject of jsonData) {
            await Dollar.create({
                date: dObject.date,
                source: dObject.source,
                sell: dObject.value_sell,
                buy: dObject.value_buy,
            })
        }
    })
};

/**
 * Procesa el archivo que contiene los articulos 
 * y el archivo que tiene los clientes
 * @param productsPath la ubicación del archivo con los productos
 * @param clientPath la ubicación del archivo con los clientes
**/
export async function beerShopDb(productsPath, clientsPath) {
    await Ticket.sync()
    await Product.sync()
    await Client.sync()

    fs.readFile(productsPath, { encoding: 'utf-8' }, async (err, data) => {
        if (err) console.error(err)
        const jsonData = JSON.parse(data)
        for (let p of jsonData) {
            await Product.create({
                name: p.name,
                brand: p.brand,
                image: p.image,
                price: p.price
            })
        }
    })
    fs.readFile(clientsPath, { encoding: 'utf-8' }, async (err, data) => {
        if (err) console.error(err)
        const jsonData = JSON.parse(data)
        for (let c of jsonData) {
            await Client.create({
                name: c.name,
                lastname: c.lastname,
                address: c.address,
                postalCode: c.postalCode
            })
        }
    })
}

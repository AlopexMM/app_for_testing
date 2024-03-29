import Dollar from '../models/dollar.mjs'
import { Op } from 'sequelize'

export async function index(req, res) {
    const records = await Dollar.findAll({
        where: { 
            date: { [Op.like] : '%2023%' },
            source: 'Blue'
        }
    })
    const options = {
        title: "Historico del dolar blue",
        records: records
    }
    res.render('dollar_history/index', options)
}
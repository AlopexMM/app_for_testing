import Dollar from '../models/dollar.js'
import { Op } from 'sequelize'
import { Response, Request } from 'express'

export async function index(req: Request, res: Response) {
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
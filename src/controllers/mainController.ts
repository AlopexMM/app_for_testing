import { Response, Request } from 'express'

export function index(req: Request, res: Response) {
    const options = {
        title: "Pagina inicial",
        urls: [
            {
                name: "Tienda de cervezas",
                link: "beer-shop"
            },
            {
                name: "Historial del dolar",
                link: "dollar-history"
            }
        ]
    }
    res.render('main/index', options)
}
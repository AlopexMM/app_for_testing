
export function index(req, res) {
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
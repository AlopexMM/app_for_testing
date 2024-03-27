import data from '../data/shop.json' assert { type: 'json'}

export function index(req, res) {
    const options = {
        title: "Tienda de cervezas",
        products: data
    }
    res.render('beer_shop/index', options)
}

export function cartshop(req, res) {

}
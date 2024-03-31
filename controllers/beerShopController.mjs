import Client from '../models/client.mjs'
import Product from '../models/product.mjs'
import Ticket from '../models/ticket.mjs'
import Autorization from '../assets/authorization.mjs'
const authorization = new Autorization()

export async function index(req, res) {
    
    const products = await Product.findAll()

    const options = {
        title: "Tienda de cervezas",
        products: products
    }
    res.render('beer_shop/index', options)
}

export async function loginGet(req, res) {
    
    const options = {
        title: "Tienda de cervezas | Ingresar",
    }
    
    res.render('beer_shop/login', options)
}

export async function loginPost(req, res) {
    const client = await Client.findOne({ 
        where: {
            name: req.body.name, 
            lastname: req.body.lastname
        }
    })
    if (client) {
        const key = authorization.encrypt(client.name, client.lastname)
        authorization.addUser(key)
        res.cookie('key', key, { httpOnly: true })
        res.redirect('/beer-shop')
    }
    else res.redirect('/beer-shop/login')
}

export async function signupGet(req, res) {
    res.render('beer_shop/signup', { title: 'Tienda de cervezas | Inscribirse' })
}

export async function signupPost(req, res) {
    
}

export async function ticketGet(req, res) {

}

export async function ticketPost(req, res) {

}
import Client from '../models/client.mjs'
import Product from '../models/product.mjs'
import Ticket from '../models/ticket.mjs'


export async function index(req, res) {
    
    let login = false
    if (req.cookies['login']) login = true
    else res.cookie('login', false, { httpOnly: true })

    const products = await Product.findAll()

    const options = {
        title: "Tienda de cervezas",
        products: products,
        login: login
    }
    res.render('beer_shop/index', options)
}

export async function loginGet(req, res) {
    
    const options = {
        title: "Tienda de cervezas | Ingresar",
        login: false
    }
    
    res.render('beer_shop/login', options)
}

export async function loginPost(req, res) {

}

export async function signupGet(req, res) {

}

export async function signupPost(req, res) {

}

export async function ticket(req, res) {

}

export async function payment(req, res) {

}
import Client from '../models/client.mjs'
import Product from '../models/product.mjs'
import Ticket from '../models/ticket.mjs'
import Autorization from '../assets/authorization.mjs'
const authorization = new Autorization()

export async function index(req, res) {
    
    const products = await Product.findAll()

    const options = {
        title: "Tienda de cervezas",
        products: products,
        login: req.status == 302 ? true : false
    }
    res.render('beer_shop/index', options)
}

export async function loginGet(req, res) {
    if (req.cookie['key']) {
        if( authorization.verifyUser(req.cookie['key'])) res.redirect('/beer-shop', 302)
    }
    const options = {
        title: "Tienda de cervezas | Ingresar",
        login: false
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

export async function logoutGet(req, res) {
    const userCredentials = authorization.decrypt(req.cookie['key'])
    const user = await Client.findOne({
        where: {
            name: userCredentials[0],
            lastname: userCredentials[1]
        }
    })
    const options = {
        title: 'Tienda de cervezas | Salir',
        user: user,
        login: true
    }
    res.render('beer_shop/logout.ejs', options)
}

export async function logoutPost(req, res) {
    authorization.removeUser(req.cookie['key'])
    delete req.cookie['key']
    res.redirect('/beer-shop', 205)
}

export async function signupGet(req, res) {
    let login = false
    if (req.cookie['key'] != undefined) login = authorization.verifyUser(req.cookie['key'])
    
    const options = { 
        title: 'Tienda de cervezas | Inscribirse',
        login: login
    }
    res.render('beer_shop/signup', options)
}

export async function signupPost(req, res) {
    const client = await Client.create({
        name: req.body.name,
        lastname: req.body.lastname,
        address: req.body.address,
        postalCode: req.body.postalCode
    })
    res.redirect('/beer-shop', 302)
}

export async function ticketGet(req, res) {

}

export async function ticketPost(req, res) {

}
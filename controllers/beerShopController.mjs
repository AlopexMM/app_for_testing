import { Op } from 'sequelize'
import Client from '../models/client.mjs'
import Product from '../models/product.mjs'
import Ticket from '../models/ticket.mjs'
import Autorization from '../assets/authorization.mjs'
const authorization = new Autorization()

export async function index(req, res) {
    let login = false
    try {
        login = req.query['login']
    } catch (err) {
        console.error(err)
    }

    const products = await Product.findAll()
    
    const options = {
        title: "Tienda de cervezas",
        products: products,
        login: login
    }
    res.render('beer_shop/index', options)
}

export async function loginGet(req, res) {
    try {
        if( authorization.verifyUser(req.cookie['key'])) res.redirect('/beer-shop?login=true')
    } catch (err) {
        console.error(err)
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
        res.redirect('/beer-shop?login=true')
    }
    else res.redirect('/beer-shop/login?login=false')
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
    try {
        if (authorization.verifyUser(req.cookie['key']) == false) res.redirect('/beer-shop/login')
    } catch (err) {
        res.redirect('/beer-shop/login')
    }
    const user = authorization.decrypt(req.cookie['key'])
    const items = req.query.items.split(';')
    items.pop()

    const client = await Client.findOne({
        where: {
            name: user[0],
            lastname: user[1]
        }
    })
    const products = await Product.findAll({
        where: {
            id: {
                [Op.or]: items
            }
        }
    })

    const options = {
        title: 'Tienda de cervezas | Ticket',
        products: products,
        client: client
    }

    res.render('beer_shop/ticket', options)
}

export async function ticketPost(req, res) {
    
}
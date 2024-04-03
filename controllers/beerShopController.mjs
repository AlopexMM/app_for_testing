import { Op } from 'sequelize'
import crypto from 'node:crypto'
import Client from '../models/client.mjs'
import Product from '../models/product.mjs'
import Ticket from '../models/ticket.mjs'
import Payment from '../models/payment.mjs'
import Authorization from '../assets/authorization.mjs'
const authorization = new Authorization()

export async function index(req, res) {

    const products = await Product.findAll()
    
    const options = {
        title: "Tienda de cervezas",
        products: products,
        login: req.session.user ? true : false
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
    const client = await Client.findOne({ 
        where: {
            name: req.body.name, 
            lastname: req.body.lastname
        }
    })
    if (client) {
        req.session.user = authorization.encrypt(client.name, client.lastname)
        res.redirect('/beer-shop')
    }
    else res.redirect('/beer-shop/signup')
}

export async function logout(req, res, next) {
    req.session.user = null
    req.session.save((err) => {
        if (err) next(err)
        req.session.regenerate((err) => {
            if(err) next(err)
            res.redirect('/beer-shop')
        })
    })
}

export async function signupGet(req, res) {
    const options = { 
        title: 'Tienda de cervezas | Inscribirse',
        login: req.session.user ? true : false
    }
    res.render('beer_shop/signup', options)
}

export async function signupPost(req, res) {
    await Client.create({
        name: req.body.name,
        lastname: req.body.lastname,
        address: req.body.address,
        postalCode: req.body.postalCode
    })
    res.redirect('/beer-shop')
}

export async function ticket(req, res) {

    const user = authorization.decrypt(req.session.user)
    const client = await Client.findOne({
        where: {
            name: user[0],
            lastname: user[1]
        }
    })
    const bodyProducts = []
    for (let i = 0; i < req.body.id.length; i++) {
        bodyProducts.push({
          id: req.body.id[i],
          name: req.body.product[i],
          price: parseFloat(req.body.price[i])
        })
    }
    const ticket = await Ticket.create({
        clientId: client.id,
        products: bodyProducts
    })
    
    const options = {
        title: 'Tienda de cervezas | Ticket',
        objects: { client: client, ticket: ticket },
        login: true,
    }

    res.render('beer_shop/ticket', options)
}

export async function payment(req, res) {
    if(req.body.creditCardNumber == "4512077452844880") res.render('beer_shop/payment_failed', { 
        title: "Tienda de cervezas | Pago fallido", objects: {
            ticket: req.body.ticketId,
            creditcard: req.body.creditCardNumber
        },
        login: true
    })
    res.render('beer_shop/payment_success', {
        title: "Tienda de cervezas | Pago exitoso", ticket: req.body.ticketId, login: true
    })
}
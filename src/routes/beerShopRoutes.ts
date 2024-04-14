import express, { Response, Request, NextFunction } from 'express'
const router = express.Router()
import { index, loginGet, loginPost, ticket, signupGet, signupPost, logout, payment } from '../controllers/beerShopController.js'

function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    if (req.session.user) next()
    else res.redirect('/beer-shop/login')
}

router.get('/beer-shop', index)

router.get('/beer-shop/login', loginGet)
router.post('/beer-shop/login', loginPost)
router.get('/beer-shop/logout', logout)

router.post('/beer-shop/ticket', isAuthenticated, ticket)
router.post('/beer-shop/payment', isAuthenticated, payment)

router.get('/beer-shop/signup', signupGet)
router.post('/beer-shop/signup', signupPost)

export default router
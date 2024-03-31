import express from 'express'
const router = express.Router()
import { index, loginGet, loginPost, ticketGet, ticketPost, signupGet, signupPost, logoutGet, logoutPost } from '../controllers/beerShopController.mjs'

router.get('/beer-shop', index)

router.get('/beer-shop/login', loginGet)
router.post('/beer-shop/login', loginPost)
router.get('/beer-shop/logout', logoutGet)
router.post('/beer-shop/logout', logoutPost)

router.get('/beer-shop/ticket', ticketGet)
router.post('/beer-shop/ticket', ticketPost)

router.get('/beer-shop/signup', signupGet)
router.post('/beer-shop/signup', signupPost)

export default router
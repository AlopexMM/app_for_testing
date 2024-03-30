import express from 'express'
const router = express.Router()
import { index, loginGet, loginPost } from '../controllers/beerShopController.mjs'

router.get('/beer-shop', index)

router.get('/beer-shop/login', loginGet)
router.post('/beer-shop/login', loginPost)

export default router
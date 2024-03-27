import express from 'express'
const router = express.Router()
import { index, cartshop } from '../controllers/beerShopController.mjs'

router.get('/beer-shop', index)
router.post('/beer-shop/cartshop', cartshop)

export default router
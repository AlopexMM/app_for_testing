import express from 'express'
const router = express.Router()
import { index } from '../controllers/beerShopController.mjs'

router.get('/beer-shop', index)

export default router
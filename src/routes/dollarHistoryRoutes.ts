import { index } from '../controllers/dollarHistoryController.js'
import express from 'express'
const router = express.Router()

router.get('/dollar-history', index)

export default router
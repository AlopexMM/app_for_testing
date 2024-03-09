import { index } from '../controllers/dollarHistoryController.mjs'
import express from 'express'
const router = express.Router()

router.get('/dollar-history', index)

export default router
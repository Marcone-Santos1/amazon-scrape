import express from 'express'
import { scrapeAmazon } from '../controllers/scrape'

const router = express.Router()

router.get('/api/scrape', scrapeAmazon)

export default router;
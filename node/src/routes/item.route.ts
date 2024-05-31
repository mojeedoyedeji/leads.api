import express from 'express'
import * as controller from '../controllers/item.controller'

const router = express.Router()
router.get('/item/:id', controller.getItem)
router.get('/item/', controller.getItems)

export default router;
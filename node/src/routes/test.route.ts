import express from 'express'
import * as controller from '../controllers/test.controller'

const router = express.Router()
router.get('/test/', controller.testFunction)

export default router;

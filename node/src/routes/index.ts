import express from 'express'
import test from './test.route'
import item from './item.route'

const router = express.Router()

router.use('/test', test);
router.use('/item/', item);


export default router


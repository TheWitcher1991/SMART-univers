import express from 'express'
import { GLOBAL } from '../utils/config.js'
import homeController from '../controllers/homeController.js'

const homeRouter = express.Router()

homeRouter.get(GLOBAL.ROUTES.index.url, homeController.render)

export default homeRouter
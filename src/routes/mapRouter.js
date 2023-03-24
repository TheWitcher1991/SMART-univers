import express from 'express'
import { GLOBAL } from '../utils/config.js'
import mapController from '../controllers/mapController.js'

const  mapRouter = express.Router()

mapRouter.get(GLOBAL.ROUTES.index.url, mapController.render)

export default mapRouter
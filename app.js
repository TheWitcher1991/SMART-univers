import path from 'path'
import express from 'express'
import cors from 'cors'
import cookieparser from 'cookie-parser'
import helmet from 'helmet';
import expressHandlebars from 'express-handlebars';
import morgan from 'morgan'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'

import homeRouter from './src/routes/homeRouter.js';
import mapRouter from './src/routes/mapRouter.js';
import { csrfMiddleware } from './src/middleware/csrfMiddleware.js';
import { errorMiddleware } from './src/middleware/errorMiddleware.js';

import { GLOBAL } from './src/utils/config.js';

dotenv.config()

const app = express()

if (process.env.NODE_ENV === 'dev')
    app.use(morgan('dev'))

/**
 * @mysql
 */

import pool from './src/utils/db.js'

/**
 * @middleware
 */

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const handlebars = expressHandlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(cookieparser());

app.use(cors(
    { 
        origin: [GLOBAL.API_BASE_URL], 
        credentials: true 
    }))

app.use(helmet());

app.use(csrfMiddleware.csrfInit);
app.use(csrfMiddleware.csrfToken);

// app.engine('hbs', handlebars.engine)
app.set('view engine', 'hbs')

/**
 * @routers
 */

app.use(GLOBAL.ROUTES.index.url, csrfMiddleware.csrfProtection, homeRouter)
app.use(GLOBAL.ROUTES.map.url, csrfMiddleware.csrfProtection,  mapRouter)

app.use(errorMiddleware)

app.use('/assets', express.static(path.join(__dirname, '/assets')))

app.listen(GLOBAL.PORT, () => console.log(`Сервер запущен и ожидает подключения на порте ${GLOBAL.PORT}...`))
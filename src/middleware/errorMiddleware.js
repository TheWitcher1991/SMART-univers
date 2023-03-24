import Exception from '../models/Exception.js';

const errorMiddleware = (e, req, res, next) => {
    console.log('milon', e.code);
    if (e.code !== 'EBADCSRFTOKEN') return next(e);
    res.status(403).json(new Exception(true, e.message, e))
}

export { errorMiddleware }
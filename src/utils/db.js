import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()

const host = (`${process.env.NODE_ENV}` === "dev") ? `${process.env.HOST2}` : `${process.env.HOST}`
const user = (`${process.env.NODE_ENV}` === "dev") ? `${process.env.USER2}` : `${process.env.USER}`
const pass = (`${process.env.NODE_ENV}` === "dev") ? `${process.env.PASS2}` : `${process.env.PASS}`
const database = (`${process.env.NODE_ENV}` === "dev") ? `${process.env.DB2}` : `${process.env.DB}`

console.log(host, user, pass, database)

const pool = mysql.createPool({
    connectionLimit: 10,
    host: host,
    user: user,
    password: pass,
    database: database,
})

export default pool
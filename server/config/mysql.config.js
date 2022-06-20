require("dotenv").config({path: "../.env"})
const mysql = require("mysql2")
const { debugPort } = require("process")

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST_URL,
    user: "root",
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.WORDPRESS_DB_NAME
})

db.env = process.env

db.connect((err) => {
    if (err) {
        throw err
    }
    console.log(`Connected to the MYSQL Server at: ${db.env.MYSQL_HOST_URL}`)
})

module.exports = db
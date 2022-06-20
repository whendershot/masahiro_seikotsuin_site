const Appointment = require('../models/appointment.model')
const db = require('../config/mysql.config')

module.exports.getAll = (req, res) => {
    console.dir(`Inbound Request`)
    console.log(this)
    db.query(
        `SELECT * FROM appointments;`,
        (error, result, fields) => {
            if (error) {
                console.trace(error);
            }
            console.trace(`Get All results: ${JSON.stringify(result)}`)
            // console.dir(`Get All fields: ${typeof fields} ${JSON.stringify(fields)}`)
            res.send({appointments: result});
        }
    )
}

module.exports.create = (req, res) => {
    console.dir("Inbound Create")
    console.dir(req.body)
    const query = db.query(
        `INSERT INTO appointments (dateTime, duration, clientName) VALUES (?, ?, ?);`,
        [req.body.dateTime, req.body.duration, req.body.clientName],
        (error, result) => {
            if (error){
                console.trace(error)
            }
            console.log(JSON.stringify(result))
        }
    )
    console.dir(query.sql)
}
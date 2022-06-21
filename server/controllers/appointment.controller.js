const Appointment = require('../models/appointment.model')
const db = require('../config/mysql.config')

module.exports.getAll = (req, res) => {
    console.dir(`Inbound Request All`)
    db.pool.getConnection(
        (err, conn) => {
            conn.query(
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
            if (err) { console.log(err) }
            conn.release()
        }
    )
}

module.exports.get = (req, res) => {
    console.dir(`Inbound Request One`)
    db.pool.getConnection(
        (err, conn) => {
            const query = conn.query(
                `SELECT * FROM appointments WHERE id = ?;`,
                [req.params.id],
                (error, result, fields) => {
                    if (error) {
                        console.trace(error);
                    }
                    console.trace(`Get one results: ${JSON.stringify(result)}`)
                    // console.dir(`Get one fields: ${typeof fields} ${JSON.stringify(fields)}`)
                    res.send(result);
                }
            )
            console.dir(query.sql)
            if (err) { console.log(err) }
            conn.release()
        }
    )
}

module.exports.create = (req, res) => {
    console.dir("Inbound Create")
    console.dir(req.body)
    db.pool.getConnection(
        (err, conn) => {
            const query = conn.query(
                `INSERT INTO appointments (dateTime, duration, clientName) VALUES (?, ?, ?);`,
                [req.body.dateTime, req.body.duration, req.body.clientName],
                (error, result) => {
                    if (error){
                        console.trace(error)
                    }
                    console.log(JSON.stringify(result))
                }
            )
            if (err) { console.log(err) }
            console.dir(query.sql)
            conn.release()
        }
    )
}
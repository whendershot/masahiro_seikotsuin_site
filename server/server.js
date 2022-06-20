const express = require("express")
const cors = require("cors")
const db = require("./config/mysql.config.js")
const APIAppointmentRoutes = require("./routes/appointment.routes")

// const Appointments = require("./controllers/appointment.controller")
// const Appointment = require("./models/appointment.model")

const app = express()
const API_SERVER_PORT = process.env.API_SERVER_PORT



app.use(
    cors(),
    express.json(),
    express.urlencoded({extended: true})
)

app.listen(
    API_SERVER_PORT,
    () => {
        console.log(`API Server started on port: ${API_SERVER_PORT}`)
    }
)

APIAppointmentRoutes(app)

// const test1 = new Appointment(1, new Date(), 30, "William")
// Appointments.create(db, test1)
// const group = Appointments.getAll(db)
// console.log(group)
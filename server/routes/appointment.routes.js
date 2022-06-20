const AppointmentController = require("../controllers/appointment.controller")

module.exports = (app) => {
    app.get("/api/appointments/", AppointmentController.getAll)
    app.post("/api/appointments/create/", AppointmentController.create)
}
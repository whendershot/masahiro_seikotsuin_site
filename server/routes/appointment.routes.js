const AppointmentController = require("../controllers/appointment.controller")

module.exports = (app) => {
    app.get("/api/appointments/", AppointmentController.getAll)
    app.get("/api/appointments/:id/", AppointmentController.get)
    app.put("/api/appointments/:id/", AppointmentController.updateById)
    app.post("/api/appointments/create/", AppointmentController.create)
    app.delete("/api/appointments/:id/", AppointmentController.deleteById)
}
class Appointment {
    constructor(id, dateTime, duration, clientName) {
        this.id = id || null
        this.dateTime = dateTime
        this.duration = duration
        this.clientName = clientName
    }
    //Have to make my own validation scheme?
}

module.exports = Appointment
import React from "react";
import Link from "@frontity/components/link"

const AppointmentList = (props) => {

    const {appointments} = props

    const appointmentListElement = (appointment, index) => {
        return (
            <tr key={index}>
                <td><Link link={`/appointments/${appointment.id}/`}>{appointment.dateTime}</Link></td>
                <td>{appointment.clientName}</td>
                <td>{appointment.duration}</td>
            </tr>
        )
    }

    return (
        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Client</th>
                        <th scope="col">Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment, index) => { return appointmentListElement(appointment, index)})}
                </tbody>
            </table>
        </div>
    )
}

export default AppointmentList
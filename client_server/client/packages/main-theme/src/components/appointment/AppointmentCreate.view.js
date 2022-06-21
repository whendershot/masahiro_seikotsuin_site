import React, {useState} from "react"
import axios from "axios"

import AppointmentForm from "./appointment.form.js"

const AppointmentCreateView = (props) => {

    const [errors, setErrors] = useState([])

    const addAppointment = (appointment) => {
        axios
            .post(
                "http://localhost:2580/api/appointments/create/", 
                appointment
            )
            .then(
                (response) => {
                    console.log(response)
                    navigate("/appointments/")
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                    setErrors(error.response.data.errors)
                }
            )
    }

    return (
        <>
            <AppointmentForm isEditable={true} onSubmit={addAppointment} errors={errors} />
        </>
    )
}

export default AppointmentCreateView
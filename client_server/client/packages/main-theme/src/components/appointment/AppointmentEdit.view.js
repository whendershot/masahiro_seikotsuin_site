import React, {useState, useEffect} from "react"
import axios from "axios"
import {connect} from "frontity"

import AppointmentForm from "./appointment.form"

const AppointmentEditView = ({state, props}) => {

    const data = state.source.get(state.router.link)
    const {id} = data

    const [errors, setErrors] = useState([])
    const [appointment, setAppointment] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(
        () => {
            axios
                .get(
                    `http://localhost:2580/api/appointments/${id}/`
                )
                .then(
                    (response) => {
                        console.log(response)
                        setAppointment(response.data[0])
                        setLoaded(true)
                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
                    }
                )
        },
        []
    )

    const editAppointment = (updatedAppointment) => {
        setLoaded(false)
        axios
            .put(
                `http://localhost:2580/api/appointments/${id}/`,
                updatedAppointment
            )
            .then(
                (response) => {
                    setAppointment(response.data[0])
                    setErrors([])
                    setLoaded(true)
                }
            )
            .catch(
                (error) => {
                    console.log("editPet")
                    console.log(error)
                }
            )
    }

    const cancelAppointment = (id) => {
        axios
            .delete(
                `http://localhost:2580/api/appointments/${id}/`,
            )
            .then(
                (response) => {
                    console.log(response)
                    actions.router.set(`/appointments/`)
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
    }

    return (
        <>
            {
            loaded ? 
            <>
            <h1>Appointment Details</h1>
            <AppointmentForm isEditable={true} appointment={appointment} errors={errors} onSubmit={editAppointment} />
            <div className="row justify-content-center mb-3 mt-3">
                <button onClick={() => cancelAppointment(appointment.id)} className="btn btn-primary col-3">Cancel Appointment</button>
            </div>
            </>
            :
            <h1>Loading Appointment Details</h1>
            }
        </>
    )
}

export default connect(AppointmentEditView)
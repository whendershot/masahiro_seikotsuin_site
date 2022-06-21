import React, {useEffect, useState} from "react"
// import {useParams} from "react-router-dom"
import {connect} from "frontity"
import axios from "axios"

import AppointmentForm from "./appointment.form"

const AppointmentDetailsView = ({state, props}) => {

    const data = state.source.get(state.router.link)

    const {id} = data

    const [appointment, setAppointment] = useState({})
    const [errors, setErrors] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(
        () => {
            getAppointment(id)
        },
        []
    )

    const getAppointment = (id) => {
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
    }

    return (
        <>
            {
            loaded ? 
            <>
            <h1>Appointment Details</h1>
            <AppointmentForm isEditable={false} appointment={appointment} errors={errors} />
            </>
            :
            <h1>Loading Appointment Details</h1>
            }
        </>
    )
}

export default connect(AppointmentDetailsView)
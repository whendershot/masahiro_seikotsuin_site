import React, {useState, useEffect} from "react"
import {useNavigate, useParams} from "react-router-dom"
import axios from "axios"

import AppointmentForm from "./appointment.form"

const AppointmentEditView = (props) => {

    const {id} = useParams()

    const [errors, setErrors] = useState([])
    const [appointment, setAppointment] = useState({})
    const [loaded, setLoaded] = useState(false)

    const navigate = useNavigate()

    useEffect(
        () => {
            axios
                .get(
                    "https://localhost:2580/api/appointments/" + id
                )
                .then(
                    (response) => {
                        console.log(response)
                        setAppointment(response.data)
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
        axios.put()
    }

    return (
        <>
        </>
    )
}

export default AppointmentEditView
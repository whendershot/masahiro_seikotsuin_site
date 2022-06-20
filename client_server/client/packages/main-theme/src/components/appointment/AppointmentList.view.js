import React, {useEffect, useState} from "react";
import axios from "axios";

import AppointmentList from "./appointment.list"

const AppointmentListView = (props) => {

    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:2580/api/appointments")
            .then(
                (res) => {
                    const _arr = [].concat(res.data.appointments)
                    setAppointments(_arr)
                }
            )
            .catch(
                (err) => {
                    console.log(err)
                }
            )
    }, [])

    return (
        <>
            <AppointmentList appointments={appointments} />
        </>
    )
}

export default AppointmentListView
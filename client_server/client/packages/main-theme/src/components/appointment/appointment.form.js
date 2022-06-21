import React, {useState} from "react"
import Link from "@frontity/components/link"
// import {usenavigate} from "react-router-dom"

const AppointmentForm = (props) => {

    const {
        isEditable,
        onSubmit,
        errors,
        appointment
    } = props

    const [_dateTime, setDateTime] = useState(appointment?.dateTime.slice(0, 16) || "")
    const [_duration, setDuration] = useState(appointment?.duration || 30)
    const [_clientName, setClientName] = useState(appointment?.clientName || "")
    const [_isEditable, setIsEditable] = useState(isEditable)

    const onSubmitHandler = (e) => {
        e.preventDefault()
        onSubmit({
            id: appointment.id,
            dateTime: formatToMySQLDateTime(_dateTime),
            duration: _duration,
            clientName: _clientName
        })
    }

    const formatToMySQLDateTime = (aDate) => {
        return new Date(aDate).toISOString().slice(0, 19).replace("T", " ")
    }


    return (
        <div className="container card">
            <form className="container m-3" onSubmit={ (e) => onSubmitHandler(e) }>
                <div className="row mb-3">
                    <label htmlFor="clientName" className="form-label col-form-label col-3">Name:</label>
                    <div className="col-9">
                        <input type="text" value={_clientName} className={`form-control${(!_isEditable && "-plaintext") || ""}`} readOnly={!_isEditable} name="clientName" onChange={ (e) => setClientName(e.target.value) }></input>
                    </div>
                </div>
                { errors?.clientName && <p className="text-danger row mb-3">{errors.clientName.message}</p> }
                <div className="row mb-3">
                    <label htmlFor="duration" className="form-label col-form-label col-3">Duration:</label>
                    <div className="col-9">
                        <input type="option" value={_duration} className={`form-control${(!_isEditable && "-plaintext") || ""}`} readOnly={!_isEditable} name="duration" onChange={ (e) => setDuration(e.target.value) }></input>
                    </div>
                </div>
                { errors?.duration && <p className="text-danger row mb-3">{errors.duration.message}</p> }
                <div className="row mb-3">
                    <label htmlFor="dateTime" className="form-label col-form-label col-3">Date and Time:</label>
                    <div className="col-9">
                        <input type="datetime-local" value={_dateTime} className={`form-control${(!_isEditable && "-plaintext") || ""}`} readOnly={!_isEditable} name="dateTime" onChange={ (e) => setDateTime(e.target.value) }></input>
                    </div>
                </div>
                { errors?.dateTime && <p className="text-danger row mb-3">{errors.dateTime.message}</p> }
                <div className="row">
                    {
                    isEditable ?
                    appointment ?
                    <button className="btn btn-primary" type="submit">Submit</button>
                    :
                    <button className="btn btn-primary" type="submit">Edit</button>
                    :
                    <Link link={`/appointments/${appointment.id}/edit`}>
                        <button className="btn btn-primary" type="button">
                            Edit
                        </button>
                    </Link>
                    }
                </div>
            </form>
        </div>
    )

}

export default AppointmentForm
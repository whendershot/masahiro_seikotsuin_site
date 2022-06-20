import React, {useContext} from "react"
import MetaSliderContext from "./metaslider.context"

const MetaSlide = (props) => {
    const context = useContext(MetaSliderContext)
    const addSlide = context.addSlide

    return (
        <>
        {props.children}
        </>
    )
}

export default MetaSlide
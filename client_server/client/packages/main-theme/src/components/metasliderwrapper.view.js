import React, { useState } from "react"
import { connect } from "frontity"

const MetaSliderWrapper = ({state}) => {

    const data = state.source.get(state.router.link)
    const [slideIndex, setSlideIndex] = useState(0)

    
    return (
        <div className="metaSliderWrapper">

        </div>
    )
}

export default MetaSliderWrapper
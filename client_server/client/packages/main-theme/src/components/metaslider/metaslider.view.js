import React, {useState, useEffect, useRef} from "react"
import MetaSliderContext from "./metaslider.context"

const MetaSlider = ( props ) => {
    console.log("I have created a MetaSlider!!")
    console.log(props.children)
    // console.log(React.Children.toArray(props.children))
    // console.log(React.Children.toArray(props.children).filter( (child)=>{child.props.className && child.props.className.includes("ms-image")} ))

    const [index, setIndex] = useState(0)
    const [slides, setSlides] = useState([])
    const timeoutRef = useRef(null)

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    const addSlide = (slide) => {
        setSlides( (_arr) => [..._arr, slide])
    }

    useEffect(
        () => {
            resetTimeout()
            timeoutRef.current = setTimeout(
                () => {
                    setIndex(
                        (prevIndex) => {
                            prevIndex 
                        }
                    )
                }
            )
        }
    )
    // useEffect(() =>)

    return (
        <div className="MyMetaSlider">
            <MetaSliderContext.Provider value={{addSlide}}>
                {props.children}
            </MetaSliderContext.Provider>
        </div>
    )
}

export default MetaSlider
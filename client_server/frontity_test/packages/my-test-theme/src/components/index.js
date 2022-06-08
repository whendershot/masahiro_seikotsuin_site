import React from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"

const Root = ({state}) => {
    return (
        <>
            <h1>Hello World, from Frontity/React!</h1>
            <p>Now as a component!</p>
            <p>Current URL: {state.router.link}</p>
            <nav>
                <Link link="/">Home</Link>
                <br/>
                <Link link="/page/2">More posts</Link>
                <br/>
                <Link link="/about-us">About us</Link>
            </nav>
        </>
    )
}

export default connect(Root)
import React from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"

import List from "./list.view"
import Post from "./post.view"

const Root = ({state}) => {
    const data = state.source.get(state.router.link)

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
            <hr />
            <main>
                <Switch>
                    <List when={data.isArchive}>This is a List</List>
                    <Post when={data.isPost}>This is a Post</Post>
                    <div when={data.isPage}>This is a Page</div>
                </Switch>
            </main>
        </>
    )
}

export default connect(Root)
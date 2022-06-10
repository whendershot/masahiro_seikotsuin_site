import React from "react"
import { connect, Global, css, styled } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"

import gutenbergStyle from "/wordpress/wp-includes/css/dist/block-library/style.css"
import gutenbergTheme from "/wordpress/wp-includes/css/dist/block-library/theme.css"
import metaGalleryStyle from "/wordpress/wp-content/plugins/ml-slider/metagallery/public/build/metagallery-styles.css"
import metaGalleryTheme from "/wordpress/wp-content/plugins/ml-slider/metagallery/public/build/theme.css"

import List from "./list.view"
import Post from "./post.view"
import Page from "./page.view"

const Root = ({state}) => {
    const data = state.source.get(state.router.link)

    return (
        <>
            <Global styles={css(gutenbergStyle)} />
            <Global styles={css(gutenbergTheme)} />
            <Global styles={css(metaGalleryStyle)} />
            <Global styles={css(metaGalleryTheme)} />
            <Global 
                styles={css`
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                        border: 1px dashed red;
                    }
                    
                    html {
                        font-family: system-ui, Verdana, Arial, sans-serif;
                    }
                `}
            />
            <Header>
                <HeaderContent>
                    <h1>Hello World, from Frontity/React!</h1>
                    <p>Now as a component!</p>
                    <p>Current URL: {state.router.link}</p>
                    <nav>
                        <Link link="/landing-page">Home</Link>
                        <br/>
                        <Link link="/page/2">More posts</Link>
                        <br/>
                        <Link link="/about-us">About us</Link>
                    </nav>
                </HeaderContent>
            </Header>
            <hr />
            <Main>
                <Switch>
                    <List when={data.isArchive}>This is a List</List>
                    <Post when={data.isPost}>This is a Post</Post>
                    <Page when={data.isPage}>This is a Page</Page>
                </Switch>
            </Main>
        </>
    )
}

export default connect(Root)

const Header = styled.header`
    background-color: #e5edee;
    border-width: 0 0 8px 0;
    border-style: solid;
    border-color: rebeccapurple;
    h1 {
        color: #4a4a4a;
    }
`

const HeaderContent = styled.div`
    max-width: 800px;
    padding: 2em 1em;
    margin: auto;
`
const Main = styled.main`
    max-width: 800px;
    padding: 1em;
    margin: auto;
    img {
        max-width: 100%;
    }
    h2 {
        margin: 0.5em 0;
    }
    p {
        line-height: 1.25em;
        margin-bottom: 0.75em;
    }
    figcaption {
        color: #828282;
        font-size: 0.8em;
        margin-bottom: 1em;
    }
`
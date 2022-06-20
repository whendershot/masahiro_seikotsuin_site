import { connect } from "frontity"

const description = (
    <>
        <p>There was an error loading the page.  Try refreshing the browser, or yell at the dev!</p>
    </>
)

const description404 = (
    <>
        <p>The page was not found.  Don't go looking too hard into those dark corners.</p>
    </>
)

const PageError = ({ state }) => {
    const data = state.source.get(state.router.link)

    const title = "Opps!"
    const title404 = "Page not found"

    return (
        <>
        <h1>{data.is404 ? title404 : title}</h1>
        <div>{data.is404 ? description404 : description}</div>
        </>
    )
}

export default connect(PageError)
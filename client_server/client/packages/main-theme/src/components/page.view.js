import React from "react"
import {connect, styled} from "frontity"

const Page = ({state}) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]

    return (
        <div>
            {/* <h2>{page.title.rendered}</h2> */}
            <PageStyle dangerouslySetInnerHTML={{__html: page.content.rendered}}></PageStyle>
        </div>
    )
}

export default connect(Page)

const PageStyle = styled.div`
    .metaslider .slides img {
        width: 100%;
        display: block;
    }
    
`
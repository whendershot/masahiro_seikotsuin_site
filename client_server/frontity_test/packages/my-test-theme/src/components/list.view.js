import React from "react"
import {connect} from "frontity"
import Link from "@frontity/components/link"

const List = ({state}) => {
    const data = state.source.get(state.router.link)

    const create_item = (item) => {
        const post  = state.source[item.type][item.id]
        
        return (
            <div key={item.id}>
                {item.type} - {item.id} - <Link link={post.link}>{post.title.rendered}</Link>
            </div>
        )
    }

    return (
        <div>
            {data.items.map((item) => create_item(item))}
        </div>
    )
}

export default connect(List)
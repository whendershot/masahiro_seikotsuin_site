import MetaSlider from "./metaslider.view"

const MetaSliderProcessor = {
    name: "meta-slider",
    test: ({ node }) => {
        return (
            node.type === "element" &&
            node.props?.className?.split(" ").includes("metaslider")
        )
    },
    processor: ({ node }) => {
        node.component = MetaSlider
        return node
    }
}

export default MetaSliderProcessor
import Root from "./components"
import MetaSliderProcessor from "./components/metaslider/metaslider.processor"

const mainTheme = {
  name: "main-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      // autoPrefetch: "in-view"
    }
  },
  source: {
    data: {
      "/appointments/create/" : {
        isReady: true
      }
    }
  },
  actions: {
    theme: {}
  },
  libraries: {
    html2react: {
      processors: [MetaSliderProcessor]
    }
  }
}

export default mainTheme
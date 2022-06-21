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
    },
    source: {
      data: {
        "/appointments/create/" : {
          isReady: true
        },
        "/appointments/" : {
          isReady: true
        }
      }
  },
  },
  actions: {
    theme: {}
  },
  libraries: {
    source: {
      handlers: [
        {
          pattern : "/appointments/:id",
          func: ({ state, link, params }) => {
            state.source.data[link] = {
              id: params.id,
              isAppointment: true
            }
          }
        },
        {
          pattern : "/appointments/:id/edit",
          func: ({ state, link, params }) => {
            state.source.data[link] = {
              id: params.id,
              isAppointment: true,
              isEditing: true
            }
          }
        }
      ]
    },
    html2react: {
      processors: [MetaSliderProcessor]
    }
  }
}

export default mainTheme
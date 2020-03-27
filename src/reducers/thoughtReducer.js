import { FETCH_THOUGHT } from "../actions/types"

let initialState = {
  thought: {
    url: "",
    content: "",
    date: {
      time: "",
      date: ""
    }
  },
  loading: true
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_THOUGHT:
      return {
        thought: action.payload,
        loading: false
      }
    default:
      return state
  }
}

import { FETCH_THOUGHT } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_THOUGHT:
      return {
        thought: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

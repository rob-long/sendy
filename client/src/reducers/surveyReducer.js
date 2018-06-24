import { ACTIONS } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case ACTIONS.NEW_SURVEY:
      return action.payload;
    default:
      return state;
  }
}

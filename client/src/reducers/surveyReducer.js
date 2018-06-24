import { ACTIONS } from "../actions";

export default function(state = {}, action) {
  //console.log("reducing", action);
  switch (action.type) {
    case ACTIONS.NEW_SURVEY:
      console.log("payload", action.payload);
      return action.payload;
    default:
      return state;
  }
}

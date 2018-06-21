import { ACTIONS } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case ACTIONS.AUTHENICATE:
      const user = action.payload;
      console.log(action.payload);
      return Object.assign({}, state, user);
    default:
      return state;
  }
}

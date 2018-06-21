import { ACTIONS } from "../actions";

export default function(state = null, action) {
  console.log(action);
  switch (action.type) {
    case ACTIONS.AUTHENICATE:
      // return false if not logged inspect
      // return user model if logged in
      // default return null
      return action.payload || false;
    //return Object.assign({}, state, user);
    default:
      return state;
  }
}

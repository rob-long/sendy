import axios from "axios";

export const ACTIONS = {
  AUTHENICATE: "AUTHENICATE"
};

// without redux thunk
export function authenticateOld() {
  const url = `/api/current_user`;
  const request = axios.get(url);
  return {
    type: ACTIONS.AUTHENICATE,
    payload: request
  };
}

// utilize redux thunk by returning an action instead of an action creator as above
// redux-thunk will automatically pass in the "hidden" dispatch for us to use
export const authenticateOld2 = () => {
  return function(dispatch) {
    axios
      .get("api/current_user")
      .then(res => dispatch({ type: ACTIONS.AUTHENICATE, payload: res }));
  };
};

// refactor using async await
// set payload to just the data property of response
export const authenticate = () => async dispatch => {
  const res = await axios.get("api/current_user");
  dispatch({ type: ACTIONS.AUTHENICATE, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: ACTIONS.AUTHENTICATE, payload: res.data });
};

import axios from "axios";

const ROOT_URL = ``;

export const ACTIONS = {
  AUTHENICATE: "AUTHENICATE"
};

export function authenticate() {
  const url = `${ROOT_URL}/api/current_user`;
  const request = axios.get(url);
  return {
    type: ACTIONS.AUTHENICATE,
    payload: request
  };
}

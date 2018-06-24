import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import surveyReducer from "./surveyReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  survey: surveyReducer
});

export default rootReducer;

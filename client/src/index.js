import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import ReduxPromise from "redux-promise";
import App from "./components/App";
import "./index.css";
import rootReducer from "./reducers";

//import registerServiceWorker from "./registerServiceWorker";

import axios from "axios";
window.axios = axios;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxPromise, thunk))
);

/*
const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk)(
  createStore
);
*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

//registerServiceWorker();

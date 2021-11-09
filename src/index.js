import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";
import rootReducer from "./reducers";

import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize";
import 'react-toastify/dist/ReactToastify.css';

const middlewares = [];
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middlewares))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

// Development only axios helpers!
import axios from "axios";
window.axios = axios;

const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  composeEnchancers(applyMiddleware(reduxThunk))
);

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

ReactDOM.render(
  <Elements stripe={stripePromise}>
    <Provider store={store}>
      <App />
    </Provider>
  </Elements>,
  document.querySelector("#root")
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import createStore from "./core/redux/redux.config";
import { Provider } from "react-redux";

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

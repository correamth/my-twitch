import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components";

//Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./redux/reducers";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

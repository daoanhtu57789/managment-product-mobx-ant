import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//kết nối đến store
import { Provider } from "mobx-react";
import ProductStore from "./Stores/ProductStore";
import RouterStore from "./Stores/RouterStore";
const Roots = (
  <Provider ProductStore={ProductStore} RouterStore={RouterStore}>
    <App />
  </Provider>
);
ReactDOM.render(Roots, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

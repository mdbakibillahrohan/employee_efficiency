import "antd/dist/reset.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import Store from "./Redux/index.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Provider store={Store}>
      <App />
    </Provider>
  </HashRouter>
);

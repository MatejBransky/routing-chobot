import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { router } from './router'

// TODO
console.log('Init', router)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

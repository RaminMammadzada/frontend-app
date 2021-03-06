import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import AppRouter from "./router/AppRouter";
import { config } from "dotenv";

config();
ReactDOM.render(<AppRouter />, document.getElementById("root"));

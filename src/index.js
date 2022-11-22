import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import store from "./app/store";
import MyReducer from "../src/store/Adduser/reducer";
import { configureStore } from "@reduxjs/toolkit";
const container =
  document.getElementById("root") || document.createElement("div");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

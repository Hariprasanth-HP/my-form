import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import MyReducer from "../src/store/Adduser/reducer";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({ reducer: MyReducer });
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

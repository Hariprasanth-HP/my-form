import { configureStore } from "@reduxjs/toolkit";
import MyReducer from "../store/Adduser/reducer";
export const store = configureStore({
  reducer: MyReducer,
});

export default store;

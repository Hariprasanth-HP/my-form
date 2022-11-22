import { combineReducers } from "@reduxjs/toolkit";
import { ADD_USER_DETAIL, UPDATE_USER_DETAIL } from "./constants";
const values = [];
// Use the initialState as a default value
function AddUserReducer(state = values, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case ADD_USER_DETAIL:
      const adduser = action.payload;
      return [...state, adduser];
    case UPDATE_USER_DETAIL:
      const updateuser = action.payload;
      return [updateuser];

    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
const MyReducer = combineReducers({ AddUserReducer });
export default MyReducer;

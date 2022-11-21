import { combineReducers } from "@reduxjs/toolkit";
import { ADD_USER_DETAIL } from "./constants";
// Use the initialState as a default value
function AddUserReducer(state = [], action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case ADD_USER_DETAIL:
      const user = action.payload;
      return (state = [...state, { user }]);
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
const MyReducer = combineReducers({ AddUserReducer });
export default MyReducer;

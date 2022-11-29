import { combineReducers } from "@reduxjs/toolkit";
import {
  ADD_USER_DETAIL,
  UPDATE_USER_DETAIL,
  EDIT_USER_DETAIL,
} from "./constants";
const values = {
  users: [],
  edituser: false,
};
// Use the initialState as a default value
function AddUserReducer(state = values, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case ADD_USER_DETAIL:
      const adduser = action.payload;
      return { ...state, users: [...state.users, adduser] };
    case EDIT_USER_DETAIL:
      const edituser = action.payload;
      return {
        ...state,
        users: state.users.map((user, index) =>
          user.name === edituser
            ? {
                ...user,
                edituser: true,
              }
            : user
        ),
        edituser: !state.edituser,
      };
    case UPDATE_USER_DETAIL:
      console.log("action.payload", action.payloaduser);
      const updateuser = action.payloaduser;
      const updateindex = action.payloadindex;
      return {
        ...state,
        users: state.users.map((user, index) =>
          index === updateindex
            ? {
                edituser: !user.edituser,
                name: updateuser.name,
                email: updateuser.email,
              }
            : user
        ),
        edituser: !state.edituser,
      };

    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
const MyReducer = combineReducers({ AddUserReducer });
export default MyReducer;

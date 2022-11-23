export const adduser = (user) => ({ type: "ADD_USER_DETAIL", payload: user });
export const edituser = (user) => ({
  type: "EDIT_USER_DETAIL",
  payload: user,
});
export const updateuser = (user, index) => ({
  type: "UPDATE_USER_DETAIL",
  payloaduser: user,
  payloadindex: index,
});

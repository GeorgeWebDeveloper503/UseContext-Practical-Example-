import { GET_USERS, GET_PROFILE } from "../types";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_USERS:
        // console.log(payload, type);
      return {
        ...state,
        users: payload,
      };
    case GET_PROFILE:
        // console.log(payload, type);
      return {
        ...state,
        selectedUser: payload,
      };
    default:
      return state;
  }
};
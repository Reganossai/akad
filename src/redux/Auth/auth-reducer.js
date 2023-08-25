import { SAVE_USER_TOKEN } from "./auth-types";

const INITIAL_STATE = {
  token: "",
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_USER_TOKEN:  
    localStorage.setItem('user-token', action.payload);
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

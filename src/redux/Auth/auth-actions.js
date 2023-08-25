import { SAVE_USER_TOKEN } from "./auth-types";

export const saveAuthToken = (token) => {
  return {
    type: SAVE_USER_TOKEN,
    payload: token,
  };
};
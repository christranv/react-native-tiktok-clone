import { AuthState, UPDATE_AUTH, REMOVE_AUTH } from "./types";

export const updateAuth = (newAuth: AuthState) => {
  return {
    type: UPDATE_AUTH,
    payload: newAuth
  };
}

export const removeAuth = () => {
  return {
    type: REMOVE_AUTH,
  }
}

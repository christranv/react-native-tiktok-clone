import { AuthState, UPDATE_AUTHEN, REMOVE_AUTHEN } from "./types";

export function updateAuthen(newAuthen: AuthState) {
  return {
    type: UPDATE_AUTHEN,
    payload: newAuthen
  };
}

export function removeAuthen() {
  return {
    type: REMOVE_AUTHEN,
  }
}

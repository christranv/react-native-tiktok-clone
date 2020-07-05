import { AuthActionTypes, AuthState, REMOVE_AUTH, UPDATE_AUTH } from "./types";

const initialState: AuthState = {
    loggedIn: false,
    token: "",
};

export const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
    switch (action.type) {
        case UPDATE_AUTH: {
            return {
                ...state,
                ...action.payload
            };
        }
        case REMOVE_AUTH: {
            return {
                ...state,
                loggedIn: false,
                token: ""
            }
        }
        default:
            return state;
    }
}

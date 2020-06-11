export interface AuthState {
    loggedIn: boolean;
    token: string;
}

export const UPDATE_AUTHEN = "UPDATE_AUTHEN";
export const REMOVE_AUTHEN = "REMOVE_AUTHEN";

interface UpdateAuthenAction {
    type: typeof UPDATE_AUTHEN;
    payload: AuthState;
}

interface RemoveAuthenAction {
    type: typeof REMOVE_AUTHEN;
}

export type AuthActionTypes = UpdateAuthenAction | RemoveAuthenAction; 
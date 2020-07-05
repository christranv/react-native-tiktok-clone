export interface AuthState {
    loggedIn: boolean;
    token: string;
}

export const UPDATE_AUTH = "UPDATE_AUTH";
export const REMOVE_AUTH = "REMOVE_AUTH";

interface UpdateAuthAction {
    type: typeof UPDATE_AUTH;
    payload: AuthState;
}

interface RemoveAuthAction {
    type: typeof REMOVE_AUTH;
}

export type AuthActionTypes = UpdateAuthAction | RemoveAuthAction; 
import { Dispatch } from "redux";
import { auth } from "../../db";
import { AuthAction, AUTH_TYPES } from "./types";

export const signIn = (email: string, password: string) => async (dispatch: Dispatch<AuthAction>) => {
    try {
        dispatch({ type: AUTH_TYPES.SIGN_IN_PREPARE });
        await auth.signInWithEmailAndPassword(email, password);
        dispatch({ type: AUTH_TYPES.SIGN_IN_SUCCEEDED });
    } catch (e) {
        dispatch({ type: AUTH_TYPES.SIGN_IN_FAILED });
    }
};

export const checkSignInState = () => async (dispatch: Dispatch<AuthAction>) => {
    try {
        dispatch({ type: AUTH_TYPES.CHECK_SIGN_IN_STATE_PREPARE });

        auth.onAuthStateChanged((user) => {
            if (user) dispatch({ type: AUTH_TYPES.CHECK_SIGN_IN_STATE_ALREADY_SIGN_IN });
            else dispatch({ type: AUTH_TYPES.CHECK_SIGN_IN_STATE_NOT_SIGN_IN });
        });
    } catch (e) {}
};

export const signOut = () => async (dispatch: Dispatch<AuthAction>) => {
    try {
        dispatch({ type: AUTH_TYPES.SIGN_OUT_PREPARE });
        await auth.signOut();
        dispatch({ type: AUTH_TYPES.SIGN_OUT_COMPLETED });
    } catch (e) {}
};

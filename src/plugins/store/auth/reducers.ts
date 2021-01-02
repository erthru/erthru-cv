import { AuthState, AuthAction, AUTH_TYPES } from "./types";

const initialState: AuthState = {
    isSignInSuccessfull: false,
    isSignInFailed: false,
    isSignInAttempting: false,
    isSignAlready: false,
    isNotSignIn: false,
    isCheckingSignInStatus: false,
    isSignOutSuccessfull: false,
    isSignOutAttempting: false,
};

const reducers = (state = initialState, { type }: AuthAction): AuthState => {
    switch (type) {
        case AUTH_TYPES.SIGN_IN_PREPARE:
            return {
                ...state,
                isSignInSuccessfull: false,
                isSignInFailed: false,
                isSignInAttempting: true,
            };

        case AUTH_TYPES.SIGN_IN_SUCCEEDED:
            return {
                ...state,
                isSignInSuccessfull: true,
                isSignInAttempting: false,
            };

        case AUTH_TYPES.SIGN_IN_FAILED:
            return {
                ...state,
                isSignInFailed: true,
                isSignInAttempting: false,
            };

        case AUTH_TYPES.CHECK_SIGN_IN_STATE_PREPARE:
            return {
                ...state,
                isSignAlready: false,
                isNotSignIn: false,
                isCheckingSignInStatus: true,
            };

        case AUTH_TYPES.CHECK_SIGN_IN_STATE_ALREADY_SIGN_IN:
            return {
                ...state,
                isSignAlready: true,
                isCheckingSignInStatus: false,
            };

        case AUTH_TYPES.CHECK_SIGN_IN_STATE_NOT_SIGN_IN:
            return {
                ...state,
                isNotSignIn: true,
                isCheckingSignInStatus: false,
            };

        case AUTH_TYPES.SIGN_OUT_PREPARE:
            return {
                ...state,
                isSignOutAttempting: true,
                isSignOutSuccessfull: false,
            };

        case AUTH_TYPES.SIGN_OUT_COMPLETED:
            return {
                ...state,
                isSignOutAttempting: false,
                isSignOutSuccessfull: true,
            };

        default:
            return state;
    }
};

export default reducers;

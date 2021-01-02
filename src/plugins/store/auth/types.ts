export enum AUTH_TYPES {
    SIGN_IN_PREPARE = "SIGN_IN_PREPARE",
    SIGN_IN_SUCCEEDED = "SIGN_IN_SUCCEEDED",
    SIGN_IN_FAILED = "SIGN_IN_FAILED",
    CHECK_SIGN_IN_STATE_PREPARE = "CHECK_SIGN_IN_STATE_PREPARE",
    CHECK_SIGN_IN_STATE_ALREADY_SIGN_IN = "CHECK_SIGN_IN_STATE_ALREADY_SIGN_IN",
    CHECK_SIGN_IN_STATE_NOT_SIGN_IN = "CHECK_SIGN_IN_STATE_ALREADY_SIGN",
    SIGN_OUT_PREPARE = "SIGN_OUT_PREPARE",
    SIGN_OUT_COMPLETED = "SIGN_OUT_COMPLETED",
}

export type AuthState = {
    isSignInSuccessfull: boolean;
    isSignInFailed: boolean;
    isSignInAttempting: boolean;
    isSignAlready: boolean;
    isNotSignIn: boolean;
    isCheckingSignInStatus: boolean;
    isSignOutSuccessfull: boolean;
    isSignOutAttempting: boolean;
};

export type AuthAction = {
    type: AUTH_TYPES;
};

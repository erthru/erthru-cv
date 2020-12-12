import { Action, State, TYPES } from "./types";

const initialState: State = {
    profile: {},
    isProfileUpdated: false,
};

const reducers = (state = initialState, { type, payload }: Action): State => {
    switch (type) {
        case TYPES.FETCH_PROFILE_PREPARE:
            return {
                ...state,
                isProfileUpdated: false,
                profile: {},
            };

        case TYPES.FETCH_PROFILE_COMPLETED:
            return {
                ...state,
                profile: payload?.profile!!,
            };

        case TYPES.UPDATE_PROFILE_PREPARE:
            return {
                ...state,
                isProfileUpdated: false,
            };

        case TYPES.UPDATE_PROFILE_COMPLETED:
            return {
                ...state,
                isProfileUpdated: true,
            };

        default:
            return state;
    }
};

export default reducers;

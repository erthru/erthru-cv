import { Action, State, TYPES } from "./types";

const initialState: State = {
    profile: {},
    isFetchingProfile: false,
    isUpdatingProfile: false,
    isProfileUpdated: false,
};

const reducers = (state = initialState, { type, payload }: Action): State => {
    switch (type) {
        case TYPES.FETCH_PROFILE_PREPARE:
            return {
                ...state,
                isFetchingProfile: true,
                profile: {},
            };

        case TYPES.FETCH_PROFILE_COMPLETED:
            return {
                ...state,
                isFetchingProfile: false,
                profile: payload?.profile!!,
            };

        case TYPES.UPDATE_PROFILE_PREPARE:
            return {
                ...state,
                isUpdatingProfile: true,
                isProfileUpdated: false,
            };

        case TYPES.UPDATE_PROFILE_COMPLETED:
            return {
                ...state,
                isUpdatingProfile: false,
                isProfileUpdated: true,
            };

        default:
            return state;
    }
};

export default reducers;

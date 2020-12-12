import { ProfileAction, ProfileState, PROFILE_TYPES } from "./types";

const initialState: ProfileState = {
    profile: {},
    isFetchingProfile: false,
    isUpdatingProfile: false,
    isProfileUpdated: false,
};

const reducers = (state = initialState, { type, payload }: ProfileAction): ProfileState => {
    switch (type) {
        case PROFILE_TYPES.FETCH_PROFILE_PREPARE:
            return {
                ...state,
                isFetchingProfile: true,
                profile: {},
            };

        case PROFILE_TYPES.FETCH_PROFILE_COMPLETED:
            return {
                ...state,
                isFetchingProfile: false,
                profile: payload?.profile!!,
            };

        case PROFILE_TYPES.UPDATE_PROFILE_PREPARE:
            return {
                ...state,
                isUpdatingProfile: true,
                isProfileUpdated: false,
            };

        case PROFILE_TYPES.UPDATE_PROFILE_COMPLETED:
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

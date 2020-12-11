import { State, Action, TYPES } from "./types";

const initialState: State = {
    workExperiences: [],
    workExperience: {},
    isNewWorkExperienceAdded: false,
    isWorkExperienceUpdated: false,
    isWorkExperienceRemoved: false,
};

const reducers = (state = initialState, { type, payload }: Action): State => {
    switch (type) {
        case TYPES.FETCH_WORK_EXPERIENCES_PREPARE:
            return {
                ...state,
                workExperiences: [],
            };

        case TYPES.FETCH_WORK_EXPERIENCES_COMPLETED:
            return {
                ...state,
                workExperiences: payload?.workExperiences!!,
            };

        case TYPES.FETCH_WORK_EXPERIENCE_PREPARE:
            return {
                ...state,
                workExperience: {},
            };

        case TYPES.FETCH_WORK_EXPERIENCE_COMPLETED:
            return {
                ...state,
                workExperience: payload?.workExperience!!,
            };

        case TYPES.ADD_WORK_EXPERIENCE_PREPARE:
            return {
                ...state,
                isNewWorkExperienceAdded: false,
            };

        case TYPES.ADD_WORK_EXPERIENCE_COMPLETED:
            return {
                ...state,
                isNewWorkExperienceAdded: true,
            };

        case TYPES.UPDATE_WORK_EXPERIENCE_PREPARE:
            return {
                ...state,
                isWorkExperienceUpdated: false,
            };

        case TYPES.UPDATE_WORK_EXPERIENCE_COMPLETED:
            return {
                ...state,
                isWorkExperienceUpdated: true,
            };

        case TYPES.REMOVE_WORK_EXPERIENCE_PREPARE:
            return {
                ...state,
                isWorkExperienceRemoved: false,
            };

        case TYPES.REMOVE_WORK_EXPERIENCE_COMPLETED:
            return {
                ...state,
                isWorkExperienceRemoved: true,
            };

        default:
            return state;
    }
};

export default reducers;

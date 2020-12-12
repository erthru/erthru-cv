import { State, Action, TYPES } from "./types";

const initialState: State = {
    workExperiences: [],
    workExperience: {},
    isNewWorkExperienceAdded: false,
    isWorkExperienceUpdated: false,
    isWorkExperienceRemoved: false,
    isFetchingWorkExperiences: false,
    isFetchingWorkExperience: false,
    isAddingWorkExperience: false,
    isUpdatingWorkExperience: false,
    isRemovingWorkExperience: false,
};

const reducers = (state = initialState, { type, payload }: Action): State => {
    switch (type) {
        case TYPES.FETCH_WORK_EXPERIENCES_PREPARE:
            return {
                ...state,
                isFetchingWorkExperiences: true,
                workExperiences: [],
            };

        case TYPES.FETCH_WORK_EXPERIENCES_COMPLETED:
            return {
                ...state,
                isFetchingWorkExperiences: false,
                workExperiences: payload?.workExperiences!!,
            };

        case TYPES.FETCH_WORK_EXPERIENCE_PREPARE:
            return {
                ...state,
                isFetchingWorkExperience: true,
                workExperience: {},
            };

        case TYPES.FETCH_WORK_EXPERIENCE_COMPLETED:
            return {
                ...state,
                isFetchingWorkExperience: false,
                workExperience: payload?.workExperience!!,
            };

        case TYPES.ADD_WORK_EXPERIENCE_PREPARE:
            return {
                ...state,
                isAddingWorkExperience: true,
                isNewWorkExperienceAdded: false,
            };

        case TYPES.ADD_WORK_EXPERIENCE_COMPLETED:
            return {
                ...state,
                isAddingWorkExperience: false,
                isNewWorkExperienceAdded: true,
            };

        case TYPES.UPDATE_WORK_EXPERIENCE_PREPARE:
            return {
                ...state,
                isUpdatingWorkExperience: true,
                isWorkExperienceUpdated: false,
            };

        case TYPES.UPDATE_WORK_EXPERIENCE_COMPLETED:
            return {
                ...state,
                isUpdatingWorkExperience: false,
                isWorkExperienceUpdated: true,
            };

        case TYPES.REMOVE_WORK_EXPERIENCE_PREPARE:
            return {
                ...state,
                isRemovingWorkExperience: true,
                isWorkExperienceRemoved: false,
            };

        case TYPES.REMOVE_WORK_EXPERIENCE_COMPLETED:
            return {
                ...state,
                isRemovingWorkExperience: false,
                isWorkExperienceRemoved: true,
            };

        default:
            return state;
    }
};

export default reducers;

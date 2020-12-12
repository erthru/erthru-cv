import { WorkExperineceState, WorkExperienceAction, WORK_EXPERIENCE_TYPES } from "./types";

const initialState: WorkExperineceState = {
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

const reducers = (state = initialState, { type, payload }: WorkExperienceAction): WorkExperineceState => {
    switch (type) {
        case WORK_EXPERIENCE_TYPES.FETCH_WORK_EXPERIENCES_PREPARE:
            return {
                ...state,
                isFetchingWorkExperiences: true,
                workExperiences: [],
            };

        case WORK_EXPERIENCE_TYPES.FETCH_WORK_EXPERIENCES_COMPLETED:
            return {
                ...state,
                isFetchingWorkExperiences: false,
                workExperiences: payload?.workExperiences!!,
            };

        case WORK_EXPERIENCE_TYPES.FETCH_WORK_EXPERIENCE_PREPARE:
            return {
                ...state,
                isFetchingWorkExperience: true,
                workExperience: {},
            };

        case WORK_EXPERIENCE_TYPES.FETCH_WORK_EXPERIENCE_COMPLETED:
            return {
                ...state,
                isFetchingWorkExperience: false,
                workExperience: payload?.workExperience!!,
            };

        case WORK_EXPERIENCE_TYPES.ADD_WORK_EXPERIENCE_PREPARE:
            return {
                ...state,
                isAddingWorkExperience: true,
                isNewWorkExperienceAdded: false,
            };

        case WORK_EXPERIENCE_TYPES.ADD_WORK_EXPERIENCE_COMPLETED:
            return {
                ...state,
                isAddingWorkExperience: false,
                isNewWorkExperienceAdded: true,
            };

        case WORK_EXPERIENCE_TYPES.UPDATE_WORK_EXPERIENCE_PREPARE:
            return {
                ...state,
                isUpdatingWorkExperience: true,
                isWorkExperienceUpdated: false,
            };

        case WORK_EXPERIENCE_TYPES.UPDATE_WORK_EXPERIENCE_COMPLETED:
            return {
                ...state,
                isUpdatingWorkExperience: false,
                isWorkExperienceUpdated: true,
            };

        case WORK_EXPERIENCE_TYPES.REMOVE_WORK_EXPERIENCE_PREPARE:
            return {
                ...state,
                isRemovingWorkExperience: true,
                isWorkExperienceRemoved: false,
            };

        case WORK_EXPERIENCE_TYPES.REMOVE_WORK_EXPERIENCE_COMPLETED:
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

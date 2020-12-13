import { FormalEducationState, FormalEducationAction, FORMAL_EDUCATION_TYPES } from "./types";

const initialState: FormalEducationState = {
    formalEducations: [],
    formalEducation: {},
    isFetchingFormalEducations: false,
    isFetchingFormalEducation: false,
    isNewFormalEducationAdded: false,
    isFormalEducationUpdated: false,
    isFormalEducationRemoved: false,
    isAddingFormalEducation: false,
    isUpdatingFormalEducation: false,
    isRemovingFormalEducation: false,
};

const reducers = (state = initialState, { type, payload }: FormalEducationAction): FormalEducationState => {
    switch (type) {
        case FORMAL_EDUCATION_TYPES.FETCH_FORMAL_EDUCATIONS_PREPARE:
            return {
                ...state,
                isFetchingFormalEducations: true,
                formalEducations: [],
            };

        case FORMAL_EDUCATION_TYPES.FETCH_FORMAL_EDUCATIONS_COMPLETED:
            return {
                ...state,
                isFetchingFormalEducations: false,
                formalEducations: payload?.formalEducations!!,
            };

        case FORMAL_EDUCATION_TYPES.FETCH_FORMAL_EDUCATION_PREPARE:
            return {
                ...state,
                isFetchingFormalEducation: true,
                formalEducation: {},
            };

        case FORMAL_EDUCATION_TYPES.FETCH_FORMAL_EDUCATION_COMPLETED:
            return {
                ...state,
                isFetchingFormalEducation: false,
                formalEducation: payload?.formalEducation!!,
            };

        case FORMAL_EDUCATION_TYPES.ADD_FORMAL_EDUCATION_PREPARE:
            return {
                ...state,
                isAddingFormalEducation: true,
                isNewFormalEducationAdded: false,
            };

        case FORMAL_EDUCATION_TYPES.ADD_FORMAL_EDUCATION_COMPLETED:
            return {
                ...state,
                isAddingFormalEducation: false,
                isNewFormalEducationAdded: true,
            };

        case FORMAL_EDUCATION_TYPES.UPDATE_FORMAL_EDUCATION_PREPARE:
            return {
                ...state,
                isUpdatingFormalEducation: true,
                isFormalEducationUpdated: false,
            };

        case FORMAL_EDUCATION_TYPES.UPDATE_FORMAL_EDUCATION_COMPLETED:
            return {
                ...state,
                isUpdatingFormalEducation: false,
                isFormalEducationUpdated: true,
            };

        case FORMAL_EDUCATION_TYPES.REMOVE_FORMAL_EDUCATION_PREPARE:
            return {
                ...state,
                isRemovingFormalEducation: true,
                isFormalEducationRemoved: false,
            };

        case FORMAL_EDUCATION_TYPES.REMOVE_FORMAL_EDUCATION_COMPLETED:
            return {
                ...state,
                isRemovingFormalEducation: false,
                isFormalEducationRemoved: true,
            };

        default:
            return state;
    }
};

export default reducers;

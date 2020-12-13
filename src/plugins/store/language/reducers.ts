import { LanguageState, LanguageAction, LANGUAGE_TYPES } from "./types";

const initialState: LanguageState = {
    languages: [],
    isNewLanguageAdded: false,
    isLanguageUpdated: false,
    isLanguageRemoved: false,
    isFetchingLanguage: false,
    isAddingLanguage: false,
    isUpdaingLanguage: false,
    isRemovingLanguage: false,
};

const reducers = (state = initialState, { type, payload }: LanguageAction): LanguageState => {
    switch (type) {
        case LANGUAGE_TYPES.FETCH_LANGUAGES_PREPARE:
            return {
                ...state,
                languages: [],
                isFetchingLanguage: true,
            };
        case LANGUAGE_TYPES.FETCH_LANGUAGES_COMPLETED:
            return {
                ...state,
                languages: payload?.languages!!,
                isFetchingLanguage: false,
            };
        case LANGUAGE_TYPES.ADD_LANGUAGE_PREPARE:
            return {
                ...state,
                isNewLanguageAdded: false,
                isAddingLanguage: true,
            };
        case LANGUAGE_TYPES.ADD_LANGUAGE_COMPLETED:
            return {
                ...state,
                isNewLanguageAdded: true,
                isAddingLanguage: false,
            };
        case LANGUAGE_TYPES.UPDATE_LANGUAGE_PREPARE:
            return {
                ...state,
                isLanguageUpdated: false,
                isUpdaingLanguage: true,
            };
        case LANGUAGE_TYPES.UPDATE_LANGUAGE_COMPLETED:
            return {
                ...state,
                isLanguageUpdated: true,
                isUpdaingLanguage: false,
            };
        case LANGUAGE_TYPES.REMOVE_LANGUAGE_PREPARE:
            return {
                ...state,
                isLanguageRemoved: false,
                isRemovingLanguage: true,
            };
        case LANGUAGE_TYPES.REMOVE_LANGUAGE_COMPLETED:
            return {
                ...state,
                isLanguageRemoved: true,
                isRemovingLanguage: false,
            };

        default:
            return state;
    }
};

export default reducers;

import { LanguageState, LanguageAction, LANGUAGE_TYPES } from "./types";

const initialState: LanguageState = {
    languages: [],
    languageToUpdate: {},
    isNewLanguageAdded: false,
    isLanguageUpdated: false,
    isLanguageRemoved: false,
    isFetchingLanguages: false,
    isAddingLanguage: false,
    isUpdatingLanguage: false,
    isRemovingLanguage: false,
};

const reducers = (state = initialState, { type, payload }: LanguageAction): LanguageState => {
    switch (type) {
        case LANGUAGE_TYPES.FETCH_LANGUAGES_PREPARE:
            return {
                ...state,
                languages: [],
                isFetchingLanguages: true,
            };

        case LANGUAGE_TYPES.FETCH_LANGUAGES_COMPLETED:
            return {
                ...state,
                languages: payload?.languages!!,
                isFetchingLanguages: false,
            };

        case LANGUAGE_TYPES.SET_LANGUAGE_TO_UPDATE:
            return {
                ...state,
                languageToUpdate: payload?.languageToUpdate!!,
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
                isUpdatingLanguage: true,
            };

        case LANGUAGE_TYPES.UPDATE_LANGUAGE_COMPLETED:
            return {
                ...state,
                isLanguageUpdated: true,
                isUpdatingLanguage: false,
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

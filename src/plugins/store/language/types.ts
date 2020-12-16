export enum LANGUAGE_TYPES {
    FETCH_LANGUAGES_PREPARE = "FETCH_LANGUAGES_PREPARE",
    FETCH_LANGUAGES_COMPLETED = "FETCH_LANGUAGES_COMPLETED",
    SET_LANGUAGE_TO_UPDATE = "SET_LANGUAGE_TO_UPDATE",
    ADD_LANGUAGE_PREPARE = "ADD_LANGUAGE_PREPARE",
    ADD_LANGUAGE_COMPLETED = "ADD_LANGUAGE_COMPLETED",
    UPDATE_LANGUAGE_PREPARE = "UPDATE_LANGUAGE_PREPARE",
    UPDATE_LANGUAGE_COMPLETED = "UPDATE_LANGUAGE_COMPLETED",
    REMOVE_LANGUAGE_PREPARE = "REMOVE_LANGUAGE_PREPARE",
    REMOVE_LANGUAGE_COMPLETED = "REMOVE_LANGUAGE_COMPLETED",
}

export const LANGUAGE_COL_NAME = "languages";

export enum LanguageField {
    lang = "lang",
    level = "level",
    createdOn = "createdOn",
    updatedOn = "updatedOn",
}

export enum LanguageLevel {
    native = "Native",
    active = "Active",
    passive = "Passive",
}

export type Language = {
    id?: string;
    [LanguageField.lang]?: string;
    [LanguageField.level]?: LanguageLevel;
    [LanguageField.createdOn]?: Date;
    [LanguageField.updatedOn]?: Date;
};

export type LanguageState = {
    languages: Language[];
    languageToUpdate: Language;
    isNewLanguageAdded: boolean;
    isLanguageUpdated: boolean;
    isLanguageRemoved: boolean;
    isFetchingLanguages: boolean;
    isAddingLanguage: boolean;
    isUpdatingLanguage: boolean;
    isRemovingLanguage: boolean;
};

export type LanguageAction = {
    type: LANGUAGE_TYPES;
    payload?: {
        languages?: Language[];
        languageToUpdate?: Language;
    };
};

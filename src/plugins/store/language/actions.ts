import { Dispatch } from "react";
import db from "../../db";
import { Language, LanguageAction, LanguageField, LanguageLevel, LANGUAGE_COL_NAME, LANGUAGE_TYPES } from "./types";

export const fetchLanguages = () => async (dispatch: Dispatch<LanguageAction>) => {
    try {
        dispatch({ type: LANGUAGE_TYPES.FETCH_LANGUAGES_PREPARE });

        const languages: any[] = [];
        let languagesSnapshots = await db.collection(LANGUAGE_COL_NAME).orderBy(LanguageField.createdOn, "desc").get();

        languagesSnapshots.docs.map((doc) => {
            languages.push({
                id: doc.id,
                ...doc.data(),
            });
        });

        dispatch({ type: LANGUAGE_TYPES.FETCH_LANGUAGES_COMPLETED, payload: { languages: languages as Language[] } });
    } catch (e) {}
};

export const setLanguageToUpdate = (language: Language) => (dispatch: Dispatch<LanguageAction>) => {
    dispatch({ type: LANGUAGE_TYPES.SET_LANGUAGE_TO_UPDATE, payload: { languageToUpdate: language } });
};

export const addLanguage = (language: Language) => async (dispatch: Dispatch<LanguageAction>) => {
    try {
        dispatch({ type: LANGUAGE_TYPES.ADD_LANGUAGE_PREPARE });

        await db.collection(LANGUAGE_COL_NAME).add({
            [LanguageField.createdOn]: new Date(),
            [LanguageField.updatedOn]: new Date(),
            ...language,
        });

        dispatch({ type: LANGUAGE_TYPES.ADD_LANGUAGE_COMPLETED });
    } catch (e) {}
};

export const updateLanguage = (id: string, language: Language) => async (dispatch: Dispatch<LanguageAction>) => {
    try {
        dispatch({ type: LANGUAGE_TYPES.UPDATE_LANGUAGE_PREPARE });

        await db
            .collection(LANGUAGE_COL_NAME)
            .doc(id)
            .update({
                [LanguageField.updatedOn]: new Date(),
                ...language,
            });

        dispatch({ type: LANGUAGE_TYPES.UPDATE_LANGUAGE_COMPLETED });
    } catch (e) {}
};

export const removeLanguage = (id: string) => async (dispatch: Dispatch<LanguageAction>) => {
    try {
        dispatch({ type: LANGUAGE_TYPES.REMOVE_LANGUAGE_PREPARE });
        await db.collection(LANGUAGE_COL_NAME).doc(id).delete();
        dispatch({ type: LANGUAGE_TYPES.REMOVE_LANGUAGE_COMPLETED });
    } catch (e) {}
};

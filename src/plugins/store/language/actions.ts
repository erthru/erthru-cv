import { Dispatch } from "react";
import db from "../../db";
import { Language, LanguageAction, LanguageField, LanguageLevel, LANGUAGE_COL_NAME, LANGUAGE_TYPES } from "./types";

export const fetchLanguages = () => async (dispatch: Dispatch<LanguageAction>) => {
    try {
        dispatch({ type: LANGUAGE_TYPES.FETCH_LANGUAGES_PREPARE });

        const languages: any[] = [];
        let languagesSnapshots = await db.collection(LANGUAGE_COL_NAME).orderBy(LanguageField.createdOn, "desc").get();

        if (languagesSnapshots.docs.length === 0) {
            await db.collection(LANGUAGE_COL_NAME).add({
                [LanguageField.lang]: "日本語",
                [LanguageField.level]: LanguageLevel.passive,
                [LanguageField.createdOn]: new Date(),
                [LanguageField.updatedOn]: new Date(),
            });

            await db.collection(LANGUAGE_COL_NAME).add({
                [LanguageField.lang]: "English",
                [LanguageField.level]: LanguageLevel.passive,
                [LanguageField.createdOn]: new Date(),
                [LanguageField.updatedOn]: new Date(),
            });

            await db.collection(LANGUAGE_COL_NAME).add({
                [LanguageField.lang]: "Indonesian",
                [LanguageField.level]: LanguageLevel.native,
                [LanguageField.createdOn]: new Date(),
                [LanguageField.updatedOn]: new Date(),
            });

            languagesSnapshots = await db.collection(LANGUAGE_COL_NAME).orderBy(LanguageField.createdOn, "desc").get();
        }

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

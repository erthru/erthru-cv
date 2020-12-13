import { Dispatch } from "react";
import db from "../../db";
import { FormalEducation, FormalEducationAction, FormalEducationField, FORMAL_EDUCATION_COL_NAME, FORMAL_EDUCATION_TYPES } from "./types";

export const fetchFormalEducations = () => async (dispatch: Dispatch<FormalEducationAction>) => {
    try {
        dispatch({ type: FORMAL_EDUCATION_TYPES.FETCH_FORMAL_EDUCATIONS_PREPARE });

        const formalEducations: any[] = [];
        let formalEducationsSnapshots = await db.collection(FORMAL_EDUCATION_COL_NAME).orderBy(FormalEducationField.createdOn, "desc").get();

        if (formalEducationsSnapshots.docs.length === 0) {
            await db.collection(FORMAL_EDUCATION_COL_NAME).add({
                [FormalEducationField.timeframe]: "2011 - 2014",
                [FormalEducationField.place]: "SMKN 1 Gorontalo",
                [FormalEducationField.majors]: "Computer and Network Enginering",
                [FormalEducationField.createdOn]: new Date(),
                [FormalEducationField.updatedOn]: new Date(),
            });

            formalEducationsSnapshots = await db.collection(FORMAL_EDUCATION_COL_NAME).orderBy(FormalEducationField.createdOn, "desc").get();
        }

        formalEducationsSnapshots.docs.map((doc) => {
            formalEducations.push({
                id: doc.id,
                ...doc.data(),
            });
        });

        dispatch({
            type: FORMAL_EDUCATION_TYPES.FETCH_FORMAL_EDUCATIONS_COMPLETED,
            payload: { formalEducations: formalEducations as FormalEducation[] },
        });
    } catch (e) {}
};

export const fetchFormalEducation = (id: string) => async (dispatch: Dispatch<FormalEducationAction>) => {
    try {
        dispatch({ type: FORMAL_EDUCATION_TYPES.FETCH_FORMAL_EDUCATION_PREPARE });
        const formalEducationDoc = await db.collection(FORMAL_EDUCATION_COL_NAME).doc(id).get();

        let formalEducation: any = {
            id: formalEducationDoc.id,
            ...formalEducationDoc.data(),
        };

        dispatch({ type: FORMAL_EDUCATION_TYPES.FETCH_FORMAL_EDUCATION_COMPLETED, payload: { formalEducation: formalEducation as FormalEducation } });
    } catch (e) {}
};

export const addFormalEducation = (formalEducation: FormalEducation) => async (dispatch: Dispatch<FormalEducationAction>) => {
    try {
        dispatch({ type: FORMAL_EDUCATION_TYPES.ADD_FORMAL_EDUCATION_PREPARE });

        await db.collection(FORMAL_EDUCATION_COL_NAME).add({
            [FormalEducationField.createdOn]: new Date(),
            [FormalEducationField.updatedOn]: new Date(),
            ...formalEducation,
        });

        dispatch({ type: FORMAL_EDUCATION_TYPES.ADD_FORMAL_EDUCATION_COMPLETED });
    } catch (e) {}
};

export const updateFormalEducation = (id: string, formalEducation: FormalEducation) => async (dispatch: Dispatch<FormalEducationAction>) => {
    try {
        dispatch({ type: FORMAL_EDUCATION_TYPES.UPDATE_FORMAL_EDUCATION_PREPARE });

        await db
            .collection(FORMAL_EDUCATION_COL_NAME)
            .doc(id)
            .update({
                [FormalEducationField.updatedOn]: new Date(),
                ...formalEducation,
            });

        dispatch({ type: FORMAL_EDUCATION_TYPES.UPDATE_FORMAL_EDUCATION_COMPLETED });
    } catch (e) {}
};

export const removeFormalEducation = (id: string) => async (dispatch: Dispatch<FormalEducationAction>) => {
    try {
        dispatch({ type: FORMAL_EDUCATION_TYPES.REMOVE_FORMAL_EDUCATION_PREPARE });
        await db.collection(FORMAL_EDUCATION_COL_NAME).doc(id).delete();
        dispatch({ type: FORMAL_EDUCATION_TYPES.REMOVE_FORMAL_EDUCATION_COMPLETED });
    } catch (e) {}
};

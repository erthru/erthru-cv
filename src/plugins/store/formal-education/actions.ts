import { Dispatch } from "react";
import db from "../../db";
import { FormalEducation, FormalEducationAction, FormalEducationField, FORMAL_EDUCATION_COL_NAME, FORMAL_EDUCATION_TYPES } from "./types";

export const fetchFormalEducations = () => async (dispatch: Dispatch<FormalEducationAction>) => {
    try {
        dispatch({ type: FORMAL_EDUCATION_TYPES.FETCH_FORMAL_EDUCATIONS_PREPARE });

        const formalEducations: any[] = [];
        let formalEducationsSnapshots = await db.collection(FORMAL_EDUCATION_COL_NAME).get();

        if (formalEducationsSnapshots.docs.length === 0) {
            await db.collection(FORMAL_EDUCATION_COL_NAME).add({
                [FormalEducationField.timeframe]: "2011 - 2014",
                [FormalEducationField.place]: "SMKN 1 Gorontalo",
                [FormalEducationField.majors]: "Computer and Network Enginering",
                [FormalEducationField.createdOn]: new Date(),
                [FormalEducationField.updatedOn]: new Date(),
            });

            formalEducationsSnapshots = await db.collection(FORMAL_EDUCATION_COL_NAME).get();
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

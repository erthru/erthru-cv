import { Dispatch } from "redux";
import db from "../../db";
import { Action, TYPES, COL_NAME, WorkExperienceField, WorkExperience } from "./types";

export const fetchWorkExperiences = () => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: TYPES.FETCH_WORK_EXPERIENCES_PREPARE });

        let workExperiences: any[] = [];
        let workExperiencesSnapshot = await db.collection(COL_NAME).get();

        if (workExperiencesSnapshot.docs.length === 0) {
            await db.collection(COL_NAME).add({
                [WorkExperienceField.description]: "2016 - Present",
                [WorkExperienceField.place]: "Cafe Stile",
                [WorkExperienceField.activities]: ["Serving guest", "Cosplay as sadistic character"],
                [WorkExperienceField.createdOn]: new Date(),
                [WorkExperienceField.updatedOn]: new Date(),
            });

            workExperiencesSnapshot = await db.collection(COL_NAME).get();
        }

        workExperiencesSnapshot.docs.map((doc) => {
            workExperiences.push({
                id: doc.id,
                ...doc.data(),
            });
        });

        dispatch({ type: TYPES.FETCH_WORK_EXPERIENCES_COMPLETED, payload: { workExperiences: workExperiences as WorkExperience[] } });
    } catch (e) {}
};

export const fetchWorkExperience = (id: string) => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: TYPES.FETCH_WORK_EXPERIENCE_PREPARE });

        let workExperience: any = {};
        const workExperienceDoc = await db.collection(COL_NAME).doc(id).get();

        workExperience = {
            id: workExperienceDoc.id,
            ...workExperienceDoc.data(),
        };

        dispatch({ type: TYPES.FETCH_WORK_EXPERIENCE_COMPLETED, payload: { workExperience: workExperience as WorkExperience } });
    } catch (e) {}
};

export const addWorkExperience = (workExperience: WorkExperience) => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: TYPES.ADD_WORK_EXPERIENCE_PREPARE });

        await db.collection(COL_NAME).add({
            [WorkExperienceField.createdOn]: new Date(),
            [WorkExperienceField.updatedOn]: new Date(),
            ...workExperience,
        });

        dispatch({ type: TYPES.ADD_WORK_EXPERIENCE_COMPLETED });
    } catch (e) {}
};

export const updateWorkExperience = (id: string, workExperience: WorkExperience) => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: TYPES.UPDATE_WORK_EXPERIENCE_PREPARE });

        await db
            .collection(COL_NAME)
            .doc(id)
            .update({
                [WorkExperienceField.updatedOn]: new Date(),
                ...workExperience,
            });

        dispatch({ type: TYPES.UPDATE_WORK_EXPERIENCE_COMPLETED });
    } catch (e) {}
};

export const removeWorkExperience = (id: string) => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: TYPES.REMOVE_WORK_EXPERIENCE_PREPARE });
        await db.collection(COL_NAME).doc(id).delete();
        dispatch({ type: TYPES.REMOVE_WORK_EXPERIENCE_COMPLETED });
    } catch (e) {}
};

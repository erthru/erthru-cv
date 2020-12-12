import { Dispatch } from "redux";
import db from "../../db";
import { WorkExperienceAction, WORK_EXPERIENCE_TYPES, WORK_EXPERIENCE_COL_NAME, WorkExperienceField, WorkExperience } from "./types";

export const fetchWorkExperiences = () => async (dispatch: Dispatch<WorkExperienceAction>) => {
    try {
        dispatch({ type: WORK_EXPERIENCE_TYPES.FETCH_WORK_EXPERIENCES_PREPARE });

        let workExperiences: any[] = [];
        let workExperiencesSnapshot = await db.collection(WORK_EXPERIENCE_COL_NAME).orderBy(WorkExperienceField.createdOn, "desc").get();

        if (workExperiencesSnapshot.docs.length === 0) {
            await db.collection(WORK_EXPERIENCE_COL_NAME).add({
                [WorkExperienceField.timeframe]: "2016 - Present",
                [WorkExperienceField.place]: "Cafe Stile",
                [WorkExperienceField.activities]: ["Serving guest", "Cosplay as sadistic character"],
                [WorkExperienceField.createdOn]: new Date(),
                [WorkExperienceField.updatedOn]: new Date(),
            });

            workExperiencesSnapshot = await db.collection(WORK_EXPERIENCE_COL_NAME).orderBy(WorkExperienceField.createdOn, "desc").get();
        }

        workExperiencesSnapshot.docs.map((doc) => {
            workExperiences.push({
                id: doc.id,
                ...doc.data(),
            });
        });

        dispatch({ type: WORK_EXPERIENCE_TYPES.FETCH_WORK_EXPERIENCES_COMPLETED, payload: { workExperiences: workExperiences as WorkExperience[] } });
    } catch (e) {}
};

export const fetchWorkExperience = (id: string) => async (dispatch: Dispatch<WorkExperienceAction>) => {
    try {
        dispatch({ type: WORK_EXPERIENCE_TYPES.FETCH_WORK_EXPERIENCE_PREPARE });

        let workExperience: any = {};
        const workExperienceDoc = await db.collection(WORK_EXPERIENCE_COL_NAME).doc(id).get();

        workExperience = {
            id: workExperienceDoc.id,
            ...workExperienceDoc.data(),
        };

        dispatch({ type: WORK_EXPERIENCE_TYPES.FETCH_WORK_EXPERIENCE_COMPLETED, payload: { workExperience: workExperience as WorkExperience } });
    } catch (e) {}
};

export const addWorkExperience = (workExperience: WorkExperience) => async (dispatch: Dispatch<WorkExperienceAction>) => {
    try {
        dispatch({ type: WORK_EXPERIENCE_TYPES.ADD_WORK_EXPERIENCE_PREPARE });

        await db.collection(WORK_EXPERIENCE_COL_NAME).add({
            [WorkExperienceField.createdOn]: new Date(),
            [WorkExperienceField.updatedOn]: new Date(),
            ...workExperience,
        });

        dispatch({ type: WORK_EXPERIENCE_TYPES.ADD_WORK_EXPERIENCE_COMPLETED });
    } catch (e) {}
};

export const updateWorkExperience = (id: string, workExperience: WorkExperience) => async (dispatch: Dispatch<WorkExperienceAction>) => {
    try {
        dispatch({ type: WORK_EXPERIENCE_TYPES.UPDATE_WORK_EXPERIENCE_PREPARE });

        await db
            .collection(WORK_EXPERIENCE_COL_NAME)
            .doc(id)
            .update({
                [WorkExperienceField.updatedOn]: new Date(),
                ...workExperience,
            });

        dispatch({ type: WORK_EXPERIENCE_TYPES.UPDATE_WORK_EXPERIENCE_COMPLETED });
    } catch (e) {}
};

export const removeWorkExperience = (id: string) => async (dispatch: Dispatch<WorkExperienceAction>) => {
    try {
        dispatch({ type: WORK_EXPERIENCE_TYPES.REMOVE_WORK_EXPERIENCE_PREPARE });
        await db.collection(WORK_EXPERIENCE_COL_NAME).doc(id).delete();
        dispatch({ type: WORK_EXPERIENCE_TYPES.REMOVE_WORK_EXPERIENCE_COMPLETED });
    } catch (e) {}
};

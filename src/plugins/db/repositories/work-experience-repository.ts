import db from "..";

const COL_NAME = "workExperiences";

enum WorkExperienceField {
    description = "description",
    place = "place",
    activities = "activities",
}

export type WorkExperience = {
    id?: string;
    [WorkExperienceField.description]: string;
    [WorkExperienceField.place]: string;
    [WorkExperienceField.activities]: string[];
};

export const getAll = async (): Promise<WorkExperience[]> => {
    let workExperiences: any[] = [];
    let workExperiencesSnapshot = await db.collection(COL_NAME).get();

    if (workExperiencesSnapshot.docs.length === 0) {
        await db.collection(COL_NAME).add({
            [WorkExperienceField.description]: "2016 - Present",
            [WorkExperienceField.place]: "Cafe Stile",
            [WorkExperienceField.activities]: ["Serving guest", "Cosplay as sadistic character"],
        });

        workExperiencesSnapshot = await db.collection(COL_NAME).get();
    }

    workExperiencesSnapshot.docs.map((doc) => {
        workExperiences.push({
            id: doc.id,
            ...doc.data(),
        });
    });

    return workExperiences as WorkExperience[];
};

export const add = async (workExperience: WorkExperience): Promise<WorkExperience> => {
    const workExperienceDoc = await db.collection(COL_NAME).add(workExperience);

    return {
        id: workExperienceDoc.id,
        ...workExperience,
    } as WorkExperience;
};

export const update = async (id: string, workExperience: WorkExperience): Promise<WorkExperience> => {
    await db.collection(COL_NAME).doc(id).update(workExperience);

    return {
        id: id,
        ...workExperience,
    } as WorkExperience;
};

export const remove = async (id: string) => {
    await db.collection(COL_NAME).doc(id).delete();
};

export enum WORK_EXPERIENCE_TYPES {
    FETCH_WORK_EXPERIENCES_PREPARE = "FETCH_WORK_EXPERIENCES_PREPARE",
    FETCH_WORK_EXPERIENCES_COMPLETED = "FETCH_WORK_EXPERIENCES_COMPLETED",
    FETCH_WORK_EXPERIENCE_PREPARE = "FETCH_WORK_EXPERIENCE_PREPARE",
    FETCH_WORK_EXPERIENCE_COMPLETED = "FETCH_WORK_EXPERIENCE_COMPLETED",
    ADD_WORK_EXPERIENCE_PREPARE = "ADD_WORK_EXPERIENCE_PREPARE",
    ADD_WORK_EXPERIENCE_COMPLETED = "ADD_WORK_EXPERIENCE_COMPLETED",
    UPDATE_WORK_EXPERIENCE_PREPARE = "UPDATE_WORK_EXPERIENCE_PREPARE",
    UPDATE_WORK_EXPERIENCE_COMPLETED = "UPDATE_WORK_EXPERIENCE_COMPLETED",
    REMOVE_WORK_EXPERIENCE_PREPARE = "REMOVE_WORK_EXPERIENCE_PREPARE",
    REMOVE_WORK_EXPERIENCE_COMPLETED = "REMOVE_WORK_EXPERIENCE_COMPLETED",
}

export const WORK_EXPERIENCE_COL_NAME = "workExperiences";

export enum WorkExperienceField {
    timeframe = "timeframe",
    place = "place",
    activities = "activities",
    createdOn = "createdOn",
    updatedOn = "updatedOn",
}

export type WorkExperience = {
    id?: string;
    [WorkExperienceField.timeframe]?: string;
    [WorkExperienceField.place]?: string;
    [WorkExperienceField.activities]?: string[];
    [WorkExperienceField.createdOn]?: Date;
    [WorkExperienceField.updatedOn]?: Date;
};

export type WorkExperineceState = {
    workExperiences: WorkExperience[];
    workExperience: WorkExperience;
    isNewWorkExperienceAdded: boolean;
    isWorkExperienceUpdated: Boolean;
    isWorkExperienceRemoved: boolean;
    isFetchingWorkExperiences: boolean;
    isFetchingWorkExperience: boolean;
    isAddingWorkExperience: boolean;
    isUpdatingWorkExperience: boolean;
    isRemovingWorkExperience: boolean;
};

export type WorkExperienceAction = {
    type: WORK_EXPERIENCE_TYPES;
    payload?: {
        workExperiences?: WorkExperience[];
        workExperience?: WorkExperience;
    };
};

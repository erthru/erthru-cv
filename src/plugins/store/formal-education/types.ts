export enum FORMAL_EDUCATION_TYPES {
    FETCH_FORMAL_EDUCATIONS_PREPARE = "FETCH_FORMAL_EDUCATIONS_PREPARE",
    FETCH_FORMAL_EDUCATIONS_COMPLETED = "FETCH_FORMAL_EDUCATIONS_COMPLETED",
    FETCH_FORMAL_EDUCATION_PREPARE = "FETCH_FORMAL_EDUCATION_PREPARE",
    FETCH_FORMAL_EDUCATION_COMPLETED = "FETCH_FORMAL_EDUCATION_COMPLETED",
    ADD_FORMAL_EDUCATION_PREPARE = "ADD_FORMAL_EDUCATION_PREPARE",
    ADD_FORMAL_EDUCATION_COMPLETED = "ADD_FORMAL_EDUCATION_COMPLETED",
    UPDATE_FORMAL_EDUCATION_PREPARE = "UPDATE_FORMAL_EDUCATION_PREPARE",
    UPDATE_FORMAL_EDUCATION_COMPLETED = "UPDATE_FORMAL_EDUCATION_COMPLETED",
    REMOVE_FORMAL_EDUCATION_PREPARE = "REMOVE_FORMAL_EDUCATION_PREPARE",
    REMOVE_FORMAL_EDUCATION_COMPLETED = "REMOVE_FORMAL_EDUCATION_COMPLETED",
}

export const FORMAL_EDUCATION_COL_NAME = "formalEducations";

export type FormalEducation = {
    id?: string;
    [FormalEducationField.timeframe]?: string;
    [FormalEducationField.place]?: string;
    [FormalEducationField.majors]?: string;
    [FormalEducationField.createdOn]?: Date;
    [FormalEducationField.updatedOn]?: Date;
};

export enum FormalEducationField {
    timeframe = "timeframe",
    place = "place",
    majors = "majors",
    createdOn = "createdOn",
    updatedOn = "updatedOn",
}

export type FormalEducationState = {
    formalEducations: FormalEducation[];
    formalEducation: FormalEducation;
    isFetchingFormalEducations: boolean;
    isFetchingFormalEducation: boolean;
    isNewFormalEducationAdded: boolean;
    isFormalEducationUpdated: boolean;
    isFormalEducationRemoved: boolean;
    isAddingFormalEducation: boolean;
    isUpdatingFormalEducation: boolean;
    isRemovingFormalEducation: boolean;
};

export type FormalEducationAction = {
    type: FORMAL_EDUCATION_TYPES;
    payload?: {
        formalEducations?: FormalEducation[];
        formalEducation?: FormalEducation;
    };
};

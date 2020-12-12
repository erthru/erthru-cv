export enum FORMAL_EDUCATION_TYPES {}

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

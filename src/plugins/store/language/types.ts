export enum LANGUAGE_TYPES {
    T
}

export const LANGUAGE_COL_NAME = "languages";

export enum LanguageField {
    lang = "lang",
    level = "level",
    createdOn = "createdOn",
    updatedOn = "updatedOn",
}

export enum LanguageLevel {
    active = "active",
    passive = "passive",
}

export type Language = {
    id?: string;
    [LanguageField.lang]?: string;
    [LanguageField.level]?: LanguageLevel;
    [LanguageField.createdOn]?: Date;
    [LanguageField.updatedOn]?: Date;
};

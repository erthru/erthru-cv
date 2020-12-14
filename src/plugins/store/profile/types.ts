export enum PROFILE_TYPES {
    FETCH_PROFILE_PREPARE,
    FETCH_PROFILE_COMPLETED,
    UPDATE_PROFILE_PREPARE,
    UPDATE_PROFILE_COMPLETED,
}

export const PROFILE_COL_NAME = "profiles";

export enum ProfileField {
    fullName = "fullName",
    avatarUrl = "avatarUrl",
    coverUrl = "coverUrl",
    intro = "intro",
    career = "career",
    createdOn = "createdOn",
    updatedOn = "updatedOn",
}

export type Profile = {
    id?: string;
    [ProfileField.fullName]?: string;
    [ProfileField.avatarUrl]?: string;
    [ProfileField.coverUrl]?: string;
    [ProfileField.intro]?: string;
    [ProfileField.career]?: string;
    [ProfileField.createdOn]?: Date;
    [ProfileField.updatedOn]?: Date;
};

export type ProfileState = {
    profile: Profile;
    isFetchingProfile: boolean;
    isUpdatingProfile: boolean;
    isProfileUpdated: boolean;
};

export type ProfileAction = {
    type: PROFILE_TYPES;
    payload?: {
        profile?: Profile;
    };
};

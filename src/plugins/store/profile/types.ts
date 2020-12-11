export enum TYPES {
    FETCH_PROFILE_PREPARE,
    FETCH_PROFILE_COMPLETED,
    UPDATE_PROFILE_PREPARE,
    UPDATE_PROFILE_COMPLETED,
}

export const COL_NAME = "profiles";

export type Profile = {
    id?: string;
    [ProfileField.fullName]?: string;
    [ProfileField.avatarUrl]?: string;
    [ProfileField.intro]?: string;
    [ProfileField.career]?: string;
};

export enum ProfileField {
    fullName = "fullName",
    avatarUrl = "avatarUrl",
    intro = "intro",
    career = "career",
}

export type State = {
    profile: Profile;
    isProfileUpdated: boolean;
};

export type Action = {
    type: TYPES;
    payload?: {
        profile?: Profile;
    };
};
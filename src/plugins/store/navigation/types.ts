export enum NAVIGATION_TYPES {
    SET_NAVIGATION_KEY = "SET_NAVIGATION_KEY",
}

export enum NavigationKey {
    overview = "overview",
    workExperiences = "workExperiences",
    formalEducations = "formalEducations",
    languages = "languages",
    portfolios = "portfolios",
    contacts = "contacts",
    documents = "documents",
    settings = "settings",
}

export type NavigationState = {
    currentActiveKey: NavigationKey;
};

export type NavigationAction = {
    type: NAVIGATION_TYPES;
    payloads?: {
        currentActiveKey?: NavigationKey;
    };
};

export enum NAVIGATION_TYPES {
    SET_NAVIGATION_KEY = "SET_NAVIGATION_KEY",
}

export enum NavigationKey {
    overview = "overview",
    workExperience = "workExperience",
    formalEducation = "formalEducation",
    language = "language",
    portfolio = "portfolio",
    contact = "contact",
    document = "document",
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

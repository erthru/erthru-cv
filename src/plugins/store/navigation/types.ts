export enum TYPES {
    SET_KEY = "SET_KEY",
}

export enum Key {
    overview = "overview",
    workExperience = "workExperience",
    formalEducation = "formalEducation",
    language = "language",
    portfolio = "portfolio",
    contact = "contact",
    document = "document",
}

export type State = {
    currentActiveKey: Key;
};

export type Action = {
    type: TYPES;
    payloads?: {
        currentActiveKey?: Key;
    };
};

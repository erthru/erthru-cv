export enum CONTACT_TYPES {
    FETCH_CONTACT_PREPARE = "FETCH_CONTACT_PREPARE",
    FETCH_CONTACT_COMPLETED = "FETCH_CONTACT_COMPLETED",
    UPDATE_CONTACT_PREPARE = "UPDATE_CONTACT_PREPARE",
    UPDATE_CONTACT_COMPLETED = "UPDATE_CONTACT_COMPLETED",
}

export const CONTACT_COL_NAME = "contacts";

export enum ContactField {
    address = "address",
    phone = "phone",
    email = "email",
    githubUrl = "githubUrl",
    linkedinUrl = "linkedinUrl",
    mediumUrl = "mediumUrl",
    facebookUrl = "facebookUrl",
    instagramUrl = "instagramUrl",
    createdOn = "createdOn",
    updatedOn = "updatedOn"
}

export type Contact = {
    id?: string;
    [ContactField.address]?: string;
    [ContactField.phone]?: string;
    [ContactField.email]?: string;
    [ContactField.githubUrl]?: string;
    [ContactField.linkedinUrl]?: string;
    [ContactField.mediumUrl]?: string;
    [ContactField.facebookUrl]?: string;
    [ContactField.instagramUrl]?: string;
    [ContactField.createdOn]?: Date;
    [ContactField.updatedOn]?: Date;
};

export type ContactState = {
    contact: Contact;
    isFetchingContact: boolean;
    isContactUpdated: boolean;
    isUpdatingContact: boolean;
};

export type ContactAction = {
    type: CONTACT_TYPES;
    payload?: {
        contact?: Contact;
    };
};

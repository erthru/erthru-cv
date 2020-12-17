import { ContactState, ContactAction, CONTACT_TYPES } from "./types";

const initialState: ContactState = {
    contact: {},
    isFetchingContact: false,
    isContactUpdated: false,
    isUpdatingContact: false,
};

const reducers = (state = initialState, { type, payload }: ContactAction): ContactState => {
    switch (type) {
        case CONTACT_TYPES.FETCH_CONTACT_PREPARE:
            return {
                ...state,
                contact: {},
                isFetchingContact: true,
            };

        case CONTACT_TYPES.FETCH_CONTACT_COMPLETED:
            return {
                ...state,
                contact: payload?.contact!!,
                isFetchingContact: false,
            };

        case CONTACT_TYPES.UPDATE_CONTACT_PREPARE:
            return {
                ...state,
                isContactUpdated: false,
                isUpdatingContact: true,
            };

        case CONTACT_TYPES.UPDATE_CONTACT_COMPLETED:
            return {
                ...state,
                isContactUpdated: true,
                isUpdatingContact: false,
            };

        default:
            return state;
    }
};

export default reducers;

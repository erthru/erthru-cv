import { Dispatch } from "react";
import db from "../../db";
import { Contact, ContactAction, ContactField, CONTACT_COL_NAME, CONTACT_TYPES } from "./types";

export const fetchContact = () => async (dispatch: Dispatch<ContactAction>) => {
    try {
        dispatch({ type: CONTACT_TYPES.FETCH_CONTACT_PREPARE });

        const contacts: any[] = [];
        let contactsSnapshots = await db.collection(CONTACT_COL_NAME).get();

        if (contactsSnapshots.docs.length === 0) {
            await db.collection(CONTACT_COL_NAME).add({
                [ContactField.address]: "Jl. Something, Gorontalo",
                [ContactField.phone]: "081144431122",
                [ContactField.email]: "ersaka96@gmail.com",
                [ContactField.githubUrl]: "https://github.com/erthru",
                [ContactField.linkedinUrl]: "https://linkedin.com/in/erthru",
                [ContactField.mediumUrl]: "https://erthru.medium.com",
                [ContactField.facebookUrl]: "https://facebook.com/erthru",
                [ContactField.instagramUrl]: "https://instagram.com/_erthru",
                [ContactField.createdOn]: new Date(),
                [ContactField.updatedOn]: new Date(),
            });

            contactsSnapshots = await db.collection(CONTACT_COL_NAME).get();
        }

        contactsSnapshots.docs.map((doc) => {
            contacts.push({
                id: doc.id,
                ...doc.data(),
            });
        });

        dispatch({ type: CONTACT_TYPES.FETCH_CONTACT_COMPLETED, payload: { contact: contacts[0] as Contact } });
    } catch (e) {}
};

export const updateContact = (contact: Contact) => async (dispatch: Dispatch<ContactAction>) => {
    try {
        dispatch({ type: CONTACT_TYPES.UPDATE_CONTACT_PREPARE });

        const contactsSnapshots = await db.collection(CONTACT_COL_NAME).get();
        const id = contactsSnapshots.docs[0].id;

        await db
            .collection(CONTACT_COL_NAME)
            .doc(id)
            .update({
                [ContactField.updatedOn]: new Date(),
                ...contact,
            });

        dispatch({ type: CONTACT_TYPES.UPDATE_CONTACT_COMPLETED });
    } catch (e) {}
};

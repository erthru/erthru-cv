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
                [ContactField.address]: "Your Address",
                [ContactField.phone]: "Your Phone Number",
                [ContactField.email]: "your@mail.com",
                [ContactField.githubUrl]: "https://github.com/your_username",
                [ContactField.linkedinUrl]: "https://linkedin.com/in/your_username",
                [ContactField.mediumUrl]: "https://your_username.medium.com",
                [ContactField.facebookUrl]: "https://facebook.com/your_username",
                [ContactField.instagramUrl]: "https://instagram.com/your_username",
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

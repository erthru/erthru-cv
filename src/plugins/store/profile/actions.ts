import { Dispatch } from "redux";
import db from "../../db";
import { ProfileAction, PROFILE_TYPES, PROFILE_COL_NAME, ProfileField, Profile } from "./types";

export const fetchProfile = () => async (dispatch: Dispatch<ProfileAction>) => {
    try {
        dispatch({ type: PROFILE_TYPES.FETCH_PROFILE_PREPARE });

        const profiles: any[] = [];
        let profilesSnapshots = await db.collection(PROFILE_COL_NAME).get();

        if (profilesSnapshots.docs.length === 0) {
            await db.collection(PROFILE_COL_NAME).add({
                [ProfileField.fullName]: "Suprianto Djamalu",
                [ProfileField.avatarUrl]: "https://i.ibb.co/5K3Nd8P/me.jpg",
                [ProfileField.coverUrl]: "https://i.ibb.co/ftLQmtM/pexels-junior-teixeira-2047905-1.jpg",
                [ProfileField.intro]:
                    "Very enthusiastic in following technological developments such as web (front end / back end) development, mobile (android / ios) development and many more. Had 3 years of experience as a developer. Always using git version control for my repository. Since I’m a developer, I’m very interested in learning and moving forward into latest technologies required to work with it.",
                [ProfileField.career]: "Software Developer",
                [ProfileField.currentResidenceAddress]: "Jl. Something Inside in Indonesia or Maybe in Sulawesi, Gorontalo",
                [ProfileField.createdOn]: new Date(),
                [ProfileField.updatedOn]: new Date(),
            });

            profilesSnapshots = await db.collection(PROFILE_COL_NAME).get();
        }

        profilesSnapshots.docs.map((doc) => {
            profiles.push({
                id: doc.id,
                ...doc.data(),
            });
        });

        dispatch({ type: PROFILE_TYPES.FETCH_PROFILE_COMPLETED, payload: { profile: profiles[0] } });
    } catch (e) {}
};

export const updateProfile = (profile: Profile) => async (dispatch: Dispatch<ProfileAction>) => {
    try {
        dispatch({ type: PROFILE_TYPES.UPDATE_PROFILE_PREPARE });

        let id = "";
        let profilesSnapshots = await db.collection(PROFILE_COL_NAME).get();
        id = profilesSnapshots.docs[0].id;

        await db
            .collection(PROFILE_COL_NAME)
            .doc(id)
            .update({
                [ProfileField.updatedOn]: new Date(),
                ...profile,
            });

        dispatch({ type: PROFILE_TYPES.UPDATE_PROFILE_COMPLETED });
    } catch (e) {}
};

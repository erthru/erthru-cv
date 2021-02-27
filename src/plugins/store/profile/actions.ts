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
                [ProfileField.fullName]: "Your Name",
                [ProfileField.avatarUrl]: "https://pixabay.com/get/g0b5bb4351641efb289b91c539a2ca1f5ff03ef27d94cec09cb7f70b9b94b7ec1599411609e44886b346f5be873714ff7_640.jpg",
                [ProfileField.coverUrl]: "https://i.ibb.co/ftLQmtM/pexels-junior-teixeira-2047905-1.jpg",
                [ProfileField.intro]:
                    "Example intro belong here, write all about you here",
                [ProfileField.career]: "Your Career",
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

        dispatch({ type: PROFILE_TYPES.FETCH_PROFILE_COMPLETED, payload: { profile: profiles[0] as Profile } });
    } catch (e) {}
};

export const updateProfile = (profile: Profile) => async (dispatch: Dispatch<ProfileAction>) => {
    try {
        dispatch({ type: PROFILE_TYPES.UPDATE_PROFILE_PREPARE });

        const profilesSnapshots = await db.collection(PROFILE_COL_NAME).get();
        const id = profilesSnapshots.docs[0].id;

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

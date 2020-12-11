import { Dispatch } from "redux";
import db from "../../db";
import { Action, TYPES, COL_NAME, ProfileField, Profile } from "./types";

export const fetchProfile = () => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: TYPES.FETCH_PROFILE_PREPARE });

        let profiles: any[] = [];
        let profilesSnapshots = await db.collection(COL_NAME).get();

        if (profilesSnapshots.docs.length === 0) {
            await db.collection(COL_NAME).add({
                [ProfileField.fullName]: "Maika Sakuranomiya",
                [ProfileField.avatarUrl]:
                    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9b36e35b-648b-4842-9d0e-9a7267c791be/dbodh2f-9beb6117-8dc4-4229-a29d-7a60bbc93f1b.png/v1/fill/w_1024,h_576,q_80,strp/sakuranomiya_maika_minimalist_by_desonime_dbodh2f-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC85YjM2ZTM1Yi02NDhiLTQ4NDItOWQwZS05YTcyNjdjNzkxYmVcL2Rib2RoMmYtOWJlYjYxMTctOGRjNC00MjI5LWEyOWQtN2E2MGJiYzkzZjFiLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.s1ktek-4tpr13FZeRPZL1QZyRIaCvmamZ67Ik3o0-D4",
                [ProfileField.intro]:
                    "16-year-old girl who despite having a positive and cheerful personality, unintentionally gains a sadistic look in her eyes whenever she smiles. This look catches the attention of Dino who scouts her to be the sadistic girl waitress at Cafe Stile.",
                [ProfileField.career]: "Maid Cafe",
            });

            profilesSnapshots = await db.collection(COL_NAME).get();
        }

        profilesSnapshots.docs.map((doc) => {
            profiles.push({
                id: doc.id,
                ...doc.data(),
            });
        });

        dispatch({ type: TYPES.FETCH_PROFILE_COMPLETED, payload: { profile: profiles[0] } });
    } catch (e) {}
};

export const updateProfile = (profile: Profile) => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: TYPES.UPDATE_PROFILE_PREPARE });

        let id = "";
        let profilesSnapshots = await db.collection(COL_NAME).get();
        id = profilesSnapshots.docs[0].id;

        await db.collection(COL_NAME).doc(id).update(profile);
        dispatch({ type: TYPES.UPDATE_PROFILE_COMPLETED });
    } catch (e) {}
};

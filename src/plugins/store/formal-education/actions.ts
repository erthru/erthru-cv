import { Dispatch } from "react";
import { FormalEducationAction, FORMAL_EDUCATION_TYPES } from "./types";

export const fetchFormalEducations = () => (dispatch: Dispatch<FormalEducationAction>) => {
    try {
        dispatch({ type: FORMAL_EDUCATION_TYPES.FETCH_FORMAL_EDUCATIONS_PREPARE });
    } catch (e) {}
};

import { Dispatch } from "redux";
import { NavigationAction, NavigationKey, NAVIGATION_TYPES } from "./types";

export const setNavigationKey = (key: NavigationKey) => (dispatch: Dispatch<NavigationAction>) => {
    dispatch({ type: NAVIGATION_TYPES.SET_NAVIGATION_KEY, payloads: { currentActiveKey: key } });
};

import { Dispatch } from "redux";
import { Action, Key, TYPES } from "./types";

export const setKey = (key: Key) => (dispatch: Dispatch<Action>) => {
    dispatch({ type: TYPES.SET_KEY, payloads: { currentActiveKey: key } });
};

import { Dispatch } from "redux";
import db from "../../db";
import { StackAction, StackField, STACK_COL_NAME, STACK_TYPES, Stack } from "./types";

export const fetchStacks = () => async (dispatch: Dispatch<StackAction>) => {
    try {
        dispatch({ type: STACK_TYPES.FETCH_STACKS_PREPARE });

        const stacks: any[] = [];
        let stacksSnapshots = await db.collection(STACK_COL_NAME).orderBy(StackField.createdOn, "desc").get();

        stacksSnapshots.docs.map((doc) => {
            stacks.push({
                id: doc.id,
                ...doc.data(),
            });
        });

        dispatch({
            type: STACK_TYPES.FETCH_STACKS_COMPLETED,
            payload: { stacks: stacks as Stack[] },
        });
    } catch (e) {}
};

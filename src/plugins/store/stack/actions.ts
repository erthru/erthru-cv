import { Dispatch } from "redux";
import db from "../../db";
import { StackAction, StackField, STACK_COL_NAME, STACK_TYPES, Stack, StackDepartment } from "./types";

export const fetchStacks = () => async (dispatch: Dispatch<StackAction>) => {
    try {
        dispatch({ type: STACK_TYPES.FETCH_STACKS_PREPARE });

        const stacks: any[] = [];
        let stacksSnapshots = await db.collection(STACK_COL_NAME).orderBy(StackField.createdOn, "asc").get();

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

export const fetchStack = (id: string) => async (dispatch: Dispatch<StackAction>) => {
    try {
        dispatch({ type: STACK_TYPES.FETCH_STACK_PREPARE });

        let stack: any = {};
        const stackDoc = await db.collection(STACK_COL_NAME).doc(id).get();

        stack = {
            id: stackDoc.id,
            ...stackDoc.data(),
        };

        dispatch({ type: STACK_TYPES.FETCH_STACK_COMPLETED, payload: { stack: stack as Stack } });
    } catch (e) {}
};

export const addStack = (stack: Stack) => async (dispatch: Dispatch<StackAction>) => {
    try {
        dispatch({ type: STACK_TYPES.ADD_STACK_PREPARE });

        await db.collection(STACK_COL_NAME).add({
            [StackField.createdOn]: new Date(),
            [StackField.updatedOn]: new Date(),
            ...stack,
        });

        dispatch({ type: STACK_TYPES.ADD_STACK_COMPLETED });
    } catch (e) {}
};

export const updateStack = (id: string, stack: Stack) => async (dispatch: Dispatch<StackAction>) => {
    try {
        dispatch({ type: STACK_TYPES.UPDATE_STACK_PREPARE });

        await db
            .collection(STACK_COL_NAME)
            .doc(id)
            .update({
                [StackField.updatedOn]: new Date(),
                ...stack,
            });

        dispatch({ type: STACK_TYPES.UPDATE_STACK_COMPLETED });
    } catch (e) {}
};

export const removeStack = (id: string) => async (dispatch: Dispatch<StackAction>) => {
    try {
        dispatch({ type: STACK_TYPES.REMOVE_STACK_PREPARE });
        await db.collection(STACK_COL_NAME).doc(id).delete();
        dispatch({ type: STACK_TYPES.REMOVE_STACK_COMPLETED });
    } catch (e) {}
};

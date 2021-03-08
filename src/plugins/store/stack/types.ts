export enum STACK_TYPES {
    FETCH_STACKS_PREPARE = "FETCH_STACKS_PREPARE",
    FETCH_STACKS_COMPLETED = "FETCH_STACKS_COMPLETED",
    FETCH_STACK_PREPARE = "FETCH_STACK_PREPARE",
    FETCH_STACK_COMPLETED = "FETCH_STACK_COMPLETED",
    ADD_STACK_PREPARE = "ADD_STACK_PREPARE",
    ADD_STACK_COMPLETED = "ADD_STACK_COMPLETED",
    UPDATE_STACK_PREPARE = "UPDATE_STACK_PREPARE",
    UPDATE_STACK_COMPLETED = "UPDATE_STACK_COMPLETED",
    REMOVE_STACK_PREPARE = "REMOVE_STACK_PREPARE",
    REMOVE_STACK_COMPLETED = "REMOVE_STACK_COMPLETED",
}

export const STACK_COL_NAME = "stacks";

export enum StackField {
    department = "department",
    skills = "skills",
    createdOn = "createdOn",
    updatedOn = "updatedOn",
}

export enum StackDepartment {
    web = "web",
    mobile = "mobile",
    game = "game",
    dekstop = "desktop",
    database = "database",
    other = "other",
}

export type Stack = {
    id?: string;
    [StackField.department]?: StackDepartment;
    [StackField.skills]?: string[];
    [StackField.createdOn]?: Date;
    [StackField.updatedOn]?: Date;
};

export type StackState = {
    stacks: Stack[];
    stack: Stack;
    isFetchingStacks: boolean;
    isFetchingStack: boolean;
    isAddingStack: boolean;
    isUpdatingStack: boolean;
    isRemovingStack: boolean;
    isNewStackAdded: boolean;
    isStackUpdated: boolean;
    isStackRemoved: boolean;
};

export type StackAction = {
    type: STACK_TYPES;
    payload?: {
        stacks?: Stack[];
        stack?: Stack;
    };
};

export enum STACK_TYPES {
    FETCH_STACKS_PREPARE = "FETCH_STACKS_PREPARE",
    FETCH_STACKS_COMPLETED = "FETCH_STACKS_COMPLETED",
    UPDATE_STACK_PREPARE = "UPDATE_STACK_PREPARE",
    UPDATE_STACK_COMPLETED = "UPDATE_STACK_COMPLETED",
    DELETE_STACK_PREPARE = "DELETE_STACK_PREPARE",
    DELETE_STACK_COMPLETED = "DELETE_STACK_COMPLETED",
}

export const STACK_COL_NAME = "stacks";

export enum StackField {
    department = "department",
    skills = "skills",
    createdOn = "createdOn",
    updatedOn = "updatedOn",
}

export type Stack = {
    id?: string;
    [StackField.department]: string;
    [StackField.skills]: string[];
    [StackField.createdOn]: Date;
    [StackField.updatedOn]: Date;
};

export type StackState = {
    stacks: Stack[];
    isFetchingStacks: boolean;
    isUpdatingStacks: boolean;
    isDeletingStacks: boolean;
    isStackUpdated: boolean;
    isStackDeleted: boolean;
};

export type StackAction = {
    type: STACK_TYPES;
    payload?: {
        stacks?: Stack[];
    };
};

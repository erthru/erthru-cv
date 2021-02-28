import { StackState, StackAction, STACK_TYPES } from "./types";

const initalState: StackState = {
    stacks: [],
    stack: {},
    isFetchingStacks: false,
    isFetchingStack: false,
    isAddingStack: false,
    isUpdatingStack: false,
    isRemovingStack: false,
    isNewStackAdded: false,
    isStackUpdated: false,
    isStackRemoved: false,
};

const reducers = (state = initalState, { type, payload }: StackAction): StackState => {
    switch (type) {
        case STACK_TYPES.FETCH_STACKS_PREPARE:
            return {
                ...state,
                isFetchingStacks: true,
                stacks: [],
            };

        case STACK_TYPES.FETCH_STACKS_COMPLETED:
            return {
                ...state,
                isFetchingStacks: false,
                stacks: payload?.stacks!!,
            };

        case STACK_TYPES.FETCH_STACK_PREPARE:
            return {
                ...state,
                isFetchingStack: true,
                stack: {},
            };

        case STACK_TYPES.FETCH_STACK_COMPLETED:
            return {
                ...state,
                isFetchingStack: false,
                stack: payload?.stack!!,
            };

        case STACK_TYPES.ADD_STACK_PREPARE:
            return {
                ...state,
                isAddingStack: true,
                isNewStackAdded: false,
            };

        case STACK_TYPES.ADD_STACK_COMPLETED:
            return {
                ...state,
                isAddingStack: false,
                isNewStackAdded: true,
            };

        case STACK_TYPES.UPDATE_STACK_PREPARE:
            return {
                ...state,
                isUpdatingStack: true,
                isStackUpdated: false,
            };

        case STACK_TYPES.UPDATE_STACK_COMPLETED:
            return {
                ...state,
                isUpdatingStack: false,
                isStackUpdated: true,
            };

        case STACK_TYPES.REMOVE_STACK_PREPARE:
            return {
                ...state,
                isRemovingStack: true,
                isStackRemoved: false,
            };

        case STACK_TYPES.REMOVE_STACK_COMPLETED:
            return {
                ...state,
                isRemovingStack: false,
                isStackRemoved: true,
            };

        default:
            return state;
    }
};

export default reducers;

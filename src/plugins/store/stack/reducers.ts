import { StackState, StackAction, STACK_TYPES } from "./types";

const initalState: StackState = {
    stacks: [],
    isFetchingStacks: false,
    isUpdatingStacks: false,
    isDeletingStacks: false,
    isStackUpdated: false,
    isStackDeleted: false,
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

        case STACK_TYPES.UPDATE_STACK_PREPARE:
            return {
                ...state,
                isUpdatingStacks: true,
                isStackUpdated: false,
            };

        case STACK_TYPES.UPDATE_STACK_COMPLETED:
            return {
                ...state,
                isUpdatingStacks: false,
                isStackUpdated: true,
            };

        case STACK_TYPES.DELETE_STACK_PREPARE:
            return {
                ...state,
                isDeletingStacks: true,
                isStackDeleted: false,
            };

        case STACK_TYPES.DELETE_STACK_COMPLETED:
            return {
                ...state,
                isDeletingStacks: false,
                isStackDeleted: true,
            };

        default:
            return state;
    }
};

export default reducers;

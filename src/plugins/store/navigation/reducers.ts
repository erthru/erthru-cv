import { NavigationKey, NavigationState, NavigationAction, NAVIGATION_TYPES } from "./types";

const initialState: NavigationState = {
    currentActiveKey: NavigationKey.overview,
};

const reducers = (state = initialState, { type, payloads }: NavigationAction): NavigationState => {
    switch (type) {
        case NAVIGATION_TYPES.SET_NAVIGATION_KEY:
            return {
                ...state,
                currentActiveKey: payloads?.currentActiveKey!!,
            };

        default:
            return state;
    }
};

export default reducers;

import { Key, State, Action, TYPES } from "./types";

const initialState: State = {
    currentActiveKey: Key.overview,
};

const reducers = (state = initialState, { type, payloads }: Action): State => {
    switch (type) {
        case TYPES.SET_KEY:
            return {
                ...state,
                currentActiveKey: payloads?.currentActiveKey!!,
            };

        default:
            return state;
    }
};

export default reducers;

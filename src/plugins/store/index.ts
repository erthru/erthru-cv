import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import navigationReducer from "./navigation/reducers";
import profileReducer from "./profile/reducers";

const combinedReducers = combineReducers({
    navigation: navigationReducer,
    profile: profileReducer,
});

const store = createStore(combinedReducers, {}, applyMiddleware(...[thunk]));

export type Store = ReturnType<typeof combinedReducers>;

export default store;

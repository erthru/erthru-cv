import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import navigationReducer from "./navigation/reducers";

const combinedReducers = combineReducers({
    navigation: navigationReducer,
});

const store = createStore(combinedReducers, {}, applyMiddleware(...[thunk]));

export type Store = ReturnType<typeof combinedReducers>;

export default store;

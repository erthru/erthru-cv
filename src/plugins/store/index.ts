import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import navigationReducer from "./navigation/reducers";
import profileReducer from "./profile/reducers";
import workExperienceReducer from "./work-experience/reducers";
import formalEducationReducer from "./formal-education/reducers";
import languageReducer from "./language/reducers";
import portfolioReducer from "./portfolio/reducers";

const combinedReducers = combineReducers({
    navigation: navigationReducer,
    profile: profileReducer,
    workExperience: workExperienceReducer,
    formalEducation: formalEducationReducer,
    language: languageReducer,
    portfolio: portfolioReducer,
});

const store = createStore(combinedReducers, {}, applyMiddleware(...[thunk]));

export type Store = ReturnType<typeof combinedReducers>;

export default store;

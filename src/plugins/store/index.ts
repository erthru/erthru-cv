import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import navigationReducer from "./navigation/reducers";
import profileReducer from "./profile/reducers";
import workExperienceReducer from "./work-experience/reducers";
import formalEducationReducer from "./formal-education/reducers";
import languageReducer from "./language/reducers";
import portfolioReducer from "./portfolio/reducers";
import contactReducer from "./contact/reducers";
import authReducer from "./auth/reducers";
import stackReducer from "./stack/reducers";

const combinedReducers = combineReducers({
    navigation: navigationReducer,
    profile: profileReducer,
    workExperience: workExperienceReducer,
    formalEducation: formalEducationReducer,
    language: languageReducer,
    stack: stackReducer,
    portfolio: portfolioReducer,
    contact: contactReducer,
    auth: authReducer,
});

const store = createStore(combinedReducers, {}, applyMiddleware(...[thunk]));

export type Store = ReturnType<typeof combinedReducers>;

export default store;

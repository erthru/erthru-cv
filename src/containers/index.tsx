import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useHistory } from "react-router-dom";
import { Store } from "../plugins/store";
import { fetchContact } from "../plugins/store/contact/actions";
import { fetchFormalEducations } from "../plugins/store/formal-education/actions";
import { fetchLanguages } from "../plugins/store/language/actions";
import { fetchPortfolios } from "../plugins/store/portfolio/actions";
import { fetchProfile } from "../plugins/store/profile/actions";
import { fetchWorkExperiences } from "../plugins/store/work-experience/actions";
import Admin from "./admin";
import Landing from "./landing";
import SignIn from "./sign-in";

const Containers = () => {
    const dispatch = useDispatch();
    const isProfileUpdated = useSelector((store: Store) => store.profile.isProfileUpdated);
    const isNewWorkExperienceAdded = useSelector((store: Store) => store.workExperience.isNewWorkExperienceAdded);
    const isWorkExperienceUpdated = useSelector((store: Store) => store.workExperience.isWorkExperienceUpdated);
    const isWorkExperienceRemoved = useSelector((store: Store) => store.workExperience.isWorkExperienceRemoved);
    const isNewFormalEducationAdded = useSelector((store: Store) => store.formalEducation.isNewFormalEducationAdded);
    const isFormalEducationUpdated = useSelector((store: Store) => store.formalEducation.isFormalEducationUpdated);
    const isFormalEducationRemoved = useSelector((store: Store) => store.formalEducation.isFormalEducationRemoved);
    const isNewLanguageAdded = useSelector((store: Store) => store.language.isNewLanguageAdded);
    const isLanguageUpdated = useSelector((store: Store) => store.language.isLanguageUpdated);
    const isLanguageRemoved = useSelector((store: Store) => store.language.isLanguageRemoved);
    const isNewPortfolioAdded = useSelector((store: Store) => store.portfolio.isNewPortfolioAdded);
    const isPortfolioUpdated = useSelector((store: Store) => store.portfolio.isPortfolioUpdated);
    const isPortfolioRemoved = useSelector((store: Store) => store.portfolio.isPortfolioRemoved);
    const isContactUpdated = useSelector((store: Store) => store.contact.isContactUpdated);

    useEffect(() => {
        dispatch(fetchProfile());
        dispatch(fetchWorkExperiences());
        dispatch(fetchFormalEducations());
        dispatch(fetchLanguages());
        dispatch(fetchPortfolios());
        dispatch(fetchContact());
    }, []);

    useEffect(() => {
        if (isProfileUpdated) dispatch(fetchProfile());
        if (isNewWorkExperienceAdded || isWorkExperienceUpdated || isWorkExperienceRemoved) dispatch(fetchWorkExperiences());
        if (isNewFormalEducationAdded || isFormalEducationUpdated || isFormalEducationRemoved) dispatch(fetchFormalEducations());
        if (isNewLanguageAdded || isLanguageUpdated || isLanguageRemoved) dispatch(fetchLanguages());
        if (isNewPortfolioAdded || isPortfolioUpdated || isPortfolioRemoved) dispatch(fetchPortfolios());
        if (isContactUpdated) dispatch(fetchContact());
    }, [
        isProfileUpdated,
        isNewWorkExperienceAdded,
        isWorkExperienceUpdated,
        isWorkExperienceRemoved,
        isNewFormalEducationAdded,
        isFormalEducationUpdated,
        isFormalEducationRemoved,
        isNewLanguageAdded,
        isLanguageUpdated,
        isLanguageRemoved,
        isNewPortfolioAdded,
        isPortfolioUpdated,
        isPortfolioRemoved,
        isContactUpdated,
    ]);

    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/admin" component={Admin} />
        </Switch>
    );
};
export default Containers;

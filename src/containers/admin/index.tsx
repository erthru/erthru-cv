import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useHistory } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import Topbar from "../../components/topbar";
import { Store } from "../../plugins/store";
import { checkSignInState } from "../../plugins/store/auth/actions";
import { fetchContact } from "../../plugins/store/contact/actions";
import { fetchFormalEducations } from "../../plugins/store/formal-education/actions";
import { fetchLanguages } from "../../plugins/store/language/actions";
import { fetchPortfolios } from "../../plugins/store/portfolio/actions";
import { fetchProfile } from "../../plugins/store/profile/actions";
import { fetchWorkExperiences } from "../../plugins/store/work-experience/actions";
import AddFormalEducation from "./add-formal-education";
import AddPortfolio from "./add-portfolio";
import AddWorkExperience from "./add-work-experience";
import Contacts from "./contacts";
import Document from "./document";
import EditFormalEducation from "./edit-formal-education";
import EditPortfolio from "./edit-portfolio";
import EditWorkExperience from "./edit-work-experience";
import FormalEducations from "./formal-educations";
import Languages from "./languages";
import Overview from "./overview";
import Portfolios from "./portfolios";
import Settings from "./settings";
import WorkExperiences from "./work-experiences";

const Admin = () => {
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
    const isNotSignIn = useSelector((store: Store) => store.auth.isNotSignIn);
    const isSignAlready = useSelector((store: Store) => store.auth.isSignAlready);
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchProfile());
        dispatch(fetchWorkExperiences());
        dispatch(fetchFormalEducations());
        dispatch(fetchLanguages());
        dispatch(fetchPortfolios());
        dispatch(fetchContact());
        dispatch(checkSignInState());
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

    useEffect(() => {
        if (isNotSignIn) history.push("/sign-in");
    }, [isNotSignIn]);

    return (
        <div className="flex p-4 lg:p-6 container mx-auto">
            {isSignAlready && <Sidebar />}

            {isSignAlready && (
                <div className="w-full flex flex-wrap lg:ml-6">
                    <Topbar />

                    <div className="w-full h-full mt-4 lg:mt-6">
                        <Switch>
                            <Route exact path="/admin" component={Overview} />
                            <Route exact path="/admin/work-experiences" component={WorkExperiences} />
                            <Route exact path="/admin/work-experience/add" component={AddWorkExperience} />
                            <Route exact path="/admin/work-experience/edit/:id" component={EditWorkExperience} />
                            <Route exact path="/admin/formal-educations" component={FormalEducations} />
                            <Route exact path="/admin/formal-education/add" component={AddFormalEducation} />
                            <Route exact path="/admin/formal-education/edit/:id" component={EditFormalEducation} />
                            <Route exact path="/admin/languages" component={Languages} />
                            <Route exact path="/admin/portfolios" component={Portfolios} />
                            <Route exact path="/admin/portfolio/add" component={AddPortfolio} />
                            <Route exact path="/admin/portfolio/edit/:id" component={EditPortfolio} />
                            <Route exact path="/admin/contacts" component={Contacts} />
                            <Route exact path="/admin/document" component={Document} />
                            <Route exact path="/admin/settings" component={Settings} />
                        </Switch>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Admin;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import Topbar from "../../components/topbar";
import { Store } from "../../plugins/store";
import { fetchProfile } from "../../plugins/store/profile/actions";
import { fetchWorkExperiences } from "../../plugins/store/work-experience/actions";
import AddWorkExperience from "./add-work-experience";
import Contacts from "./contacts";
import Documents from "./documents";
import EditWorkExperience from "./edit-work-experience";
import FormalEducations from "./formal-educations";
import Languages from "./languages";
import Overview from "./overview";
import Portfolios from "./portfolios";
import Settings from "./settings";
import WorkExperiences from "./work-experiences";

const Admin = () => {
    const dispatch = useDispatch();
    const isProfileUpdated = useSelector((store: Store) => store.profile.isProfileUpdated) as boolean;
    const isNewWorkExperienceAdded = useSelector((store: Store) => store.workExperience.isNewWorkExperienceAdded) as boolean;
    const isWorkExperienceUpdated = useSelector((store: Store) => store.workExperience.isWorkExperienceUpdated) as boolean;
    const isWorkExperienceRemoved = useSelector((store: Store) => store.workExperience.isWorkExperienceRemoved) as boolean;

    useEffect(() => {
        dispatch(fetchProfile());
        dispatch(fetchWorkExperiences());
    }, []);

    useEffect(() => {
        if (isProfileUpdated) dispatch(fetchProfile());
        if (isNewWorkExperienceAdded || isWorkExperienceUpdated || isWorkExperienceRemoved) dispatch(fetchWorkExperiences());
    }, [isProfileUpdated, isNewWorkExperienceAdded, isWorkExperienceUpdated, isWorkExperienceRemoved]);

    return (
        <div className="flex p-4 lg:p-6 container mx-auto">
            <Sidebar />

            <div className="w-full flex flex-wrap lg:ml-6">
                <Topbar />

                <div className="w-full h-full mt-4 lg:mt-6">
                    <Switch>
                        <Route exact path="/admin" component={Overview} />
                        <Route exact path="/admin/work-experiences" component={WorkExperiences} />
                        <Route exact path="/admin/work-experience/add" component={AddWorkExperience} />
                        <Route exact path="/admin/work-experience/edit/:id" component={EditWorkExperience} />
                        <Route exact path="/admin/formal-educations" component={FormalEducations} />
                        <Route exact path="/admin/languages" component={Languages} />
                        <Route exact path="/admin/portfolios" component={Portfolios} />
                        <Route exact path="/admin/contacts" component={Contacts} />
                        <Route exact path="/admin/documents" component={Documents} />
                        <Route exact path="/admin/settings" component={Settings} />
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Admin;

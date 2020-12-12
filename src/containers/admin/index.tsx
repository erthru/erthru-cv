import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import Topbar from "../../components/topbar";
import { fetchProfile } from "../../plugins/store/profile/actions";
import AddWorkExperience from "./add-work-experience";
import Contact from "./contact";
import Document from "./document";
import EditWorkExperience from "./edit-work-experience";
import FormalEducation from "./formal-education";
import Language from "./language";
import Overview from "./overview";
import Portfolio from "./portfolio";
import WorkExperience from "./work-experience";

const Admin = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProfile());
    }, []);

    return (
        <div className="flex p-4 lg:p-6 container mx-auto">
            <Sidebar />

            <div className="w-full flex flex-wrap lg:ml-6">
                <Topbar />

                <div className="w-full h-full mt-4 lg:mt-6">
                    <Switch>
                        <Route exact path="/admin" component={Overview} />
                        <Route exact path="/admin/work-experience" component={WorkExperience} />
                        <Route exact path="/admin/work-experience/add" component={AddWorkExperience} />
                        <Route exact path="/admin/work-experience/edit/:id" component={EditWorkExperience} />
                        <Route exact path="/admin/formal-education" component={FormalEducation} />
                        <Route exact path="/admin/language" component={Language} />
                        <Route exact path="/admin/portfolio" component={Portfolio} />
                        <Route exact path="/admin/contact" component={Contact} />
                        <Route exact path="/admin/document" component={Document} />
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Admin;

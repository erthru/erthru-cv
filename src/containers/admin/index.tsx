import React from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import Topbar from "../../components/topbar";
import Contact from "./contact";
import Document from "./document";
import FormalEducation from "./formal-education";
import Language from "./language";
import Overview from "./overview";
import Portfolio from "./portfolio";
import WorkExperience from "./work-experience";

const Admin = () => (
    <div className="flex p-4 lg:p-6 container mx-auto">
        <Sidebar />

        <div className="w-full flex flex-wrap lg:ml-6">
            <Topbar />

            <div className="w-full h-full mt-4 lg:mt-6">
                <Switch>
                    <Route exact path="/admin" component={Overview} />
                    <Route path="/admin/work-experience" component={WorkExperience} />
                    <Route path="/admin/formal-education" component={FormalEducation} />
                    <Route path="/admin/language" component={Language} />
                    <Route path="/admin/portfolio" component={Portfolio} />
                    <Route path="/admin/contact" component={Contact} />
                    <Route path="/admin/document" component={Document} />
                </Switch>
            </div>
        </div>
    </div>
);

export default Admin;

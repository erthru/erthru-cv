import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useHistory } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import Topbar from "../../components/topbar";
import { Store } from "../../plugins/store";
import { checkSignInState } from "../../plugins/store/auth/actions";
import AddFormalEducation from "./add-formal-education";
import AddPortfolio from "./add-portfolio";
import AddWorkExperience from "./add-work-experience";
import AddStack from "./add-stack";
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
import Stacks from "./stacks";
import WorkExperiences from "./work-experiences";
import EditStack from "./edit-stack";

const Admin = () => {
    const dispatch = useDispatch();
    const isNotSignIn = useSelector((store: Store) => store.auth.isNotSignIn);
    const isSignAlready = useSelector((store: Store) => store.auth.isSignAlready);
    const history = useHistory();

    useEffect(() => {
        dispatch(checkSignInState());
    }, []);

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
                            <Route exact path="/admin/stacks" component={Stacks} />
                            <Route exact path="/admin/stack/add" component={AddStack} />
                            <Route exact path="/admin/stack/edit/:id" component={EditStack} />
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

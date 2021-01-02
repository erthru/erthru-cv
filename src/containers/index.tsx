import React from "react";
import { Route, Switch } from "react-router-dom";
import Admin from "./admin";
import Landing from "./landing";
import SignIn from "./sign-in";

const Containers = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/admin" component={Admin} />
    </Switch>
);

export default Containers;

import React from "react";
import { Route, Switch } from "react-router-dom";
import Admin from "./admin";
import Landing from "./landing";

const Containers = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/admin" component={Admin} />
    </Switch>
);

export default Containers;

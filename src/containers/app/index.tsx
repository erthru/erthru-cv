import React from "react";
import { Route, Switch } from "react-router-dom";
import Admin from "../admin";
import Home from "../home";

const App = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/admin" component={Admin} />
    </Switch>
);

export default App;

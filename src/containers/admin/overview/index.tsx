import React from "react";
import { Helmet } from "react-helmet";
import Me from "../../../components/me";
import { APP_TITLE } from "../../../helpers/environments";

const Overview = () => (
    <div>
        <Helmet title={"Overview - " + APP_TITLE} />
        <Me />
    </div>
);

export default Overview;

import React from "react";
import { Helmet } from "react-helmet";
import WorkExperienceForm from "../../../components/work-experience-form";
import { APP_TITLE } from "../../../helpers/environments";

const WorkExperience = () => (
    <div>
        <Helmet title={"Work Experience - " + APP_TITLE} />
    </div>
);

export default WorkExperience;

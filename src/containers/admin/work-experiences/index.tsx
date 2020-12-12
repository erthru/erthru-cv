import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import _WorkExperiences from "../../../components/work-experiences";
import { APP_TITLE } from "../../../helpers/environments";
import { setNavigationKey } from "../../../plugins/store/navigation/actions";
import { NavigationKey } from "../../../plugins/store/navigation/types";

const WorkExperiences = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNavigationKey(NavigationKey.workExperiences));
    }, []);

    return (
        <div>
            <Helmet title={"Work Experience - " + APP_TITLE} />
            <_WorkExperiences />
        </div>
    );
};

export default WorkExperiences;

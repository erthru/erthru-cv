import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import WorkExperiences from "../../../components/work-experiences";
import { APP_TITLE } from "../../../helpers/environments";
import { setKey } from "../../../plugins/store/navigation/actions";
import { Key } from "../../../plugins/store/navigation/types";

const WorkExperience = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setKey(Key.workExperience));
    }, []);

    return (
        <div>
            <Helmet title={"Work Experience - " + APP_TITLE} />            
            <WorkExperiences />
        </div>
    );
};

export default WorkExperience;

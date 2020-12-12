import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import WorkExperienceForm from "../../../components/work-experience-form";
import { APP_TITLE } from "../../../helpers/environments";
import { setKey } from "../../../plugins/store/navigation/actions";
import { Key } from "../../../plugins/store/navigation/types";

const AddWorkExperience = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setKey(Key.workExperience));
    }, []);

    return (
        <div>
            <Helmet title={"Add Work Experience - " + APP_TITLE} />
            <WorkExperienceForm />
        </div>
    );
};

export default AddWorkExperience;

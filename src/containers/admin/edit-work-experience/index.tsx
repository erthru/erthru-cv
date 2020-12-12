import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import WorkExperienceForm from "../../../components/work-experience-form";
import { APP_TITLE } from "../../../helpers/environments";
import { setNavigationKey } from "../../../plugins/store/navigation/actions";
import { NavigationKey } from "../../../plugins/store/navigation/types";

type Params = {
    id: string;
};

const EditWorkExperience = () => {
    const dispatch = useDispatch();
    const params = useParams<Params>();

    useEffect(() => {
        dispatch(setNavigationKey(NavigationKey.workExperiences));
    }, []);

    return (
        <div>
            <Helmet title={"Edit Work Experience - " + APP_TITLE} />
            <WorkExperienceForm id={params.id} />
        </div>
    );
};

export default EditWorkExperience;

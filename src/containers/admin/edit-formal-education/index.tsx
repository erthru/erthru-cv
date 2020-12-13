import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import FormalEducationForm from "../../../components/formal-education-form";
import { APP_TITLE } from "../../../helpers/environments";
import { setNavigationKey } from "../../../plugins/store/navigation/actions";
import { NavigationKey } from "../../../plugins/store/navigation/types";

type Params = {
    id: string;
};

const EditFormalEducation = () => {
    const dispatch = useDispatch();
    const params = useParams<Params>();

    useEffect(() => {
        dispatch(setNavigationKey(NavigationKey.formalEducations));
    }, []);

    return (
        <div>
            <Helmet title={"Edit Formal Education - " + APP_TITLE} />
            <FormalEducationForm id={params.id} />
        </div>
    );
};

export default EditFormalEducation;

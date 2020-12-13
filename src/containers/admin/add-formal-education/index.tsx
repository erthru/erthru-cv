import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import FormalEducationForm from "../../../components/formal-education-form";
import { APP_TITLE } from "../../../helpers/environments";
import { setNavigationKey } from "../../../plugins/store/navigation/actions";
import { NavigationKey } from "../../../plugins/store/navigation/types";

const AddFormalEducation = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNavigationKey(NavigationKey.formalEducations));
    }, []);

    return (
        <div>
            <Helmet title={"Add Formal Education - " + APP_TITLE} />
            <FormalEducationForm />
        </div>
    );
};

export default AddFormalEducation;

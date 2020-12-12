import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { APP_TITLE } from "../../../helpers/environments";
import { setNavigationKey } from "../../../plugins/store/navigation/actions";
import { NavigationKey } from "../../../plugins/store/navigation/types";

const FormalEducation = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNavigationKey(NavigationKey.formalEducation));
    }, []);

    return (
        <div>
            <Helmet title={"Formal Education - " + APP_TITLE} />
        </div>
    );
};

export default FormalEducation;

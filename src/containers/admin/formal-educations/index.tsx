import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { APP_TITLE } from "../../../helpers/environments";
import { setNavigationKey } from "../../../plugins/store/navigation/actions";
import { NavigationKey } from "../../../plugins/store/navigation/types";

const FormalEducations = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNavigationKey(NavigationKey.formalEducations));
    }, []);

    return (
        <div>
            <Helmet title={"Admin Formal Educations - " + APP_TITLE} />
        </div>
    );
};

export default FormalEducations;

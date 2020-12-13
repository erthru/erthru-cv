import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { APP_TITLE } from "../../../helpers/environments";
import { setNavigationKey } from "../../../plugins/store/navigation/actions";
import { NavigationKey } from "../../../plugins/store/navigation/types";
import _Languages from "../../../components/languages";

const Languages = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNavigationKey(NavigationKey.languages));
    }, []);

    return (
        <div>
            <Helmet title={"Languages - " + APP_TITLE} />
            <_Languages />
        </div>
    );
};

export default Languages;

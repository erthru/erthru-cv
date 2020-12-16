import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { APP_TITLE } from "../../../helpers/environments";
import { setNavigationKey } from "../../../plugins/store/navigation/actions";
import { NavigationKey } from "../../../plugins/store/navigation/types";
import _Languages from "../../../components/languages";
import LanguageForm from "../../../components/language-form";

const Languages = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNavigationKey(NavigationKey.languages));
    }, []);

    return (
        <div>
            <Helmet title={"Languages - " + APP_TITLE} />
            <LanguageForm />
            <_Languages className="mt-6" />
        </div>
    );
};

export default Languages;

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { APP_TITLE } from "../../../helpers/environments";
import { setNavigationKey } from "../../../plugins/store/navigation/actions";
import { NavigationKey } from "../../../plugins/store/navigation/types";
import _Document from "../../../components/document";

const Documents = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNavigationKey(NavigationKey.document));
    }, []);

    return (
        <div>
            <Helmet title={"Document - " + APP_TITLE} />
            <_Document />
        </div>
    );
};

export default Documents;

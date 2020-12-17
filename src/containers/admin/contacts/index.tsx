import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { APP_TITLE } from "../../../helpers/environments";
import { setNavigationKey } from "../../../plugins/store/navigation/actions";
import { NavigationKey } from "../../../plugins/store/navigation/types";
import _Contacts from "../../../components/contacts";

const Contacts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNavigationKey(NavigationKey.contacts));
    }, []);

    return (
        <div>
            <Helmet title={"Contacts - " + APP_TITLE} />
            <_Contacts />
        </div>
    );
};

export default Contacts;

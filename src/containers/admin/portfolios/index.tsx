import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { APP_TITLE } from "../../../helpers/environments";
import _Portfolios from "../../../components/portofolios";
import { useDispatch } from "react-redux";
import { setNavigationKey } from "../../../plugins/store/navigation/actions";
import { NavigationKey } from "../../../plugins/store/navigation/types";

const Portfolios = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNavigationKey(NavigationKey.portfolios));
    }, []);

    return (
        <div>
            <Helmet title={"Portfolios - " + APP_TITLE} />
            <_Portfolios />
        </div>
    );
};

export default Portfolios;

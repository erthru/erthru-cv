import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import PortfolioForm from "../../../components/portfolio-form";
import { APP_TITLE } from "../../../helpers/environments";
import { setNavigationKey } from "../../../plugins/store/navigation/actions";
import { NavigationKey } from "../../../plugins/store/navigation/types";

const AddPortfolio = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNavigationKey(NavigationKey.portfolios));
    }, []);

    return (
        <div>
            <Helmet title={"Add Portfolio - " + APP_TITLE} />
            <PortfolioForm />
        </div>
    );
};

export default AddPortfolio;

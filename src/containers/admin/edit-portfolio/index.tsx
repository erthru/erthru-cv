import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import PortfolioForm from "../../../components/portfolio-form";
import { APP_TITLE } from "../../../helpers/environments";
import { setNavigationKey } from "../../../plugins/store/navigation/actions";
import { NavigationKey } from "../../../plugins/store/navigation/types";

type Params = {
    id: string;
};

const EditPortfolio = () => {
    const dispatch = useDispatch();
    const params = useParams<Params>();

    useEffect(() => {
        dispatch(setNavigationKey(NavigationKey.portfolios));
    }, []);

    return (
        <div>
            <Helmet title={"Edit Portfolio - " + APP_TITLE} />
            <PortfolioForm id={params.id} />
        </div>
    );
};

export default EditPortfolio;

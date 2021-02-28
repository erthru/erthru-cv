import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import _Stacks from "../../../components/stacks";
import { APP_TITLE } from "../../../helpers/environments";
import { setNavigationKey } from "../../../plugins/store/navigation/actions";
import { NavigationKey } from "../../../plugins/store/navigation/types";

const Stacks = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNavigationKey(NavigationKey.stacks));
    }, []);

    return (
        <div>
            <Helmet title={"Stacks - " + APP_TITLE} />
            <_Stacks />
        </div>
    );
};

export default Stacks;

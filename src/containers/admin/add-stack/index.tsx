import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import StackForm from "../../../components/stack-form";
import { APP_TITLE } from "../../../helpers/environments";
import { setNavigationKey } from "../../../plugins/store/navigation/actions";
import { NavigationKey } from "../../../plugins/store/navigation/types";

const AddStack = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNavigationKey(NavigationKey.stacks));
    }, []);

    return (
        <div>
            <Helmet title={"Add Stack - " + APP_TITLE} />
            <StackForm />
        </div>
    );
};

export default AddStack;

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import StackForm from "../../../components/stack-form";
import { APP_TITLE } from "../../../helpers/environments";
import { setNavigationKey } from "../../../plugins/store/navigation/actions";
import { NavigationKey } from "../../../plugins/store/navigation/types";

type Params = {
    id: string;
};

const EditStack = () => {
    const dispatch = useDispatch();
    const params = useParams<Params>();

    useEffect(() => {
        dispatch(setNavigationKey(NavigationKey.stacks));
    }, []);

    return (
        <div>
            <Helmet title={"Edit Stack - " + APP_TITLE} />
            <StackForm id={params.id} />
        </div>
    );
};

export default EditStack;

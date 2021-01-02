import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Card from "../../components/card";
import SignInForm from "../../components/sign-in-form";
import { Store } from "../../plugins/store";
import { checkSignInState, signIn } from "../../plugins/store/auth/actions";

const SignIn = () => {
    const dispatch = useDispatch();
    const isSignAlready = useSelector((store: Store) => store.auth.isSignAlready);
    const isNotSignIn = useSelector((store: Store) => store.auth.isNotSignIn);
    const history = useHistory();

    useEffect(() => {
        dispatch(checkSignInState());
    }, []);

    useEffect(() => {
        if (isSignAlready) history.push("/admin");
    }, [isSignAlready]);

    return (
        <div className="flex w-full">
            {isNotSignIn && (
                <Card className="mx-auto p-6 mt-8">
                    <span className="text-4xl">Sign In</span>

                    <SignInForm className="mt-4" />
                </Card>
            )}
        </div>
    );
};

export default SignIn;

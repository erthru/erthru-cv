import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../plugins/store";
import { signIn } from "../../plugins/store/auth/actions";
import Alert, { AlertMode } from "../alert";
import Button from "../button";
import Input from "../input";

type Props = {
    className?: string;
};

const SignInForm = (props: Props) => {
    const dispatch = useDispatch();
    const isSignInAttempting = useSelector((store: Store) => store.auth.isSignInAttempting);
    const isSignInFailed = useSelector((store: Store) => store.auth.isSignInFailed);
    const isSignInSuccessfull = useSelector((store: Store) => store.auth.isSignInSuccessfull);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = (e: FormEvent) => {
        e.preventDefault();
        dispatch(signIn(email, password));
    };

    useEffect(() => {
        if (isSignInSuccessfull) window.location.href = "/admin";
    }, [isSignInSuccessfull]);

    return (
        <form onSubmit={(e) => auth(e)} className={props.className}>
            <div className="flex flex-wrap w-full">
                <label className="w-full">Email</label>

                <Input
                    className="w-full mt-2"
                    type="email"
                    placeholder="Input Email"
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    disabled={isSignInAttempting}
                    required
                />
            </div>

            <div className="flex flex-wrap w-full mt-4">
                <label className="w-full">Password</label>

                <Input
                    className="w-full mt-2"
                    type="password"
                    placeholder="Input Password"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    disabled={isSignInAttempting}
                    required
                />
            </div>

            {isSignInFailed && (
                <Alert mode={AlertMode.error} className="w-full mt-4">
                    Login Failed
                </Alert>
            )}

            <Button className="mt-4" type="submit" color="green-600" isLoading={isSignInAttempting}>
                Submit
            </Button>
        </form>
    );
};

export default SignInForm;

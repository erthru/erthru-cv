import React, { FormEvent, useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../plugins/store";
import { updateProfile } from "../../plugins/store/profile/actions";
import { Profile } from "../../plugins/store/profile/types";
import Button from "../button";
import Input from "../input";

type Props = {
    toEdit: ToEdit;
    onCancelClicked?(): void;
};

export enum ToEdit {
    avatar = "avatar",
    fullName = "fullName",
    career = "career",
    intro = "intro",
}

const MeEditForm = (props: Props) => {
    const dispatch = useDispatch();
    const profile = useSelector((store: Store) => store.profile.profile) as Profile;
    const isUpdatingProfile = useSelector((store: Store) => store.profile.isUpdatingProfile) as boolean;
    const [avatarUrl, setAvatarUrl] = useState("");
    const [fullName, setFullName] = useState("");
    const [career, setCareer] = useState("");
    const [intro, setIntro] = useState("");

    useEffect(() => {
        if (Object.keys(profile).length > 0) {
            setAvatarUrl(profile.avatarUrl!!);
            setFullName(profile.fullName!!);
            setCareer(profile.career!!);
            setIntro(profile.intro!!);
        }
    }, [profile]);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        switch (props.toEdit) {
            case ToEdit.avatar:
                dispatch(updateProfile({ avatarUrl: avatarUrl }));
                break;

            case ToEdit.fullName:
                dispatch(updateProfile({ fullName: fullName }));
                break;

            case ToEdit.career:
                dispatch(updateProfile({ career: career }));
                break;

            case ToEdit.intro:
                dispatch(updateProfile({ intro: intro }));
                break;

            default:
                break;
        }
    };

    return (
        <form className="w-full md:w-96 mt-2" onSubmit={onSubmit}>
            {props.toEdit === ToEdit.avatar && (
                <Input
                    type="text"
                    className="w-full mt-1"
                    value={avatarUrl}
                    onChange={(e) => setAvatarUrl(e.currentTarget.value)}
                    placeholder="Input Avatar Url"
                    required
                    disabled={isUpdatingProfile}
                />
            )}

            {props.toEdit === ToEdit.fullName && (
                <Input
                    type="text"
                    className="w-full mt-1"
                    value={fullName}
                    onChange={(e) => setFullName(e.currentTarget.value)}
                    placeholder="Input Full Name"
                    required
                    disabled={isUpdatingProfile}
                />
            )}

            {props.toEdit === ToEdit.career && (
                <Input
                    type="text"
                    className="w-full mt-1"
                    value={career}
                    onChange={(e) => setCareer(e.currentTarget.value)}
                    placeholder="Input Career"
                    required
                    disabled={isUpdatingProfile}
                />
            )}

            {props.toEdit === ToEdit.intro && (
                <Input
                    isTextArea
                    className="w-full mt-1"
                    value={intro}
                    onChange={(e) => setIntro(e.currentTarget.value)}
                    placeholder="Input Intro"
                    required
                    disabled={isUpdatingProfile}
                />
            )}

            <div className="flex mt-2">
                <Button type="submit" color="green-700" className="mt-2" isLoading={isUpdatingProfile}>
                    Save
                </Button>

                {!isUpdatingProfile && (
                    <Button type="button" color="red-600" className="mt-2 ml-2" onClick={props.onCancelClicked}>
                        Cancel
                    </Button>
                )}
            </div>
        </form>
    );
};

export default MeEditForm;

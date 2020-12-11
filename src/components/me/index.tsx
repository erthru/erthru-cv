import React, { useEffect, useState } from "react";
import ProgressBar from "../progress-bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Modal from "../modal";
import { Store } from "../../plugins/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../plugins/store/profile/actions";
import MeEditForm, { ToEdit } from "../me-edit-form";
import { Profile } from "../../plugins/store/profile/types";

const Me = () => {
    const dispatch = useDispatch();
    const profile = useSelector((store: Store) => store.profile.profile) as Profile;
    const isProfileUpdated = useSelector((store: Store) => store.profile.isProfileUpdated) as boolean;
    const [isLoading, setIsLoading] = useState(false);
    const [isEditModalShown, setIsEditModalShown] = useState(false);
    const [toEdit, setToEdit] = useState<ToEdit>(ToEdit.avatar);
    const [toEditTitle, setToEditTitle] = useState("");

    useEffect(() => {
        if (isProfileUpdated) {
            setIsEditModalShown(false);
            getProfile();
        }
    }, [isProfileUpdated]);

    const getProfile = () => {
        setIsLoading(true);
        dispatch(fetchProfile());
    };

    const _toEdit = (toEdit: ToEdit) => {
        setIsEditModalShown(true);
        setToEdit(toEdit);

        switch (toEdit) {
            case ToEdit.avatar:
                setToEditTitle("Edit Avatar Url");
                break;

            case ToEdit.fullName:
                setToEditTitle("Edit Full Name");
                break;

            case ToEdit.career:
                setToEditTitle("Edit Career");
                break;

            case ToEdit.intro:
                setToEditTitle("Edit Intro");
                break;

            default:
                break;
        }
    };

    return (
        <div>
            <div className="w-full bg-white rounded-xl flex flex-wrap p-10">
                {isLoading || Object.keys(profile).length === 0 && <ProgressBar className="mx-auto" />}

                {Object.keys(profile).length > 0 && (
                    <div className="w-full flex flex-wrap">
                        <div className="w-24 h-24 flex mx-auto relative">
                            <img src={profile?.avatarUrl} alt="avatar" className="w-full h-full rounded-full" style={{ objectFit: "cover" }} />
                            <div className="w-full h-full bg-red-300 absolute rounded-full" style={{ backgroundColor: "rgba(0,0,0,0.4)" }}></div>

                            <FontAwesomeIcon
                                className="text-white mr-auto cursor-pointer absolute text-2xl"
                                icon={faEdit}
                                style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                                onClick={() => _toEdit(ToEdit.avatar)}
                            />
                        </div>

                        <div className="w-full flex">
                            <div className="flex mx-auto items-center pl-6">
                                <span className="mt-4 font-medium text-gray-700 text-2xl text-center">{profile?.fullName}</span>

                                <FontAwesomeIcon
                                    className="text-gray-700 mt-4 ml-2 cursor-pointer"
                                    icon={faEdit}
                                    onClick={() => _toEdit(ToEdit.fullName)}
                                />
                            </div>
                        </div>

                        <div className="w-full flex">
                            <div className="flex mx-auto items-center pl-6">
                                <span className="font-medium text-gray-500 text-lg">{profile?.career}</span>

                                <FontAwesomeIcon className="text-gray-500 ml-2 cursor-pointer" icon={faEdit} onClick={() => _toEdit(ToEdit.career)} />
                            </div>
                        </div>

                        <span className="w-full text-center">. . .</span>

                        <div className="w-full flex items-center md:px-10">
                            <div className="mx-auto flex items-center pl-6">
                                <p className="text-gray-700 mt-2 text-center">{profile?.intro}</p>

                                <FontAwesomeIcon className="text-gray-700 ml-2 cursor-pointer" icon={faEdit} onClick={() => _toEdit(ToEdit.intro)} />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <Modal title={toEditTitle} isShown={isEditModalShown}>
                <MeEditForm toEdit={toEdit} onCancelClicked={() => setIsEditModalShown(false)} />
            </Modal>
        </div>
    );
};

export default Me;

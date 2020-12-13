import React, { useEffect, useState } from "react";
import ProgressBar from "../progress-bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Modal from "../modal";
import { Store } from "../../plugins/store";
import { useSelector } from "react-redux";
import MeEditForm, { ToEdit } from "../me-edit-form";
import { Profile } from "../../plugins/store/profile/types";

const Me = () => {
    const profile = useSelector((store: Store) => store.profile.profile) as Profile;
    const isFetchingProfile = useSelector((store: Store) => store.profile.isFetchingProfile) as boolean;
    const isProfileUpdated = useSelector((store: Store) => store.profile.isProfileUpdated) as boolean;
    const [isEditModalShown, setIsEditModalShown] = useState(false);
    const [toEdit, setToEdit] = useState<ToEdit>(ToEdit.avatar);
    const [toEditTitle, setToEditTitle] = useState("");

    useEffect(() => {
        if (isProfileUpdated) setIsEditModalShown(false);
    }, [isProfileUpdated]);

    const _toEdit = (toEdit: ToEdit) => {
        setIsEditModalShown(true);
        setToEdit(toEdit);

        switch (toEdit) {
            case ToEdit.avatar:
                setToEditTitle("Edit Avatar Url");
                break;

            case ToEdit.cover:
                setToEditTitle("Edit Cover Url");
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
            <div className="w-full bg-white rounded-xl flex flex-wrap">
                {isFetchingProfile && (
                    <div className="flex w-full p-10">
                        <ProgressBar className="mx-auto text-4xl" color="red-600" />
                    </div>
                )}

                {!isFetchingProfile && (
                    <div className="w-full h-64 rounded-t-xl relative">
                        <img src={profile.coverUrl} alt="cover" className="w-full h-full rounded-t-xl" style={{ objectFit: "cover" }} />
                        <div className="w-full h-full absolute top-0 rounded-t-xl" style={{ backgroundColor: "rgba(255, 138, 138, 0.8)" }}></div>

                        <div className="absolute" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                            <div className="w-24 h-24 flex mx-auto relative">
                                <img src={profile?.avatarUrl} alt="avatar" className="w-full h-full rounded-full" style={{ objectFit: "cover" }} />
                                <div className="w-full h-full absolute rounded-full"></div>

                                <FontAwesomeIcon
                                    className="text-white mr-auto cursor-pointer absolute text-2xl"
                                    icon={faEdit}
                                    style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                                    onClick={() => _toEdit(ToEdit.avatar)}
                                />
                            </div>
                        </div>

                        <FontAwesomeIcon
                            className="text-white mt-4 ml-2 text-xl mr-3 cursor-pointer absolute top-0 right-0"
                            icon={faEdit}
                            onClick={() => _toEdit(ToEdit.cover)}
                        />
                    </div>
                )}

                {!isFetchingProfile && (
                    <div className="w-full flex flex-wrap px-6 md:px-10 pb-6 md:pb-10">
                        <div className="w-full flex">
                            <div className="flex mx-auto items-center pl-6">
                                <span className="mt-4 font-medium text-gray-600 text-2xl text-center">{profile?.fullName}</span>

                                <FontAwesomeIcon
                                    className="text-gray-600 mt-4 ml-2 cursor-pointer"
                                    icon={faEdit}
                                    onClick={() => _toEdit(ToEdit.fullName)}
                                />
                            </div>
                        </div>

                        <div className="w-full flex">
                            <div className="flex mx-auto items-center pl-6">
                                <span className="font-medium text-gray-400 text-lg">{profile?.career}</span>

                                <FontAwesomeIcon className="text-gray-400 ml-2 cursor-pointer" icon={faEdit} onClick={() => _toEdit(ToEdit.career)} />
                            </div>
                        </div>

                        <span className="w-full text-center">. . .</span>

                        <div className="w-full flex items-center md:px-10">
                            <div className="mx-auto flex items-center pl-6">
                                <p className="text-gray-600 mt-2 text-center">{profile?.intro}</p>

                                <FontAwesomeIcon className="text-gray-600 ml-2 cursor-pointer" icon={faEdit} onClick={() => _toEdit(ToEdit.intro)} />
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

import React, { FormEvent, useEffect, useState } from "react";
import { Profile } from "../../plugins/db/repositories/profile-repository";
import * as profileRepository from "../../plugins/db/repositories/profile-repository";
import ProgressBar from "../progress-bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Modal from "../modal";
import Input from "../input";
import Button from "../button";

const Me = () => {
    const [profile, setProfile] = useState<Profile>();
    const [isLoading, setIsLoading] = useState(false);
    const [isEditAvatarModalShown, setIsEditAvatarModalShown] = useState(false);
    const [isEditFullNameModalShown, setIsEditFullNameModalShown] = useState(false);
    const [isEditCareerModalShown, setIsEditCareerModalShown] = useState(false);
    const [isEditIntroModalShown, setIsEditIntroModalShown] = useState(false);
    const [avatarUrl, setAvatarUrl] = useState("");
    const [fullName, setFullName] = useState("");
    const [career, setCareer] = useState("");
    const [intro, setIntro] = useState("");
    const [isUpdatingData, setIsUpdatingData] = useState(false);

    enum Update {
        avatar = "avatar",
        fullName = "fullName",
        career = "career",
        intro = "intro",
    }

    useEffect(() => {
        getProfile();
    }, []);

    useEffect(() => {
        if (isEditAvatarModalShown) setAvatarUrl(profile?.avatarUrl!!);
        if (isEditFullNameModalShown) setFullName(profile?.fullName!!);
        if (isEditCareerModalShown) setCareer(profile?.career!!);
        if (isEditIntroModalShown) setIntro(profile?.intro!!);
    }, [isEditAvatarModalShown, isEditFullNameModalShown, isEditCareerModalShown, isEditIntroModalShown]);

    const getProfile = () => {
        setIsLoading(true);

        profileRepository.getSingle().then((_profile) => {
            setProfile(_profile);
            setIsLoading(false);
        });
    };

    const updateData = (e: FormEvent<HTMLFormElement>, update: Update) => {
        e.preventDefault();
        setIsUpdatingData(true);

        switch (update) {
            case Update.avatar:
                profileRepository.updateAvatarUrl(avatarUrl).then((_) => {
                    getProfile();
                    setIsUpdatingData(false);
                    setIsEditAvatarModalShown(false);
                });

                break;

            case Update.fullName:
                profileRepository.updateFullName(fullName).then((_) => {
                    getProfile();
                    setIsUpdatingData(false);
                    setIsEditFullNameModalShown(false);
                });

                break;

            case Update.career:
                profileRepository.updateCareer(career).then((_) => {
                    getProfile();
                    setIsUpdatingData(false);
                    setIsEditCareerModalShown(false);
                });

                break;

            case Update.intro:
                profileRepository.updateIntro(intro).then((_) => {
                    getProfile();
                    setIsUpdatingData(false);
                    setIsEditIntroModalShown(false);
                });

                break;

            default:
                break;
        }
    };

    return (
        <div>
            <div className="w-full bg-white rounded-xl flex flex-wrap p-10">
                {isLoading && <ProgressBar className="mx-auto" />}

                {!isLoading && (
                    <div className="w-full flex flex-wrap">
                        <div className="w-24 h-24 flex mx-auto relative">
                            <img src={profile?.avatarUrl} alt="avatar" className="w-full h-full rounded-full" style={{ objectFit: "cover" }} />
                            <div className="w-full h-full bg-red-300 absolute rounded-full" style={{ backgroundColor: "rgba(0,0,0,0.4)" }}></div>

                            <FontAwesomeIcon
                                className="text-white mr-auto cursor-pointer absolute text-2xl"
                                icon={faEdit}
                                style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                                onClick={() => setIsEditAvatarModalShown(true)}
                            />
                        </div>

                        <div className="w-full flex">
                            <div className="flex mx-auto items-center pl-6">
                                <span className="mt-4 font-medium text-gray-700 text-2xl text-center">{profile?.fullName}</span>

                                <FontAwesomeIcon
                                    className="text-gray-700 mt-4 ml-2 cursor-pointer"
                                    icon={faEdit}
                                    onClick={() => setIsEditFullNameModalShown(true)}
                                />
                            </div>
                        </div>

                        <div className="w-full flex">
                            <div className="flex mx-auto items-center pl-6">
                                <span className="font-medium text-gray-500 text-lg">{profile?.career}</span>

                                <FontAwesomeIcon
                                    className="text-gray-500 ml-2 cursor-pointer"
                                    icon={faEdit}
                                    onClick={() => setIsEditCareerModalShown(true)}
                                />
                            </div>
                        </div>

                        <span className="w-full text-center">. . .</span>

                        <div className="w-full flex items-center md:px-10">
                            <div className="mx-auto flex items-center pl-6">
                                <p className="text-gray-700 mt-2 text-center">{profile?.intro}</p>

                                <FontAwesomeIcon
                                    className="text-gray-700 ml-2 cursor-pointer"
                                    icon={faEdit}
                                    onClick={() => setIsEditIntroModalShown(true)}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <Modal title="Edit Avatar Url" isShown={isEditAvatarModalShown}>
                <form className="w-full md:w-96 mt-2" onSubmit={(e) => updateData(e, Update.avatar)}>
                    <Input
                        type="text"
                        className="w-full mt-1"
                        value={avatarUrl}
                        onChange={(e) => setAvatarUrl(e.currentTarget.value)}
                        placeholder="Input Avatar Url"
                        required
                        disabled={isUpdatingData}
                    />

                    <div className="flex mt-2">
                        <Button type="submit" color="green-700" className="mt-2" isLoading={isUpdatingData}>
                            Save
                        </Button>

                        {!isUpdatingData && (
                            <Button type="button" onClick={() => setIsEditAvatarModalShown(false)} color="red-700" className="mt-2 ml-2">
                                Close
                            </Button>
                        )}
                    </div>
                </form>
            </Modal>

            <Modal title="Edit Full Name" isShown={isEditFullNameModalShown}>
                <form className="w-full md:w-96 mt-2" onSubmit={(e) => updateData(e, Update.fullName)}>
                    <Input
                        type="text"
                        className="w-full mt-1"
                        value={fullName}
                        onChange={(e) => setFullName(e.currentTarget.value)}
                        placeholder="Input Full Name"
                        required
                        disabled={isUpdatingData}
                    />

                    <div className="flex mt-2">
                        <Button type="submit" color="green-700" className="mt-2" isLoading={isUpdatingData}>
                            Save
                        </Button>

                        {!isUpdatingData && (
                            <Button type="button" onClick={() => setIsEditFullNameModalShown(false)} color="red-700" className="mt-2 ml-2">
                                Close
                            </Button>
                        )}
                    </div>
                </form>
            </Modal>

            <Modal title="Edit Career" isShown={isEditCareerModalShown}>
                <form className="w-full md:w-96 mt-2" onSubmit={(e) => updateData(e, Update.career)}>
                    <Input
                        type="text"
                        className="w-full mt-1"
                        value={career}
                        onChange={(e) => setCareer(e.currentTarget.value)}
                        placeholder="Input Career"
                        required
                        disabled={isUpdatingData}
                    />

                    <div className="flex mt-2">
                        <Button type="submit" color="green-700" className="mt-2" isLoading={isUpdatingData}>
                            Save
                        </Button>

                        {!isUpdatingData && (
                            <Button type="button" onClick={() => setIsEditCareerModalShown(false)} color="red-700" className="mt-2 ml-2">
                                Close
                            </Button>
                        )}
                    </div>
                </form>
            </Modal>

            <Modal title="Edit Intro" isShown={isEditIntroModalShown}>
                <form className="w-full md:w-96 mt-2" onSubmit={(e) => updateData(e, Update.intro)}>
                    <Input
                        className="w-full mt-1"
                        value={intro}
                        onChange={(e) => setIntro(e.currentTarget.value)}
                        placeholder="Input Intro"
                        isTextArea
                        required
                        disabled={isUpdatingData}
                    />

                    <div className="flex mt-2">
                        <Button type="submit" color="green-700" className="mt-2" isLoading={isUpdatingData}>
                            Save
                        </Button>

                        {!isUpdatingData && (
                            <Button type="button" onClick={() => setIsEditIntroModalShown(false)} color="red-700" className="mt-2 ml-2">
                                Close
                            </Button>
                        )}
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default Me;

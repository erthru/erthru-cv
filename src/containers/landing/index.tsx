import { faFacebookF, faGithubAlt, faInstagram, faLinkedinIn, faMediumM } from "@fortawesome/free-brands-svg-icons";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import Card from "../../components/card";
import ProgressBar from "../../components/progress-bar";
import { APP_TITLE } from "../../helpers/environments";
import { Store } from "../../plugins/store";

enum Navigation {
    overview = "overview",
    workExperiences = "workExperiences",
    languages = "languages",
    portfolios = "portfolios",
}

const Landing = () => {
    const profile = useSelector((store: Store) => store.profile.profile);
    const isFetchingProfile = useSelector((store: Store) => store.profile.isFetchingProfile);
    const [navigation, setNavigation] = useState<Navigation>(Navigation.overview);

    const navigate = (navigation: Navigation) => {
        setNavigation(navigation);
    };

    return (
        <div>
            <Helmet title={APP_TITLE} />

            {isFetchingProfile && (
                <div className="fixed bg-red-400 h-screen w-screen flex items-center">
                    <ProgressBar color="white" className="mx-auto text-4xl" />
                </div>
            )}

            {!isFetchingProfile && (
                <div className="flex flex-wrap w-full p-6 container mx-auto" style={{ maxWidth: "1150px" }}>
                    <Card className="w-full pb-10">
                        <div className="rounded-t-xl relative h-48 md:h-64 w-full flex flex-wrap">
                            <img src={profile.coverUrl} alt="cover" className="w-full h-full rounded-t-xl" style={{ objectFit: "cover" }} />
                            <div className="w-full h-full absolute top-0 rounded-t-xl" style={{ backgroundColor: "rgba(209, 88, 88, 0.91)" }}></div>

                            <div className="absolute w-full h-full flex flex-wrap">
                                <div className="w-full flex">
                                    <span className="text-white font-bold text-lg md:text-2xl ml-6 mt-4">{APP_TITLE}</span>

                                    <div className="ml-auto text-white mt-4 mr-6 font-medium hidden md:block">
                                        <span
                                            className={
                                                "cursor-pointer " + (navigation === Navigation.overview ? "border-b-2 px-1 pb-1 border-white" : "")
                                            }
                                            onClick={() => navigate(Navigation.overview)}
                                        >
                                            Overview
                                        </span>

                                        <span
                                            className={
                                                "ml-6 cursor-pointer " +
                                                (navigation === Navigation.workExperiences ? "border-b-2 px-1 pb-1 border-white" : "")
                                            }
                                            onClick={() => navigate(Navigation.workExperiences)}
                                        >
                                            Work Experiences
                                        </span>

                                        <span
                                            className={
                                                "ml-6 cursor-pointer " +
                                                (navigation === Navigation.languages ? "border-b-2 px-1 pb-1 border-white" : "")
                                            }
                                            onClick={() => navigate(Navigation.languages)}
                                        >
                                            Languages
                                        </span>

                                        <span
                                            className={
                                                "ml-6 cursor-pointer " +
                                                (navigation === Navigation.portfolios ? "border-b-2 px-1 pb-1 border-white" : "")
                                            }
                                            onClick={() => navigate(Navigation.portfolios)}
                                        >
                                            Portfolios
                                        </span>
                                    </div>

                                    <FontAwesomeIcon icon={faBars} className="ml-auto md:hidden mr-6 text-xl mt-5 cursor-pointer text-white"/>
                                </div>

                                <div className="w-full flex flex-wrap mt-auto pb-16 md:pb-24">
                                    <span className="w-full text-center text-white font-medium mx-4 text-xl md:text-3xl">{profile.fullName}</span>
                                    <span className="w-full text-center text-white text-sm md:text-base pb-2 md:pb-0">{profile.career}</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-24 h-24 md:w-32 md:h-32 mx-auto p-1 bg-gray-50 -mt-12 md:-mt-16 rounded-full z-10 relative">
                            <img src={profile.avatarUrl} alt="avatar" className="w-full h-full rounded-full" style={{ objectFit: "cover" }} />
                        </div>

                        <div className="flex w-full mt-7">
                            <div className="mx-auto flex">
                                <a href="#">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 text-lg md:text-2xl cursor-pointer" />
                                </a>

                                <a href="#" className="ml-6">
                                    <FontAwesomeIcon icon={faGithubAlt} className="text-gray-400 text-lg md:text-2xl cursor-pointer" />
                                </a>

                                <a href="#" className="ml-6">
                                    <FontAwesomeIcon icon={faLinkedinIn} className="text-gray-400 text-lg md:text-2xl cursor-pointer" />
                                </a>

                                <a href="#" className="ml-6">
                                    <FontAwesomeIcon icon={faMediumM} className="text-gray-400 text-lg md:text-2xl cursor-pointer" />
                                </a>

                                <a href="#" className="ml-6">
                                    <FontAwesomeIcon icon={faFacebookF} className="text-gray-400 text-lg md:text-2xl cursor-pointer" />
                                </a>

                                <a href="#" className="ml-6">
                                    <FontAwesomeIcon icon={faInstagram} className="text-gray-400 text-lg md:text-2xl cursor-pointer" />
                                </a>
                            </div>
                        </div>

                        <div className="flex w-full px-6 md:px-16 mt-7">
                            <span className="w-full text-center text-sm md:text-base text-gray-800">{profile.intro}</span>
                        </div>
                    </Card>
                </div>
            )}
        </div>
    );
};

export default Landing;

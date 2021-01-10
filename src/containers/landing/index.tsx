import { faFacebookF, faGithubAlt, faInstagram, faLinkedinIn, faMediumM } from "@fortawesome/free-brands-svg-icons";
import { faAngleDoubleDown, faBars, faChevronUp, faCircle, faEllipsisH, faEnvelope, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import Card from "../../components/card";
import ProgressBar from "../../components/progress-bar";
import { APP_TITLE } from "../../helpers/environments";
import { Store } from "../../plugins/store";

enum Navigation {
    workExperiences = "workExperiences",
    portfolios = "portfolios",
}

const Progress = () => (
    <div className="fixed bg-red-400 h-screen w-screen flex items-center">
        <ProgressBar color="white" className="mx-auto text-4xl" />
    </div>
);

const Overview = () => {
    const profile = useSelector((store: Store) => store.profile.profile);
    const languages = useSelector((store: Store) => store.language.languages);
    const contact = useSelector((store: Store) => store.contact.contact);
    const [navigation, setNavigation] = useState<Navigation | null>(null);
    const [isToggled, setIsToggled] = useState(false);

    const navigate = (navigation: Navigation) => {
        setIsToggled(false);
        setNavigation(navigation);
    };

    useEffect(() => {
        let elemToView: HTMLElement | null = null;

        switch (navigation) {
            case Navigation.workExperiences:
                elemToView = document.getElementById("workExperiences");
                break;

            case Navigation.portfolios:
                elemToView = document.getElementById("portfolios");
                break;

            default:
                break;
        }

        elemToView?.scrollIntoView({
            behavior: "smooth",
        });

        setNavigation(null);
    }, [navigation]);

    return (
        <Card className="w-full pb-10">
            <div className="rounded-t-xl relative h-48 md:h-64 w-full flex flex-wrap">
                <img src={profile.coverUrl} alt="cover" className="w-full h-full rounded-t-xl" style={{ objectFit: "cover" }} />
                <div className="w-full h-full absolute top-0 rounded-t-xl" style={{ backgroundColor: "rgba(209, 88, 88, 0.91)" }} />

                <div className="absolute w-full h-full flex flex-wrap">
                    <div className="w-full flex">
                        <span className="text-white font-bold text-lg md:text-2xl ml-6 mt-4">{APP_TITLE.split(" ")[0]}</span>
                        <span className="text-gray-300 font-bold text-lg md:text-2xl ml-1 mt-4">{APP_TITLE.split(" ")[1]}</span>

                        <div className="ml-auto flex mr-6 mt-4 relative">
                            {!isToggled && (
                                <FontAwesomeIcon
                                    icon={faBars}
                                    className="text-white text-lg mt-1 md:mt-0 md:text-2xl cursor-pointer"
                                    onClick={() => setIsToggled(true)}
                                />
                            )}

                            {isToggled && (
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    className="text-white text-lg mt-1 md:mt-0 md:text-2xl cursor-pointer"
                                    onClick={() => setIsToggled(false)}
                                />
                            )}

                            {isToggled && (
                                <div
                                    className="z-20 text-gray-100 border border-gray-300 text-white flex flex-wrap w-52 absolute right-0 top-0 mr-8 rounded-xl p-4"
                                    style={{ backgroundColor: "#C55252" }}
                                >
                                    <div className="flex w-full items-center">
                                        <span className="w-full font-medium cursor-pointer" onClick={() => navigate(Navigation.workExperiences)}>
                                            Work Experiences
                                        </span>

                                        <FontAwesomeIcon icon={faAngleDoubleDown} />
                                    </div>

                                    <div className="w-full flex items-center mt-4">
                                        <span className="w-full font-medium cursor-pointer" onClick={() => navigate(Navigation.portfolios)}>
                                            Porfolios
                                        </span>

                                        <FontAwesomeIcon icon={faAngleDoubleDown} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-wrap -mt-28 md:-mt-40 z-index-20 relative">
                    <div className="w-full flex flex-wrap -mt-2 md:mt-0">
                        <span className="w-full text-center text-white font-medium mx-4 text-xl md:text-3xl">{profile.fullName}</span>
                        <span className="w-full text-center text-white text-sm md:text-base pb-2 md:pb-0">{profile.career}</span>
                    </div>

                    <div className="w-full h-full" />
                </div>
            </div>

            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto p-1 bg-gray-50 -mt-12 md:-mt-16 rounded-full z-10 relative">
                <img src={profile.avatarUrl} alt="avatar" className="w-full h-full rounded-full" style={{ objectFit: "cover" }} />
            </div>

            <div className="flex w-full mt-4 md:mt-8">
                <div className="mx-auto flex">
                    <a href={"mailto:" + contact.email}>
                        <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 text-lg md:text-3xl cursor-pointer" />
                    </a>

                    <a target="blank" href={contact.githubUrl} className="ml-6">
                        <FontAwesomeIcon icon={faGithubAlt} className="text-gray-400 text-lg md:text-3xl cursor-pointer" />
                    </a>

                    <a target="blank" href={contact.linkedinUrl} className="ml-6">
                        <FontAwesomeIcon icon={faLinkedinIn} className="text-gray-400 text-lg md:text-3xl cursor-pointer" />
                    </a>

                    <a target="blank" href={contact.mediumUrl} className="ml-6">
                        <FontAwesomeIcon icon={faMediumM} className="text-gray-400 text-lg md:text-3xl cursor-pointer" />
                    </a>

                    <a target="blank" href={contact.facebookUrl} className="ml-6">
                        <FontAwesomeIcon icon={faFacebookF} className="text-gray-400 text-lg md:text-3xl cursor-pointer" />
                    </a>

                    <a target="blank" href={contact.instagramUrl} className="ml-6">
                        <FontAwesomeIcon icon={faInstagram} className="text-gray-400 text-lg md:text-3xl cursor-pointer" />
                    </a>
                </div>
            </div>

            <div className="flex w-full px-6 md:px-16 mt-4 md:mt-8">
                <span className="w-full text-center text-sm md:text-base text-gray-800">{profile.intro}</span>
            </div>

            <div className="flex w-full px-6 md:px-16 mt-2 md:mt-4">
                <div className="mx-auto flex flex-wrap">
                    {languages.map((language, index) => (
                        <div className="w-full md:w-auto flex items-center text-sm md:text-base text-gray-800" key={language.id}>
                            <span className="text-center mx-auto md:mx-0">
                                {language.lang} ({language.level})
                            </span>

                            {index < languages.length - 1 && (
                                <FontAwesomeIcon icon={faCircle} className="ml-2 mr-2 hidden md:block" style={{ fontSize: "5px" }} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
};

const WorkExperiences = () => {
    const workExperiences = useSelector((store: Store) => store.workExperience.workExperiences);

    return (
        <Card className="mt-6 p-6 w-full flex flex-wrap" id="workExperiences">
            <div className="w-full flex">
                <div className="flex mx-auto text-gray-600 md:text-xl items-center">
                    <FontAwesomeIcon icon={faEllipsisH} className="mr-4" />
                    <span className="font-bold text-center">WORK EXPERIENCES</span>
                    <FontAwesomeIcon icon={faEllipsisH} className="ml-4" />
                </div>
            </div>

            <div className="w-full mt-4 md:mt-8 pb-4 flex flex-wrap">
                {workExperiences.map((workExperience, index) => (
                    <div className="mx-auto items-center w-full hidden md:flex">
                        <div
                            className={
                                "flex text-right flex-wrap mr-6 relative w-full " +
                                (index === workExperiences.length - 1 ? "mb-10 " : " ") +
                                (index === 0 ? "mt-6" : "mt-8")
                            }
                            key={index}
                        >
                            <div className={"bg-gray-100 rounded-xl p-4 w-full mt-2 flex flex-wrap " + (index % 2 === 0 ? "invisible" : "visible")}>
                                <span className="w-full font-bold text-lg text-gray-800">{workExperience.place}</span>

                                <ul className="list-disc w-full mr-4 text-gray-800" style={{ direction: "rtl" }}>
                                    {workExperience.activities?.map((activity, _index) => (
                                        <li key={_index}>{activity}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className={"w-full h-full absolute top-0 flex " + (index % 2 !== 0 ? "invisible" : "visible")}>
                                <span className="font-medium w-full mr-2 text-gray-700 text-2xl ml-auto my-auto">{workExperience.timeframe}</span>

                                <div className="w-3 h-3 ml-auto my-auto rounded-full bg-red-600 -mr-8" />
                            </div>
                        </div>

                        <div className="w-2 bg-red-400 h-full" />

                        <div
                            className={
                                "flex flex-wrap ml-6 w-full relative " +
                                (index === workExperiences.length - 1 ? "mb-10 " : " ") +
                                (index === 0 ? "mt-6" : "mt-8")
                            }
                            key={index}
                        >
                            <div className={"bg-gray-100 rounded-xl p-4 w-full mt-2 flex flex-wrap " + (index % 2 !== 0 ? "invisible" : "visible")}>
                                <span className="w-full font-bold text-lg text-gray-800">{workExperience.place}</span>

                                <ul className="list-disc ml-4 text-gray-800">
                                    {workExperience.activities?.map((activity, _index) => (
                                        <li key={_index}>{activity}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className={"w-full h-full absolute top-0 flex " + (index % 2 === 0 ? "invisible" : "visible")}>
                                <div className="w-3 h-3 mr-auto my-auto rounded-full bg-red-600 -ml-8" />

                                <span className="font-medium w-full text-gray-700 ml-2 text-2xl mr-auto my-auto">{workExperience.timeframe}</span>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="flex flex-wrap w-full md:hidden">
                    {workExperiences.map((workExperience, index) => (
                        <div className="flex items-center w-full" key={index}>
                            <div className="h-full w-1 bg-red-400" />

                            <div className="w-3 h-3 rounded-full bg-red-500" style={{ marginLeft: "-7px" }} />

                            <div
                                className={
                                    "rounded-xl ml-3 flex flex-wrap mt-4 bg-gray-100 w-full p-4 " +
                                    (index === workExperiences.length - 1 ? "mb-4" : "")
                                }
                            >
                                <span className="w-full text-gray-800">{workExperience.timeframe}</span>
                                <span className="w-full font-medium text-gray-700">{workExperience.place}</span>

                                <ul className="w-full list-disc ml-4 mt-2 text-gray-800">
                                    {workExperience.activities?.map((activity, _index) => (
                                        <li key={_index}>{activity}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
};

const Portfolios = () => {
    const portfolios = useSelector((store: Store) => store.portfolio.portfolios);

    return (
        <Card className="mt-6 p-6 w-full flex flex-wrap" id="portfolios">
            <div className="w-full flex">
                <div className="flex mx-auto text-gray-600 md:text-xl items-center">
                    <FontAwesomeIcon icon={faEllipsisH} className="mr-4" />
                    <span className="font-bold text-center">PORTFOLIOS</span>
                    <FontAwesomeIcon icon={faEllipsisH} className="ml-4" />
                </div>
            </div>

            <div className="mx-auto flex flex-wrap w-full">
                {portfolios.map((portfolio, index) => (
                    <div className={"w-full md:w-1/3 flex mt-4 md:px-2"} key={index}>
                        <div className="rounded-xl bg-red-400 w-full flex cursor-pointer">
                            <div
                                className="rounded-xl w-full h-52 relative"
                                style={{
                                    backgroundImage: "linear-gradient(to bottom, transparent 0%, #400101 180%), url(" + portfolio.previewOneUrl + ")",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center center",
                                }}
                            >
                                <div className="absolute bottom-0 left-0 w-full flex flex-wrap px-4 pb-4">
                                    <span className="text-white font-medium text-2xl w-full">{portfolio.title}</span>
                                    <span className="w-full text-gray-300 text-sm w-full truncate">{portfolio.description}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};

const Footer = () => {
    const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;

        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    };

    return (
        <Card className="mt-6 p-6 w-full flex flex-wrap bg-gray-800">
            <div className="w-full flex flex-wrap md:flex-nowrap items-center">
                <div className="w-full flex md:hidden">
                    <div className="bg-red-500 rounded-full w-8 h-8 mx-auto flex items-center cursor-pointer" onClick={scrollToTop}>
                        <FontAwesomeIcon icon={faChevronUp} className="mx-auto text-white" />
                    </div>
                </div>

                <div className="w-full flex mt-4 md:mt-0">
                    <div className="mx-auto md:mx-0">
                        <span className="text-red-500 font-bold text-lg md:text-2xl">{APP_TITLE.split(" ")[0]}</span>
                        <span className="text-gray-300 font-bold text-lg md:text-2xl ml-1">{APP_TITLE.split(" ")[1]}</span>
                    </div>
                </div>

                <div className="w-full md:flex hidden">
                    <div className="bg-red-500 rounded-full w-12 h-12 mx-auto flex items-center cursor-pointer" onClick={scrollToTop}>
                        <FontAwesomeIcon icon={faChevronUp} className="mx-auto text-white text-xl" />
                    </div>
                </div>

                <div className="w-full flex flex-wrap text-xs md:text-sm mt-2 md:mt-0">
                    <span className="text-gray-400 w-full text-center md:text-right">All created with ♥</span>

                    <span className="text-gray-400 w-full text-center md:text-right">
                        Clone this on{" "}
                        <a className="text-red-400" href="https://github.com/erthru/erthru-cv" target="_blank">
                            Github
                        </a>
                    </span>
                </div>
            </div>
        </Card>
    );
};

const Landing = () => {
    const isFetchingProfile = useSelector((store: Store) => store.profile.isFetchingProfile);

    return (
        <div>
            <Helmet title={APP_TITLE} />

            {isFetchingProfile && <Progress />}

            {!isFetchingProfile && (
                <div className="flex flex-wrap w-full p-6 container mx-auto" style={{ maxWidth: "1150px", transform: "translate(0, 0)" }}>
                    <Overview />
                    <WorkExperiences />
                    <Portfolios />
                    <Footer />
                </div>
            )}
        </div>
    );
};

export default Landing;

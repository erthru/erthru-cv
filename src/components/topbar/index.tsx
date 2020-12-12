import {
    faBars,
    faBriefcase,
    faFileCode,
    faIdCard,
    faLanguage,
    faLayerGroup,
    faSignOutAlt,
    faThLarge,
    faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Store } from "../../plugins/store";
import { setNavigationKey } from "../../plugins/store/navigation/actions";
import { NavigationKey } from "../../plugins/store/navigation/types";
import { Profile } from "../../plugins/store/profile/types";
import ProgressBar from "../progress-bar";
import TopbarItem from "../topbar-item";
import "./index.css";

const Topbar = () => {
    const currentActiveKey = useSelector((store: Store) => store.navigation.currentActiveKey) as NavigationKey;
    const profile = useSelector((store: Store) => store.profile.profile) as Profile;
    const isFetchingProfile = useSelector((store: Store) => store.profile.isFetchingProfile) as boolean;
    const dispatch = useDispatch();
    const [isItemsActive, setIsItemsActive] = useState(false);

    const onItemClicked = (key: NavigationKey) => {
        dispatch(setNavigationKey(key));
        expand();
    };

    const expand = () => {
        setIsItemsActive(!isItemsActive);
    };

    return (
        <div className="w-full py-3 px-4 bg-white rounded-xl items-center flex flex-wrap">
            <div className="flex w-full items-center">
                <FontAwesomeIcon
                    icon={faBars}
                    className="lg:ml-auto text-gray-600 text-xl cursor-pointer block lg:hidden"
                    onClick={() => setIsItemsActive(!isItemsActive)}
                />

                <div className="w-full flex lg:w-auto ml-4 lg:ml-0 text-lg items-center">
                    <span className="text-gray-500">Hi,</span>
                    {isFetchingProfile && <ProgressBar className="ml-1" color="gray-800" />}
                    {!isFetchingProfile && <span className="text-gray-800 font-bold ml-1">{profile.fullName?.split(" ")[0]}</span>}
                </div>

                <Link to="/logout" className="ml-4 lg:ml-auto cursor-pointer hidden lg:block">
                    <FontAwesomeIcon icon={faSignOutAlt} className="text-red-800 text-xl" />
                </Link>
            </div>

            <div className={"mt-4 flex w-full flex-wrap mx-auto items-center block lg:hidden topbar-expand " + (isItemsActive && "active")}>
                <TopbarItem
                    title="OVERVIEW"
                    to="/admin"
                    icon={faThLarge}
                    isActive={currentActiveKey === NavigationKey.overview}
                    onClick={() => onItemClicked(NavigationKey.overview)}
                />

                <TopbarItem
                    title="WORK EXPERIENCE"
                    to="/admin/work-experience"
                    className="mt-2"
                    icon={faBriefcase}
                    isActive={currentActiveKey === NavigationKey.workExperience}
                    onClick={() => onItemClicked(NavigationKey.workExperience)}
                />

                <TopbarItem
                    title="FORMAL EDUCATION"
                    to="/admin/formal-education"
                    className="mt-2"
                    icon={faUniversity}
                    isActive={currentActiveKey === NavigationKey.formalEducation}
                    onClick={() => onItemClicked(NavigationKey.formalEducation)}
                />

                <TopbarItem
                    title="LANGUAGE"
                    to="/admin/language"
                    className="mt-2"
                    icon={faLanguage}
                    isActive={currentActiveKey === NavigationKey.language}
                    onClick={() => onItemClicked(NavigationKey.language)}
                />

                <TopbarItem
                    title="PORTFOLIO"
                    to="/admin/portfolio"
                    icon={faLayerGroup}
                    className="mt-2"
                    isActive={currentActiveKey === NavigationKey.portfolio}
                    onClick={() => onItemClicked(NavigationKey.portfolio)}
                />

                <TopbarItem
                    title="CONTACT"
                    to="/admin/contact"
                    icon={faIdCard}
                    className="mt-2"
                    isActive={currentActiveKey === NavigationKey.contact}
                    onClick={() => onItemClicked(NavigationKey.contact)}
                />

                <TopbarItem
                    title="DOCUMENT"
                    to="/admin/document"
                    icon={faFileCode}
                    className="mt-2"
                    isActive={currentActiveKey === NavigationKey.document}
                    onClick={() => onItemClicked(NavigationKey.document)}
                />

                <TopbarItem title="LOGOUT" to="/logout" icon={faSignOutAlt} className="mt-2" />
            </div>
        </div>
    );
};

export default Topbar;

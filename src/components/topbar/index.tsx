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
import Card from "../card";
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
        <Card className="w-full py-3 px-4 items-center flex flex-wrap">
            <div className="flex w-full items-center">
                <FontAwesomeIcon
                    icon={faBars}
                    className="lg:ml-auto text-gray-600 text-xl cursor-pointer block lg:hidden"
                    onClick={() => setIsItemsActive(!isItemsActive)}
                />

                <div className="w-full flex lg:w-auto ml-4 lg:ml-0 text-lg items-center">
                    <span className="text-gray-400">Hi,</span>
                    {isFetchingProfile && <ProgressBar className="ml-1" color="gray-600" />}
                    {!isFetchingProfile && <span className="text-gray-600 font-bold ml-1">{profile.fullName?.split(" ")[0]}</span>}
                </div>

                <Link to="/logout" className="ml-4 lg:ml-auto cursor-pointer hidden lg:block">
                    <FontAwesomeIcon icon={faSignOutAlt} className="text-red-600 text-xl" />
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
                    title="WORK EXPERIENCES"
                    to="/admin/work-experiences"
                    className="mt-2"
                    icon={faBriefcase}
                    isActive={currentActiveKey === NavigationKey.workExperiences}
                    onClick={() => onItemClicked(NavigationKey.workExperiences)}
                />

                <TopbarItem
                    title="FORMAL EDUCATIONS"
                    to="/admin/formal-educations"
                    className="mt-2"
                    icon={faUniversity}
                    isActive={currentActiveKey === NavigationKey.formalEducations}
                    onClick={() => onItemClicked(NavigationKey.formalEducations)}
                />

                <TopbarItem
                    title="LANGUAGES"
                    to="/admin/languages"
                    className="mt-2"
                    icon={faLanguage}
                    isActive={currentActiveKey === NavigationKey.languages}
                    onClick={() => onItemClicked(NavigationKey.languages)}
                />

                <TopbarItem
                    title="PORTFOLIOS"
                    to="/admin/portfolios"
                    icon={faLayerGroup}
                    className="mt-2"
                    isActive={currentActiveKey === NavigationKey.portfolios}
                    onClick={() => onItemClicked(NavigationKey.portfolios)}
                />

                <TopbarItem
                    title="CONTACTS"
                    to="/admin/contacts"
                    icon={faIdCard}
                    className="mt-2"
                    isActive={currentActiveKey === NavigationKey.contacts}
                    onClick={() => onItemClicked(NavigationKey.contacts)}
                />

                <TopbarItem
                    title="DOCUMENTS"
                    to="/admin/documents"
                    icon={faFileCode}
                    className="mt-2"
                    isActive={currentActiveKey === NavigationKey.documents}
                    onClick={() => onItemClicked(NavigationKey.documents)}
                />

                <TopbarItem
                    title="SETTINGS"
                    to="/admin/settings"
                    icon={faFileCode}
                    className="mt-2"
                    isActive={currentActiveKey === NavigationKey.settings}
                    onClick={() => onItemClicked(NavigationKey.settings)}
                />

                <TopbarItem title="LOGOUT" to="/logout" icon={faSignOutAlt} className="mt-2" />
            </div>
        </Card>
    );
};

export default Topbar;

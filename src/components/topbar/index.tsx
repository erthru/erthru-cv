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
import { setKey } from "../../plugins/store/navigation/actions";
import { Key } from "../../plugins/store/navigation/types";
import { Profile } from "../../plugins/store/profile/types";
import SearchInput from "../search-input";
import TopbarItem from "../topbar-item";
import "./index.css";

const Topbar = () => {
    const currentActiveKey = useSelector((store: Store) => store.navigation.currentActiveKey) as Key;
    const profile = useSelector((store: Store) => store.profile.profile) as Profile;
    const dispatch = useDispatch();
    const [isItemsActive, setIsItemsActive] = useState(false);

    const onItemClicked = (key: Key) => {
        dispatch(setKey(key));
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

                <div className="w-full flex lg:w-auto ml-4 lg:ml-0 text-lg">
                    <span className="text-gray-500">Hi,</span>
                    <span className="text-gray-800 font-bold ml-1">{profile.fullName?.split(" ")[0]}</span>
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
                    isActive={currentActiveKey === Key.overview}
                    onClick={() => onItemClicked(Key.overview)}
                />

                <TopbarItem
                    title="WORK EXPERIENCE"
                    to="/admin/work-experience"
                    className="mt-2"
                    icon={faBriefcase}
                    isActive={currentActiveKey === Key.workExperience}
                    onClick={() => onItemClicked(Key.workExperience)}
                />

                <TopbarItem
                    title="FORMAL EDUCATION"
                    to="/admin/formal-education"
                    className="mt-2"
                    icon={faUniversity}
                    isActive={currentActiveKey === Key.formalEducation}
                    onClick={() => onItemClicked(Key.formalEducation)}
                />

                <TopbarItem
                    title="LANGUAGE"
                    to="/admin/language"
                    className="mt-2"
                    icon={faLanguage}
                    isActive={currentActiveKey === Key.language}
                    onClick={() => onItemClicked(Key.language)}
                />

                <TopbarItem
                    title="PORTFOLIO"
                    to="/admin/portfolio"
                    icon={faLayerGroup}
                    className="mt-2"
                    isActive={currentActiveKey === Key.portfolio}
                    onClick={() => onItemClicked(Key.portfolio)}
                />

                <TopbarItem
                    title="CONTACT"
                    to="/admin/contact"
                    icon={faIdCard}
                    className="mt-2"
                    isActive={currentActiveKey === Key.contact}
                    onClick={() => onItemClicked(Key.contact)}
                />

                <TopbarItem
                    title="DOCUMENT"
                    to="/admin/document"
                    icon={faFileCode}
                    className="mt-2"
                    isActive={currentActiveKey === Key.document}
                    onClick={() => onItemClicked(Key.document)}
                />

                <TopbarItem title="LOGOUT" to="/logout" icon={faSignOutAlt} className="mt-2" />
            </div>
        </div>
    );
};

export default Topbar;

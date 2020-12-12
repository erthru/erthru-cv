import { faBriefcase, faFileCode, faIdCard, faLanguage, faLayerGroup, faThLarge, faUniversity } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { APP_TITLE } from "../../helpers/environments";
import { Store } from "../../plugins/store";
import { setNavigationKey } from "../../plugins/store/navigation/actions";
import { NavigationKey } from "../../plugins/store/navigation/types";
import SidebarItem from "../sidebar-item";

type Props = {
    className?: string;
};

const Sidebar = (props: Props) => {
    const currentActiveKey = useSelector((store: Store) => store.navigation.currentActiveKey) as NavigationKey;
    const dispatch = useDispatch();

    return (
        <div className={"bg-white hidden lg:flex flex-wrap rounded-xl py-6 " + props.className} style={{ width: "350px" }}>
            <div className="flex flex-wrap mx-auto text-center">
                <span className="text-2xl font-bold text-gray-600 w-full">{APP_TITLE.split(" ")[0]}</span>
                <span className="text-lg font-bold text-gray-400 w-full -mt-1">{APP_TITLE.split(" ")[1]}</span>
            </div>

            <SidebarItem
                icon={faThLarge}
                title="OVERVIEW"
                isActive={currentActiveKey === NavigationKey.overview}
                to="/admin"
                className="mt-6"
                onClick={() => dispatch(setNavigationKey(NavigationKey.overview))}
            />

            <SidebarItem
                icon={faBriefcase}
                title="WORK EXPERIENCE"
                className="mt-2"
                isActive={currentActiveKey === NavigationKey.workExperience}
                to="/admin/work-experience"
                onClick={() => dispatch(setNavigationKey(NavigationKey.workExperience))}
            />

            <SidebarItem
                icon={faUniversity}
                title="FORMAL EDUCATION"
                className="mt-2"
                isActive={currentActiveKey === NavigationKey.formalEducation}
                to="/admin/formal-education"
                onClick={() => dispatch(setNavigationKey(NavigationKey.formalEducation))}
            />

            <SidebarItem
                icon={faLanguage}
                title="LANGUAGE"
                className="mt-2"
                isActive={currentActiveKey === NavigationKey.language}
                to="/admin/language"
                onClick={() => dispatch(setNavigationKey(NavigationKey.language))}
            />

            <SidebarItem
                icon={faLayerGroup}
                title="PORTFOLIO"
                className="mt-2"
                isActive={currentActiveKey === NavigationKey.portfolio}
                to="/admin/portfolio"
                onClick={() => dispatch(setNavigationKey(NavigationKey.portfolio))}
            />

            <SidebarItem
                icon={faIdCard}
                title="CONTACT"
                className="mt-2"
                isActive={currentActiveKey === NavigationKey.contact}
                to="/admin/contact"
                onClick={() => dispatch(setNavigationKey(NavigationKey.contact))}
            />

            <SidebarItem
                icon={faFileCode}
                title="DOCUMENT"
                className="mt-2"
                isActive={currentActiveKey === NavigationKey.document}
                to="/admin/document"
                onClick={() => dispatch(setNavigationKey(NavigationKey.document))}
            />

            <div className="w-full flex mt-8">
                <span className="mx-auto text-sm text-gray-500">- by: erthru -</span>
            </div>

            <div className="w-full flex">
                <a className="mx-auto text-xs text-gray-400" target="blank" href="https://github.com/erthru">
                    https://github.com/erthru
                </a>
            </div>
        </div>
    );
};

export default Sidebar;

import { faBriefcase, faFileCode, faIdCard, faLanguage, faLayerGroup, faThLarge, faTools, faUniversity } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { APP_TITLE } from "../../helpers/environments";
import { Store } from "../../plugins/store";
import { setNavigationKey } from "../../plugins/store/navigation/actions";
import { NavigationKey } from "../../plugins/store/navigation/types";
import Card from "../card";
import SidebarItem from "../sidebar-item";

type Props = {
    className?: string;
};

const Sidebar = (props: Props) => {
    const currentActiveKey = useSelector((store: Store) => store.navigation.currentActiveKey) as NavigationKey;
    const dispatch = useDispatch();

    return (
        <Card className={"hidden lg:flex flex-wrap py-6 " + props.className} style={{ width: "350px" }}>
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
                title="WORK EXPERIENCES"
                className="mt-2"
                isActive={currentActiveKey === NavigationKey.workExperiences}
                to="/admin/work-experiences"
                onClick={() => dispatch(setNavigationKey(NavigationKey.workExperiences))}
            />

            <SidebarItem
                icon={faUniversity}
                title="FORMAL EDUCATIONS"
                className="mt-2"
                isActive={currentActiveKey === NavigationKey.formalEducations}
                to="/admin/formal-educations"
                onClick={() => dispatch(setNavigationKey(NavigationKey.formalEducations))}
            />

            <SidebarItem
                icon={faLanguage}
                title="LANGUAGES"
                className="mt-2"
                isActive={currentActiveKey === NavigationKey.languages}
                to="/admin/languages"
                onClick={() => dispatch(setNavigationKey(NavigationKey.languages))}
            />

            <SidebarItem
                icon={faLayerGroup}
                title="PORTFOLIOS"
                className="mt-2"
                isActive={currentActiveKey === NavigationKey.portfolios}
                to="/admin/portfolios"
                onClick={() => dispatch(setNavigationKey(NavigationKey.portfolios))}
            />

            <SidebarItem
                icon={faIdCard}
                title="CONTACTS"
                className="mt-2"
                isActive={currentActiveKey === NavigationKey.contacts}
                to="/admin/contacts"
                onClick={() => dispatch(setNavigationKey(NavigationKey.contacts))}
            />

            <SidebarItem
                icon={faFileCode}
                title="DOCUMENTS"
                className="mt-2"
                isActive={currentActiveKey === NavigationKey.documents}
                to="/admin/documents"
                onClick={() => dispatch(setNavigationKey(NavigationKey.documents))}
            />

            <div className="h-full" />
        </Card>
    );
};

export default Sidebar;

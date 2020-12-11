import { faBriefcase, faFileCode, faIdCard, faLanguage, faLayerGroup, faThLarge, faUniversity } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { APP_TITLE } from "../../helpers/environments";
import { Store } from "../../plugins/store";
import { setKey } from "../../plugins/store/navigation/actions";
import { Key } from "../../plugins/store/navigation/types";
import SidebarItem from "../sidebar-item";

type Props = {
    className?: string;
};

const Sidebar = (props: Props) => {
    const currentActiveKey = useSelector((store: Store) => store.navigation.currentActiveKey) as Key;
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
                isActive={currentActiveKey === Key.overview}
                to="/admin"
                className="mt-6"
                onClick={() => dispatch(setKey(Key.overview))}
            />

            <SidebarItem
                icon={faBriefcase}
                title="WORK EXPERIENCE"
                className="mt-2"
                isActive={currentActiveKey === Key.workExperience}
                to="/admin/work-experience"
                onClick={() => dispatch(setKey(Key.workExperience))}
            />

            <SidebarItem
                icon={faUniversity}
                title="FORMAL EDUCATION"
                className="mt-2"
                isActive={currentActiveKey === Key.formalEducation}
                to="/admin/formal-education"
                onClick={() => dispatch(setKey(Key.formalEducation))}
            />

            <SidebarItem
                icon={faLanguage}
                title="LANGUAGE"
                className="mt-2"
                isActive={currentActiveKey === Key.language}
                to="/admin/language"
                onClick={() => dispatch(setKey(Key.language))}
            />

            <SidebarItem
                icon={faLayerGroup}
                title="PORTFOLIO"
                className="mt-2"
                isActive={currentActiveKey === Key.portfolio}
                to="/admin/portfolio"
                onClick={() => dispatch(setKey(Key.portfolio))}
            />

            <SidebarItem
                icon={faIdCard}
                title="CONTACT"
                className="mt-2"
                isActive={currentActiveKey === Key.contact}
                to="/admin/contact"
                onClick={() => dispatch(setKey(Key.contact))}
            />

            <SidebarItem
                icon={faFileCode}
                title="DOCUMENT"
                className="mt-2"
                isActive={currentActiveKey === Key.document}
                to="/admin/document"
                onClick={() => dispatch(setKey(Key.document))}
            />

            <div className="h-full" />
        </div>
    );
};

export default Sidebar;

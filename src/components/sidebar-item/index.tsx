import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
    icon: IconDefinition;
    title: string;
    isActive?: boolean;
    className?: string;
    to: string;
    onClick?(): void;
};

const SidebarItem = (props: Props) => (
    <Link
        to={props.to}
        className={
            "w-full h-12 cursor-pointer items-center flex text-white font-medium text-sm " +
            (props.isActive ? "text-red-600 bg-red-50 " : "text-gray-600 ") +
            props.className
        }
        onClick={props.onClick}
    >
        <div className={"h-full w-1 rounded-xl " + (props.isActive ? "bg-red-600" : "bg-transparent")} />
        <FontAwesomeIcon icon={props.icon} className="text-xl ml-6" />
        <span className="ml-4">{props.title}</span>
    </Link>
);

export default SidebarItem;

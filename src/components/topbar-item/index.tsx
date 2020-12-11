import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
    isActive?: boolean;
    className?: string;
    onClick?(): void;
    title: string;
    icon: IconDefinition;
    to: string;
};

const TopbarItem = (props: Props) => (
    <Link
        to={props.to}
        className={
            "flex w-full cursor-pointer rounded-full px-4 py-1 " + (props.isActive ? "bg-red-50 text-red-500 " : "text-gray-600 ") + props.className
        }
        onClick={props.onClick}
    >
        <div className="flex-items-center mx-auto">
            <FontAwesomeIcon icon={props.icon} />
            <span className="ml-2 text-sm font-medium">{props.title}</span>
        </div>
    </Link>
);

export default TopbarItem;

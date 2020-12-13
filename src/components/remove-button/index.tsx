import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
    className?: string;
    to?: string;
    onClick?(): void;
};

const RemoveButton = (props: Props) => (
    <Link
        to={props.to === undefined ? "#" : props.to}
        className={"flex text-red-600 items-center font-medium cursor-pointer " + props.className}
        onClick={props.onClick}
    >
        <FontAwesomeIcon icon={faTrashAlt} />
        <span className="ml-2">Remove</span>
    </Link>
);

export default RemoveButton;

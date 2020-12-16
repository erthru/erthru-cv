import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
    className?: string;
    to?: string;
    onClick?(): void;
};

const EditButton = (props: Props) => (
    <Link
        to={props.to === undefined ? "#" : props.to}
        className={"flex text-yellow-600 items-center font-medium cursor-pointer " + props.className}
        onClick={props.onClick}
    >
        <FontAwesomeIcon icon={faPenSquare} />
        <span className="ml-2">Edit</span>
    </Link>
);

export default EditButton;

import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
    className?: string;
    to: string;
};

const EditButton = (props: Props) => (
    <Link to={props.to} className={"flex text-yellow-600 items-center font-medium cursor-pointer " + props.className}>
        <FontAwesomeIcon icon={faEdit} />
        <span className="ml-2">Edit</span>
    </Link>
);

export default EditButton;

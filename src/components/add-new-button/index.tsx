import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
    to: string;
    className?: string;
};

const AddNewButton = (props: Props) => (
    <Link to={props.to} className={"flex text-green-700 items-center cursor-pointer " + props.className}>
        <FontAwesomeIcon icon={faPlus} className="text-lg" />
        <span className="font-medium ml-2">Add New</span>
    </Link>
);

export default AddNewButton;

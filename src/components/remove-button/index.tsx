import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
    className?: string;
    onClick?(): void;
};

const RemoveButton = (props: Props) => (
    <div className={"flex text-red-600 items-center font-medium cursor-pointer " + props.className} onClick={props.onClick}>
        <FontAwesomeIcon icon={faTrashAlt} />
        <span className="ml-2">Remove</span>
    </div>
);

export default RemoveButton;

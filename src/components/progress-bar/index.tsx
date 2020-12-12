import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
    className?: string;
    color: string;
};

const ProgressBar = (props: Props) => (
    <FontAwesomeIcon icon={faCircleNotch} className={"animate-spin " + "text-" + props.color + " " + props.className} />
);

export default ProgressBar;

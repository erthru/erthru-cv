import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
    className?: string;
};

const ProgressBar = (props: Props) => <FontAwesomeIcon icon={faCircleNotch} className={"text-red-600 text-4xl animate-spin " + props.className} />;

export default ProgressBar;

import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
    children?: React.ReactNode;
    color?: string;
    disabled?: boolean;
    isLoading?: boolean;
    type?: "button" | "submit" | "reset";
    className?: string;
    onClick?(): void;
};

const Button = (props: Props) => (
    <button type={props.type} className={"flex items-center font-medium text-lg text-" + props.color + " " + props.className} disabled={props.disabled} onClick={props.onClick}>
        {props.isLoading && <FontAwesomeIcon icon={faCircleNotch} className={"text-" + props.color + " text-2xl animate-spin"} />}
        {!props.isLoading && props.children}
    </button>
);

export default Button;

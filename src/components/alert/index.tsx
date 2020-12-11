import React from "react";

type Props = {
    mode: AlertMode;
    children?: React.ReactNode;
    className?: string;
};

export enum AlertMode {
    success = "success",
    warning = "warning",
    error = "error",
}

const Alert = (props: Props) => {
    let clasess = "";

    switch (props.mode) {
        case AlertMode.success:
            clasess = "bg-green-100 text-green-700 ";
            break;

        case AlertMode.warning:
            clasess = "bg-yellow-100 text-yellow-700 ";
            break;

        case AlertMode.error:
            clasess = "bg-red-100 text-red-700 ";
            break;

        default:
            break;
    }

    return <div className={"w-full py-3 font-medium rounded-xl px-4 " + clasess + props.className}>{props.children}</div>;
};

export default Alert;

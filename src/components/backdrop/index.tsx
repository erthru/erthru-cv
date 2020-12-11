import React from "react";

type Props = {
    className?: string;
};

const Backdrop = (props: Props) => (
    <div className={"fixed top-0 left-0 h-full w-full " + props.className} style={{ backgroundColor: "rgba(0,0,0,0.7)" }}></div>
);

export default Backdrop;

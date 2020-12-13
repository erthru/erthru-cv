import React, { CSSProperties } from "react";

type Props = {
    className?: string;
    children?: React.ReactNode;
    style?: CSSProperties;
};

const Card = (props: Props) => (
    <div className={"bg-white rounded-xl shadow-2xl " + props.className} style={props.style}>
        {props.children}
    </div>
);

export default Card;

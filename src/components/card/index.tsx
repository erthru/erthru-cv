import React, { CSSProperties } from "react";

type Props = {
    className?: string;
    children?: React.ReactNode;
    style?: CSSProperties;
    id?: string;
};

const Card = (props: Props) => (
    <div className={"bg-white rounded-xl shadow-2xl " + props.className} style={props.style} id={props.id}>
        {props.children}
    </div>
);

export default Card;

import React from "react";

type Props = {
    className?: string;
    children?: React.ReactNode;
};

const ContentHoc = (props: Props) => <div className={"p-10 " + props.className}>{props.children}</div>;

export default ContentHoc;

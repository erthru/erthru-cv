import React from "react";
import Backdrop from "../backdrop";
import "./index.css";

type Props = {
    title: string;
    children?: React.ReactNode;
    isShown?: boolean;
};

const Modal = (props: Props) => (
    <div className="w-auto h-auto">
        {props.isShown && (
            <div className="modal-fade">
                <Backdrop />

                <div className="bg-white rounded-xl p-6 fixed modal">
                    <span className="font-bold text-xl">{props.title}</span>
                    <div>{props.children}</div>
                </div>
            </div>
        )}
    </div>
);

export default Modal;

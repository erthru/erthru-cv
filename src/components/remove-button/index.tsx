import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button";
import Modal from "../modal";

type Props = {
    className?: string;
    to?: string;
    onClick?(): void;
};

const RemoveButton = (props: Props) => {
    const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);

    return (
        <div className={"flex " + props.className}>
            <div className="flex mx-auto text-red-600 items-center font-medium cursor-pointer" onClick={() => setIsDeleteModalShown(true)}>
                <FontAwesomeIcon icon={faTrashAlt} />
                <span className="ml-2">Remove</span>
            </div>

            <Modal title="Delete Confirmation" isShown={isDeleteModalShown}>
                <span className="w-full flex">Delete this item ?</span>

                <div className="flex mt-3">
                    <Link
                        className="cursor-pointer font-medium text-red-600"
                        to={props.to === undefined ? "#" : props.to}
                        onClick={() => {
                            props.onClick!!();
                            setIsDeleteModalShown(false);
                        }}
                    >
                        Delete
                    </Link>

                    <span className="text-gray-600 ml-2 cursor-pointer font-medium" onClick={() => setIsDeleteModalShown(false)}>
                        Cancel
                    </span>
                </div>
            </Modal>
        </div>
    );
};

export default RemoveButton;

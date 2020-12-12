import { faEdit, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Store } from "../../plugins/store";
import { removeWorkExperience } from "../../plugins/store/work-experience/actions";
import { WorkExperience } from "../../plugins/store/work-experience/types";
import ProgressBar from "../progress-bar";
import SearchInput from "../search-input";
import Table from "../table";

const WorkExperiences = () => {
    const dispatch = useDispatch();
    const workExperiences = useSelector((store: Store) => store.workExperience.workExperiences) as WorkExperience[];
    const isFetchingWorkExperiences = useSelector((store: Store) => store.workExperience.isFetchingWorkExperiences) as boolean;
    const isRemovingWorkExperience = useSelector((store: Store) => store.workExperience.isRemovingWorkExperience) as boolean;
    const [tableRows, setTableRows] = useState<JSX.Element[][]>([[]]);

    useEffect(() => {
        if (workExperiences.length > 0) {
            const _tableRows: JSX.Element[][] = [];

            workExperiences.map((workExperience) => {
                _tableRows.push([
                    <span>{workExperience.description}</span>,
                    <span>{workExperience.place}</span>,
                    <span>{workExperience.activities?.join(", ")}</span>,

                    <div className="flex flex-wrap">
                        <div className="w-full flex">
                            <Link
                                to={"/admin/work-experience/edit/" + workExperience.id}
                                className="mx-auto flex text-yellow-600 items-center font-medium cursor-pointer"
                            >
                                <FontAwesomeIcon icon={faEdit} />
                                <span className="ml-2">Edit</span>
                            </Link>
                        </div>

                        <div className="w-full flex mt-1">
                            <div
                                className="mx-auto flex text-red-600 items-center font-medium cursor-pointer"
                                onClick={() => dispatch(removeWorkExperience(workExperience.id!!))}
                            >
                                <FontAwesomeIcon icon={faTrashAlt} />
                                <span className="ml-2">Remove</span>
                            </div>
                        </div>
                    </div>,
                ]);
            });

            setTableRows(_tableRows);
        }
    }, [workExperiences]);

    return (
        <div className="bg-white w-full rounded-xl p-6 flex flex-wrap">
            <div className="flex flex-wrap w-full">
                <Link to="/admin/work-experience/add" className="mx-auto md:mx-0 flex text-green-700 items-center cursor-pointer">
                    <FontAwesomeIcon icon={faPlus} className="text-lg" />
                    <span className="font-medium ml-2">Add New</span>
                </Link>

                <SearchInput className="mx-auto md:ml-auto md:mr-0 mt-3 md:mt-0" />
            </div>

            {(isFetchingWorkExperiences || isRemovingWorkExperience) && <ProgressBar className="mt-4 mx-auto" />}

            {!isFetchingWorkExperiences && !isRemovingWorkExperience && (
                <div className="w-full mt-4">
                    <Table className="w-full" headers={["Description", "Place", "Activity", "Actions"]} rows={tableRows} />
                </div>
            )}
        </div>
    );
};

export default WorkExperiences;

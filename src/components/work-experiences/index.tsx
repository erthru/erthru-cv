import { faEdit, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../plugins/store";
import { fetchWorkExperiences } from "../../plugins/store/work-experience/actions";
import { WorkExperience } from "../../plugins/store/work-experience/types";
import ProgressBar from "../progress-bar";
import SearchInput from "../search-input";
import Table from "../table";

const WorkExperiences = () => {
    const dispatch = useDispatch();
    const workExperiences = useSelector((store: Store) => store.workExperience.workExperiences) as WorkExperience[];
    const [isLoading, setIsLoading] = useState(false);
    const [tableRows, setTableRows] = useState<JSX.Element[][]>([[]]);

    useEffect(() => {
        getWorkExperiences();
    }, []);

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
                            <div className="mx-auto flex text-yellow-600 items-center font-medium cursor-pointer">
                                <FontAwesomeIcon icon={faEdit} />
                                <span className="ml-2">Edit</span>
                            </div>
                        </div>

                        <div className="w-full flex mt-1">
                            <div className="mx-auto flex text-red-600 items-center font-medium cursor-pointer">
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

    const getWorkExperiences = () => {
        setIsLoading(true);
        dispatch(fetchWorkExperiences());
    };

    return (
        <div className="bg-white w-full rounded-xl p-6 flex flex-wrap">
            <div className="flex flex-wrap w-full">
                <div className="mx-auto md:mx-0 flex text-green-700 items-center cursor-pointer">
                    <FontAwesomeIcon icon={faPlus} className="text-lg" />
                    <span className="font-medium ml-2">Add New</span>
                </div>

                <SearchInput className="mx-auto md:ml-auto md:mr-0 mt-3 md:mt-0"/>
            </div>

            {isLoading && workExperiences.length === 0 && <ProgressBar className="mt-4 mx-auto" />}

            {workExperiences.length > 0 && (
                <div className="w-full mt-4">
                    <Table className="w-full" headers={["Description", "Place", "Activity", "Actions"]} rows={tableRows} />
                </div>
            )}
        </div>
    );
};

export default WorkExperiences;

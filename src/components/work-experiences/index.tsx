import { faEdit, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Store } from "../../plugins/store";
import { removeWorkExperience } from "../../plugins/store/work-experience/actions";
import { WorkExperience } from "../../plugins/store/work-experience/types";
import AddNewButton from "../add-new-button";
import ProgressBar from "../progress-bar";
import SearchInput from "../search-input";
import Table from "../table";

const WorkExperiences = () => {
    const dispatch = useDispatch();
    const workExperiences = useSelector((store: Store) => store.workExperience.workExperiences) as WorkExperience[];
    const isFetchingWorkExperiences = useSelector((store: Store) => store.workExperience.isFetchingWorkExperiences) as boolean;
    const isRemovingWorkExperience = useSelector((store: Store) => store.workExperience.isRemovingWorkExperience) as boolean;
    const [search, setSearch] = useState("");
    const [_workExperiences, _setWorkExperiences] = useState<WorkExperience[]>([]);

    useEffect(() => {
        if (workExperiences.length > 0) {
            _setWorkExperiences(workExperiences);
        }
    }, [workExperiences]);

    useEffect(() => {
        if (search !== "") {
            const tempWorkExperiences = _workExperiences.filter((workExperience) => workExperience.activities?.join(", ").includes(search));
            _setWorkExperiences(tempWorkExperiences);
        } else {
            _setWorkExperiences(workExperiences);
        }
    }, [search]);

    return (
        <div className="bg-white w-full rounded-xl p-6 flex flex-wrap">
            <div className="flex flex-wrap w-full">
                <AddNewButton to="/admin/work-experience/add" className="mx-auto md:mx-0" />
                <SearchInput value={search} onChange={(e) => setSearch(e.currentTarget.value)} className="mx-auto md:ml-auto md:mr-0 mt-3 md:mt-0" />
            </div>

            {(isFetchingWorkExperiences || isRemovingWorkExperience) && <ProgressBar color="red-700" className="mt-4 mx-auto text-4xl" />}

            {!isFetchingWorkExperiences && !isRemovingWorkExperience && (
                <div className="w-full mt-4">
                    <Table
                        className="w-full"
                        headers={["Timeframe", "Place", "Activity", "Actions"]}
                        rows={[
                            ..._workExperiences.map((workExperience) => {
                                return [
                                    <span>{workExperience.timeframe}</span>,
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
                                ];
                            }),
                        ]}
                    />
                </div>
            )}
        </div>
    );
};

export default WorkExperiences;

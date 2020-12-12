import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../plugins/store";
import { removeWorkExperience } from "../../plugins/store/work-experience/actions";
import { WorkExperience } from "../../plugins/store/work-experience/types";
import AddNewButton from "../add-new-button";
import EditButton from "../edit-button";
import ProgressBar from "../progress-bar";
import RemoveButton from "../remove-button";
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
            const tempWorkExperiences = _workExperiences.filter(
                (workExperience) =>
                    workExperience.activities?.join(", ").toLowerCase().includes(search.toLowerCase()) ||
                    workExperience.place?.toLowerCase().includes(search.toLocaleLowerCase())
            );

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

            {(isFetchingWorkExperiences || isRemovingWorkExperience) && <ProgressBar color="red-600" className="mt-4 mx-auto text-4xl" />}

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
                                            <EditButton to={"/admin/work-experience/edit/" + workExperience.id} className="mx-auto" />
                                        </div>

                                        <div className="w-full flex mt-1">
                                            <RemoveButton className="mx-auto" onClick={() => dispatch(removeWorkExperience(workExperience.id!!))} />
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

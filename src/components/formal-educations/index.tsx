import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../plugins/store";
import { removeFormalEducation } from "../../plugins/store/formal-education/actions";
import { FormalEducation } from "../../plugins/store/formal-education/types";
import AddNewButton from "../add-new-button";
import Card from "../card";
import EditButton from "../edit-button";
import ProgressBar from "../progress-bar";
import RemoveButton from "../remove-button";
import SearchInput from "../search-input";
import Table from "../table";

const FormalEducations = () => {
    const dispatch = useDispatch();
    const formalEducations = useSelector((store: Store) => store.formalEducation.formalEducations) as FormalEducation[];
    const isFetchingFormalEducations = useSelector((store: Store) => store.formalEducation.isFetchingFormalEducations) as boolean;
    const isRemovingFormalEducation = useSelector((store: Store) => store.formalEducation.isRemovingFormalEducation) as boolean;
    const [search, setSearch] = useState("");
    const [_formalEducations, _setFormalEducations] = useState<FormalEducation[]>([]);

    useEffect(() => {
        if (formalEducations.length > 0) _setFormalEducations(formalEducations);
    }, [formalEducations]);

    useEffect(() => {
        if (search !== "") {
            const tempFormalEducations = _formalEducations.filter(
                (formalEducation) =>
                    formalEducation.majors?.toLowerCase().includes(search.toLowerCase()) ||
                    formalEducation.place?.toLowerCase().includes(search.toLocaleLowerCase())
            );

            _setFormalEducations(tempFormalEducations);
        } else {
            _setFormalEducations(formalEducations);
        }
    }, [search]);

    return (
        <Card className="w-full flex flex-wrap p-6">
            <div className="flex flex-wrap w-full">
                <AddNewButton to="/admin/formal-education/add" className="mx-auto md:mx-0" />
                <SearchInput value={search} onChange={(e) => setSearch(e.currentTarget.value)} className="mx-auto md:ml-auto md:mr-0 mt-3 md:mt-0" />
            </div>

            {(isFetchingFormalEducations || isRemovingFormalEducation) && <ProgressBar color="red-600" className="mt-4 mx-auto text-4xl" />}

            {!isFetchingFormalEducations && !isRemovingFormalEducation && (
                <div className="w-full mt-4">
                    <Table
                        className="w-full"
                        headers={["Timeframe", "Place", "Majors", "Actions"]}
                        rows={[
                            ..._formalEducations.map((formalEducation) => {
                                return [
                                    <span>{formalEducation.timeframe}</span>,
                                    <span>{formalEducation.place}</span>,
                                    <span>{formalEducation.majors}</span>,

                                    <div className="flex flex-wrap">
                                        <div className="w-full flex">
                                            <EditButton to={"/admin/formal-education/edit/" + formalEducation.id} className="mx-auto" />
                                        </div>

                                        <div className="w-full flex mt-1">
                                            <RemoveButton className="mx-auto" onClick={() => dispatch(removeFormalEducation(formalEducation.id!!))} />
                                        </div>
                                    </div>,
                                ];
                            }),
                        ]}
                    />
                </div>
            )}
        </Card>
    );
};

export default FormalEducations;

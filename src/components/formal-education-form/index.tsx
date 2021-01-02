import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Store } from "../../plugins/store";
import { addFormalEducation, fetchFormalEducation, updateFormalEducation } from "../../plugins/store/formal-education/actions";
import Button from "../button";
import Card from "../card";
import Input from "../input";
import ProgressBar from "../progress-bar";

type Props = {
    id?: string;
};

const FormalEducationForm = (props: Props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const formalEducation = useSelector((store: Store) => store.formalEducation.formalEducation);
    const isFetchingFormalEducation = useSelector((store: Store) => store.formalEducation.isFetchingFormalEducation);
    const isNewFormalEducationAdded = useSelector((store: Store) => store.formalEducation.isNewFormalEducationAdded);
    const isFormalEducationUpdated = useSelector((store: Store) => store.formalEducation.isFormalEducationUpdated);
    const isAddingFormalEducation = useSelector((store: Store) => store.formalEducation.isAddingFormalEducation);
    const isUpdatingFormalEducation = useSelector((store: Store) => store.formalEducation.isUpdatingFormalEducation);
    const [timeframe, setTimeframe] = useState("");
    const [place, setPlace] = useState("");
    const [majors, setMajors] = useState("");
    const [readyToCheckChanges, setReadyToCheckChanges] = useState(false);

    useEffect(() => {
        if (props.id !== undefined) dispatch(fetchFormalEducation(props.id));
    }, []);

    useEffect(() => {
        if ((isNewFormalEducationAdded || isFormalEducationUpdated) && readyToCheckChanges) history.push("/admin/formal-educations");
    }, [isNewFormalEducationAdded, isFormalEducationUpdated]);

    useEffect(() => {
        if (Object.keys(formalEducation).length > 0 && props.id !== undefined) {
            setTimeframe(formalEducation.timeframe!!);
            setPlace(formalEducation.place!!);
            setMajors(formalEducation.majors!!);
        }
    }, [formalEducation]);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setReadyToCheckChanges(true);

        if (props.id !== undefined) {
            dispatch(
                updateFormalEducation(props.id, {
                    timeframe: timeframe,
                    place: place,
                    majors: majors,
                })
            );
        } else {
            dispatch(
                addFormalEducation({
                    timeframe: timeframe,
                    place: place,
                    majors: majors,
                })
            );
        }
    };

    return (
        <Card className="w-full bg-white flex flex-wrap p-6">
            {isFetchingFormalEducation && <ProgressBar className="mt-4 mx-auto text-4xl" color="red-600" />}

            {!isFetchingFormalEducation && (
                <div className="w-full flex flex-wrap">
                    <span className="w-full text-2xl font-bold text-gray-600">
                        {props.id !== undefined ? "Update Formal Education" : "Add New Formal Education"}
                    </span>

                    <form className="flex flex-wrap mt-2 w-full md:w-2/3 lg:1/2" onSubmit={onSubmit}>
                        <label className="w-full">Timeframe</label>

                        <Input
                            className="w-full mt-2"
                            type="text"
                            placeholder="Input Timeframe"
                            required
                            onChange={(e) => setTimeframe(e.currentTarget.value)}
                            value={timeframe}
                            disabled={isAddingFormalEducation || isUpdatingFormalEducation}
                        />

                        <label className="w-full mt-4">Place</label>

                        <Input
                            className="w-full mt-2"
                            type="text"
                            placeholder="Input Place"
                            required
                            onChange={(e) => setPlace(e.currentTarget.value)}
                            value={place}
                            disabled={isAddingFormalEducation || isUpdatingFormalEducation}
                        />

                        <label className="w-full mt-4">Majors</label>

                        <Input
                            className="w-full mt-2"
                            type="text"
                            placeholder="Input Majors"
                            required
                            onChange={(e) => setMajors(e.currentTarget.value)}
                            value={majors}
                            disabled={isAddingFormalEducation || isUpdatingFormalEducation}
                        />

                        <Button
                            type="submit"
                            className="mt-4 ml-1"
                            color="green-700"
                            isLoading={isAddingFormalEducation || isUpdatingFormalEducation}
                        >
                            Save
                        </Button>
                    </form>
                </div>
            )}
        </Card>
    );
};

export default FormalEducationForm;

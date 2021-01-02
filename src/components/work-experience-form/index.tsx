import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Store } from "../../plugins/store";
import { addWorkExperience, fetchWorkExperience, updateWorkExperience } from "../../plugins/store/work-experience/actions";
import Alert, { AlertMode } from "../alert";
import Button from "../button";
import Card from "../card";
import Input from "../input";
import ProgressBar from "../progress-bar";

type Props = {
    id?: string;
};

const WorkExperienceForm = (props: Props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const workExperience = useSelector((store: Store) => store.workExperience.workExperience);
    const isNewWorkExperienceAdded = useSelector((store: Store) => store.workExperience.isNewWorkExperienceAdded);
    const isWorkExperienceUpdated = useSelector((store: Store) => store.workExperience.isWorkExperienceUpdated);
    const isFetchingWorkExperience = useSelector((store: Store) => store.workExperience.isFetchingWorkExperience);
    const isAddingWorkExperience = useSelector((store: Store) => store.workExperience.isAddingWorkExperience);
    const isUpdatingWorkExperience = useSelector((store: Store) => store.workExperience.isUpdatingWorkExperience);
    const [timeframe, setTimeframe] = useState("");
    const [place, setPlace] = useState("");
    const [activity, setActivity] = useState("");
    const [activities, setActivities] = useState<string[]>([]);
    const [isActivitiesEmpty, setIsActivitiesEmpty] = useState(false);
    const [readyToCheckChanges, setReadyToCheckChanges] = useState(false);

    useEffect(() => {
        if (props.id !== undefined) dispatch(fetchWorkExperience(props.id));
    }, []);

    useEffect(() => {
        if ((isNewWorkExperienceAdded || isWorkExperienceUpdated) && readyToCheckChanges) history.push("/admin/work-experiences");
    }, [isNewWorkExperienceAdded, isWorkExperienceUpdated]);

    useEffect(() => {
        if (Object.keys(workExperience).length > 0 && props.id !== undefined) {
            setTimeframe(workExperience.timeframe!!);
            setPlace(workExperience.place!!);
            setActivities(workExperience.activities!!);
        }
    }, [workExperience]);

    const addActivity = () => {
        if (activity !== "") {
            const _activities = activities;
            _activities.push(activity);
            setActivities(_activities);
            setActivity("");
            setIsActivitiesEmpty(false);
        }
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (activities.length === 0) setIsActivitiesEmpty(true);
        else {
            setReadyToCheckChanges(true);
            if (props.id !== undefined) {
                dispatch(
                    updateWorkExperience(props.id, {
                        timeframe: timeframe,
                        place: place,
                        activities: activities,
                    })
                );
            } else {
                dispatch(
                    addWorkExperience({
                        timeframe: timeframe,
                        place: place,
                        activities: activities,
                    })
                );
            }
        }
    };

    return (
        <Card className="w-full bg-white flex flex-wrap p-6">
            {isFetchingWorkExperience && <ProgressBar className="mt-4 mx-auto text-4xl" color="red-600" />}

            {!isFetchingWorkExperience && (
                <div className="w-full flex flex-wrap">
                    <span className="w-full text-2xl font-bold text-gray-600">
                        {props.id !== undefined ? "Update Work Experience" : "Add New Work Experience"}
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
                            disabled={isAddingWorkExperience || isUpdatingWorkExperience}
                        />

                        <label className="w-full mt-4">Place</label>

                        <Input
                            className="w-full mt-2"
                            type="text"
                            placeholder="Input Place"
                            required
                            onChange={(e) => setPlace(e.currentTarget.value)}
                            value={place}
                            disabled={isAddingWorkExperience || isUpdatingWorkExperience}
                        />

                        <label className="w-full mt-4">Activity</label>

                        <div className="flex mt-2 w-full">
                            <Input
                                className="w-full"
                                type="text"
                                onChange={(e) => setActivity(e.currentTarget.value)}
                                value={activity}
                                placeholder="Input Activity"
                            />

                            <Button type="button" className="ml-3" color="green-700" onClick={addActivity}>
                                <FontAwesomeIcon icon={faPlus} />
                            </Button>
                        </div>

                        {isActivitiesEmpty && (
                            <Alert className="mt-3" mode={AlertMode.error}>
                                Activities Min 1
                            </Alert>
                        )}

                        {activities.length > 0 && (
                            <div className="flex flex-wrap w-full">
                                <div className="w-full mt-4">
                                    <label>Activities | </label>
                                    <span className="text-red-600 font-medium cursor-pointer" onClick={() => setActivities([])}>
                                        Clear
                                    </span>
                                </div>

                                <ul className="mt-1">
                                    {activities.map((activity, i) => {
                                        return <li key={i}>- {activity}</li>;
                                    })}
                                </ul>
                            </div>
                        )}

                        <Button type="submit" className="mt-4 ml-1" color="green-700" isLoading={isAddingWorkExperience || isUpdatingWorkExperience}>
                            Save
                        </Button>
                    </form>
                </div>
            )}
        </Card>
    );
};

export default WorkExperienceForm;

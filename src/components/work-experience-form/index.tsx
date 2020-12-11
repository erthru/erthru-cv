import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Store } from "../../plugins/store";
import { addWorkExperience, fetchWorkExperience, updateWorkExperience } from "../../plugins/store/work-experience/actions";
import { WorkExperience } from "../../plugins/store/work-experience/types";
import Alert, { AlertMode } from "../alert";
import Button from "../button";
import Input from "../input";
import ProgressBar from "../progress-bar";

type Props = {
    id?: string;
};

const WorkExperienceForm = (props: Props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const workExperience = useSelector((store: Store) => store.workExperience.workExperience) as WorkExperience;
    const isNewWorkExperienceAdded = useSelector((store: Store) => store.workExperience.isNewWorkExperienceAdded) as boolean;
    const isWorkExperienceUpdated = useSelector((store: Store) => store.workExperience.isWorkExperienceUpdated) as boolean;
    const [description, setDescription] = useState("");
    const [place, setPlace] = useState("");
    const [activity, setActivity] = useState("");
    const [activities, setActivities] = useState<string[]>([]);
    const [isActivitiesEmpty, setIsActivitiesEmpty] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (props.id !== undefined) {
            setIsLoading(true);
            dispatch(fetchWorkExperience(props.id));
        }
    }, []);

    useEffect(() => {
        if (isNewWorkExperienceAdded || isWorkExperienceUpdated) history.push("/admin/work-experience");
    }, [isNewWorkExperienceAdded, isWorkExperienceUpdated]);

    useEffect(() => {
        if (Object.keys(workExperience).length > 0) {
            setDescription(workExperience.description!!);
            setPlace(workExperience.place!!);
            setActivities(workExperience.activities!!);
            setIsLoading(false);
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
            setIsSubmitting(true);

            if (props.id !== undefined)
                dispatch(
                    updateWorkExperience(props.id, {
                        description: description,
                        place: place,
                        activities: activities,
                    })
                );
            else
                dispatch(
                    addWorkExperience({
                        description: description,
                        place: place,
                        activities: activities,
                    })
                );
        }
    };

    return (
        <div className="w-full bg-white rounded-xl flex flex-wrap p-6">
            {isLoading && <ProgressBar className="mt-4 mx-auto" />}

            {!isLoading && (
                <div className="w-full flex flex-wrap">
                    <span className="w-full text-2xl font-bold text-gray-700">
                        {props.id !== undefined ? "Update Work Experience" : "Add New Work Experience"}
                    </span>

                    <form className="flex flex-wrap mt-2 w-full md:w-2/3 lg:1/2" onSubmit={onSubmit}>
                        <label className="w-full">Description</label>

                        <Input
                            className="w-full mt-2"
                            type="text"
                            placeholder="Input Description"
                            required
                            onChange={(e) => setDescription(e.currentTarget.value)}
                            value={description}
                            disabled={isSubmitting}
                        />

                        <label className="w-full mt-4">Place</label>

                        <Input
                            className="w-full mt-2"
                            type="text"
                            placeholder="Input Place"
                            required
                            onChange={(e) => setPlace(e.currentTarget.value)}
                            value={place}
                            disabled={isSubmitting}
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
                                    <span className="text-red-700 font-medium cursor-pointer" onClick={() => setActivities([])}>
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

                        <Button type="submit" className="mt-4 ml-1" color="green-700" isLoading={isSubmitting}>
                            Save
                        </Button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default WorkExperienceForm;

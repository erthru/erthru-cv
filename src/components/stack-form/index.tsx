import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Store } from "../../plugins/store";
import { addStack, fetchStack, updateStack } from "../../plugins/store/stack/actions";
import { StackDepartment } from "../../plugins/store/stack/types";
import Alert, { AlertMode } from "../alert";
import Button from "../button";
import Card from "../card";
import Input from "../input";
import ProgressBar from "../progress-bar";
import Select from "../select";

type Props = {
    id?: string;
};

const StackForm = (props: Props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const stack = useSelector((store: Store) => store.stack.stack);
    const isNewStackAdded = useSelector((store: Store) => store.stack.isNewStackAdded);
    const isStackUpdated = useSelector((store: Store) => store.stack.isStackUpdated);
    const isFetchingStack = useSelector((store: Store) => store.stack.isFetchingStack);
    const isAddingStack = useSelector((store: Store) => store.stack.isAddingStack);
    const isUpdatingStack = useSelector((store: Store) => store.stack.isUpdatingStack);
    const [department, setDepartment] = useState<StackDepartment>(StackDepartment.web);
    const [skill, setSkill] = useState("");
    const [skills, setSkills] = useState<string[]>([]);
    const [isSkillsEmpty, setIsSkillsEmpty] = useState(false);
    const [readyToCheckChanges, setReadyToCheckChanges] = useState(false);

    useEffect(() => {
        if (props.id !== undefined) dispatch(fetchStack(props.id));
    }, []);

    useEffect(() => {
        if ((isNewStackAdded || isStackUpdated) && readyToCheckChanges) history.push("/admin/stacks");
    }, [isNewStackAdded, isStackUpdated]);

    useEffect(() => {
        if (Object.keys(stack).length > 0 && props.id !== undefined) {
            setDepartment(stack.department!!);
            setSkills(stack.skills!!);
        }
    }, [stack]);

    const addSkill = () => {
        if (skill !== "") {
            const _skills = skills;
            _skills.push(skill);
            setSkills(_skills);
            setSkill("");
            setIsSkillsEmpty(false);
        }
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (skills.length === 0) setIsSkillsEmpty(true);
        else {
            setReadyToCheckChanges(true);
            if (props.id !== undefined) {
                dispatch(
                    updateStack(props.id, {
                        department: department,
                        skills: skills,
                    })
                );
            } else {
                dispatch(
                    addStack({
                        department: department,
                        skills: skills,
                    })
                );
            }
        }
    };

    return (
        <Card className="w-full bg-white flex flex-wrap p-6">
            {isFetchingStack && <ProgressBar className="mt-4 mx-auto text-4xl" color="red-600" />}

            {!isFetchingStack && (
                <div className="w-full flex flex-wrap">
                    <span className="w-full text-2xl font-bold text-gray-600">{props.id !== undefined ? "Update Stack" : "Add New Stack"}</span>

                    <form className="flex flex-wrap mt-2 w-full md:w-2/3 lg:1/2" onSubmit={onSubmit}>
                        <label className="w-full">Department</label>

                        <Select
                            className="w-full mt-2"
                            value={department}
                            options={[
                                {
                                    value: StackDepartment.web,
                                    text: "Web",
                                },
                                {
                                    value: StackDepartment.mobile,
                                    text: "Mobile",
                                },
                                {
                                    value: StackDepartment.game,
                                    text: "Game",
                                },
                                {
                                    value: StackDepartment.dekstop,
                                    text: "Desktop",
                                },
                                {
                                    value: StackDepartment.database,
                                    text: "Database",
                                },
                                {
                                    value: StackDepartment.other,
                                    text: "Other",
                                },
                            ]}
                            required
                            disabled={isAddingStack || isUpdatingStack}
                            onChange={(e) => setDepartment(e.currentTarget.value as StackDepartment)}
                        />

                        <label className="w-full mt-4">Skills</label>

                        <div className="flex mt-2 w-full">
                            <Input
                                className="w-full"
                                type="text"
                                onChange={(e) => setSkill(e.currentTarget.value)}
                                value={skill}
                                placeholder="Input Skill"
                            />

                            <Button type="button" className="ml-3" color="green-700" onClick={addSkill}>
                                <FontAwesomeIcon icon={faPlus} />
                            </Button>
                        </div>

                        {isSkillsEmpty && (
                            <Alert className="mt-3" mode={AlertMode.error}>
                                Activities Min 1
                            </Alert>
                        )}

                        {skills.length > 0 && (
                            <div className="flex flex-wrap w-full">
                                <div className="w-full mt-4">
                                    <label>Skills | </label>
                                    <span className="text-red-600 font-medium cursor-pointer" onClick={() => setSkills([])}>
                                        Clear
                                    </span>
                                </div>

                                <ul className="mt-1">
                                    {skills.map((skill, i) => {
                                        return <li key={i}>- {skill}</li>;
                                    })}
                                </ul>
                            </div>
                        )}

                        <Button type="submit" className="mt-4 ml-1" color="green-700" isLoading={isAddingStack || isUpdatingStack}>
                            Save
                        </Button>
                    </form>
                </div>
            )}
        </Card>
    );
};

export default StackForm;

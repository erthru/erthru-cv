import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../plugins/store";
import { removeLanguage, setLanguageToUpdate } from "../../plugins/store/language/actions";
import Card from "../card";
import EditButton from "../edit-button";
import ProgressBar from "../progress-bar";
import RemoveButton from "../remove-button";
import Table from "../table";

type Props = {
    className?: string;
};

const Languages = (props: Props) => {
    const dispatch = useDispatch();
    const languages = useSelector((store: Store) => store.language.languages);
    const isFetchingLanguages = useSelector((store: Store) => store.language.isFetchingLanguages);
    const isRemovingLanguage = useSelector((store: Store) => store.language.isRemovingLanguage);

    const remove = (id: string) => {
        dispatch(setLanguageToUpdate({}));
        dispatch(removeLanguage(id));
    };

    return (
        <Card className={"w-full p-6 flex flex-wrap " + props.className}>
            {(isFetchingLanguages || isRemovingLanguage) && <ProgressBar color="red-600" className="mt-4 mx-auto text-4xl" />}

            {!isFetchingLanguages && !isRemovingLanguage && (
                <div className="w-full">
                    <Table
                        className="w-full"
                        headers={["Lang", "Level", "Actions"]}
                        rows={[
                            ...languages.map((language) => {
                                return [
                                    <span>{language.lang}</span>,
                                    <span>{language.level}</span>,

                                    <div className="flex flex-wrap">
                                        <div className="w-full flex">
                                            <EditButton className="mx-auto" onClick={() => dispatch(setLanguageToUpdate(language))} />
                                        </div>

                                        <div className="w-full flex mt-1">
                                            <RemoveButton className="mx-auto" onClick={() => remove(language.id!!)} />
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

export default Languages;

import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../plugins/store";
import { addLanguage, setLanguageToUpdate, updateLanguage } from "../../plugins/store/language/actions";
import { Language, LanguageLevel } from "../../plugins/store/language/types";
import Button from "../button";
import Card from "../card";
import Input from "../input";
import Select from "../select";

const LanguageForm = () => {
    const dispatch = useDispatch();
    const languageToUpdate = useSelector((store: Store) => store.language.languageToUpdate) as Language;
    const isNewLanguageAdded = useSelector((store: Store) => store.language.isNewLanguageAdded) as boolean;
    const isLanguageUpdated = useSelector((store: Store) => store.language.isLanguageUpdated) as boolean;
    const isAddingLanguage = useSelector((store: Store) => store.language.isAddingLanguage) as boolean;
    const isUpdatingLanguage = useSelector((store: Store) => store.language.isUpdatingLanguage) as boolean;
    const [lang, setLang] = useState("");
    const [level, setLevel] = useState<LanguageLevel>(LanguageLevel.native);

    useEffect(() => {
        if (Object.keys(languageToUpdate).length > 0) {
            setLang(languageToUpdate.lang!!);
            setLevel(languageToUpdate.level!!);
        }
    }, [languageToUpdate]);

    useEffect(() => {}, []);

    useEffect(() => {
        if (isNewLanguageAdded || isLanguageUpdated) reset();
    }, [isNewLanguageAdded, isLanguageUpdated]);

    const reset = () => {
        dispatch(setLanguageToUpdate({}));
        setLang("");
        setLevel(LanguageLevel.native);
    };

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (Object.keys(languageToUpdate).length > 0) {
            dispatch(
                updateLanguage(languageToUpdate.id!!, {
                    lang: lang,
                    level: level,
                })
            );
        } else {
            dispatch(
                addLanguage({
                    lang: lang,
                    level: level,
                })
            );
        }
    };

    return (
        <Card className="p-6">
            <span className="w-full text-2xl font-bold text-gray-600">
                {Object.keys(languageToUpdate).length > 0 ? "Update Language" : "Add New Language"}
            </span>

            <form onSubmit={submit} className="w-full flex flex-wrap md:w-2/3 lg:w-1/2 mt-2">
                <label className="w-full">Lang</label>

                <Input
                    className="w-full mt-2"
                    placeholder="Input Language"
                    onChange={(e) => setLang(e.currentTarget.value)}
                    value={lang}
                    required
                    disabled={isAddingLanguage || isUpdatingLanguage}
                />

                <label className="w-full mt-4">Level</label>

                <Select
                    className="w-full mt-2"
                    value={level}
                    options={[
                        {
                            value: LanguageLevel.native,
                            text: "Native",
                        },
                        {
                            value: LanguageLevel.active,
                            text: "Active",
                        },
                        {
                            value: LanguageLevel.passive,
                            text: "Passive",
                        },
                    ]}
                    required
                    disabled={isAddingLanguage || isUpdatingLanguage}
                    onChange={(e) => setLevel(e.currentTarget.value as LanguageLevel)}
                />

                <Button type="submit" color="green-600" className="mt-4" isLoading={isAddingLanguage || isUpdatingLanguage}>
                    Save
                </Button>

                {!isAddingLanguage && !isUpdatingLanguage && (
                    <Button type="button" color="red-600" className="mt-4 ml-2" onClick={reset}>
                        Reset
                    </Button>
                )}
            </form>
        </Card>
    );
};

export default LanguageForm;

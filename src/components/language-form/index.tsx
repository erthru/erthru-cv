import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../plugins/store";
import { setLanguageToUpdate } from "../../plugins/store/language/actions";
import { Language, LanguageLevel } from "../../plugins/store/language/types";

const LanguageForm = () => {
    const dispatch = useDispatch();
    const languageToUpdate = useSelector((store: Store) => store.language.languageToUpdate) as Language;
    const isLanguageUpdated = useSelector((store: Store) => store.language.isLanguageUpdated) as Language;
    const [lang, setLang] = useState("");
    const [level, setLevel] = useState<LanguageLevel>(LanguageLevel.active);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(languageToUpdate).length > 0) {
            setLang(languageToUpdate.lang!!);
            setLevel(languageToUpdate.level!!);
        }
    }, [languageToUpdate]);

    useEffect(() => {
        if (isLanguageUpdated) reset();
    }, [isLanguageUpdated]);

    const reset = () => {
        dispatch(setLanguageToUpdate({}));
        setLang("");
        setLevel(LanguageLevel.active);
    };

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return <div>hahah {languageToUpdate.id}</div>;
};

export default LanguageForm;

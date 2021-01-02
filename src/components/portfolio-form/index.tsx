import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Store } from "../../plugins/store";
import { addPorfolio, fetchPortfolio, updatePorfolio } from "../../plugins/store/portfolio/actions";
import Button from "../button";
import Card from "../card";
import Input from "../input";
import ProgressBar from "../progress-bar";

type Props = {
    id?: string;
};

const PortfolioForm = (props: Props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const portfolio = useSelector((store: Store) => store.portfolio.portfolio);
    const isFetchingPortfolio = useSelector((store: Store) => store.portfolio.isFetchingPortfolio);
    const isNewPortfolioAdded = useSelector((store: Store) => store.portfolio.isNewPortfolioAdded);
    const isPortfolioUpdated = useSelector((store: Store) => store.portfolio.isPortfolioUpdated);
    const isAddingPortfolio = useSelector((store: Store) => store.portfolio.isAddingPortfolio);
    const isUpdatingPortfolio = useSelector((store: Store) => store.portfolio.isUpdatingPortfolio);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [previewOneUrl, setPreviewOneUrl] = useState("");
    const [previewTwoUrl, setPreviewTwoUrl] = useState("");
    const [previewThreeUrl, setPreviewThreeUrl] = useState("");
    const [readyToCheckChanges, setReadyToCheckChanges] = useState(false);

    useEffect(() => {
        if (props.id !== undefined) dispatch(fetchPortfolio(props.id));
    }, []);

    useEffect(() => {
        if ((isNewPortfolioAdded || isPortfolioUpdated) && readyToCheckChanges) history.push("/admin/portfolios");
    }, [isNewPortfolioAdded, isPortfolioUpdated]);

    useEffect(() => {
        if (Object.keys(portfolio).length > 0 && props.id !== undefined) {
            setTitle(portfolio.title!!);
            setDescription(portfolio.description!!);
            setPreviewOneUrl(portfolio.previewOneUrl!!);
            setPreviewTwoUrl(portfolio.previewTwoUrl!!);
            setPreviewThreeUrl(portfolio.previewThreeUrl!!);
        }
    }, [portfolio]);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setReadyToCheckChanges(true);

        if (props.id !== undefined) {
            dispatch(
                updatePorfolio(props.id, {
                    title: title,
                    description: description,
                    previewOneUrl: previewOneUrl,
                    previewTwoUrl: previewTwoUrl,
                    previewThreeUrl: previewThreeUrl,
                })
            );
        } else {
            dispatch(
                addPorfolio({
                    title: title,
                    description: description,
                    previewOneUrl: previewOneUrl,
                    previewTwoUrl: previewTwoUrl,
                    previewThreeUrl: previewThreeUrl,
                })
            );
        }
    };

    return (
        <Card className="w-full bg-white flex flex-wrap p-6">
            {isFetchingPortfolio && <ProgressBar className="mt-4 mx-auto text-4xl" color="red-600" />}

            {!isFetchingPortfolio && (
                <div className="w-full flex flex-wrap">
                    <span className="w-full text-2xl font-bold text-gray-600">
                        {props.id !== undefined ? "Update Portfolio" : "Add New Portfolio"}
                    </span>

                    <form className="flex flex-wrap mt-2 w-full md:w-2/3 lg:1/2" onSubmit={onSubmit}>
                        <label className="w-full">Title</label>

                        <Input
                            className="w-full mt-2"
                            type="text"
                            placeholder="Input Title"
                            required
                            onChange={(e) => setTitle(e.currentTarget.value)}
                            value={title}
                            disabled={isAddingPortfolio || isUpdatingPortfolio}
                        />

                        <label className="w-full mt-4">Description</label>

                        <Input
                            isTextArea
                            className="w-full mt-2"
                            type="text"
                            placeholder="Input Description"
                            required
                            onChange={(e) => setDescription(e.currentTarget.value)}
                            value={description}
                            disabled={isAddingPortfolio || isUpdatingPortfolio}
                        />

                        <label className="w-full mt-4">Preview One Url</label>

                        <Input
                            className="w-full mt-2"
                            type="text"
                            placeholder="Input Preview One Url"
                            required
                            onChange={(e) => setPreviewOneUrl(e.currentTarget.value)}
                            value={previewOneUrl}
                            disabled={isAddingPortfolio || isUpdatingPortfolio}
                        />

                        <label className="w-full mt-4">Preview Two Url</label>

                        <Input
                            className="w-full mt-2"
                            type="text"
                            placeholder="Input Preview Two Url"
                            required
                            onChange={(e) => setPreviewTwoUrl(e.currentTarget.value)}
                            value={previewTwoUrl}
                            disabled={isAddingPortfolio || isUpdatingPortfolio}
                        />

                        <label className="w-full mt-4">Preview Three Url</label>

                        <Input
                            className="w-full mt-2"
                            type="text"
                            placeholder="Input Preview Three Url"
                            required
                            onChange={(e) => setPreviewThreeUrl(e.currentTarget.value)}
                            value={previewThreeUrl}
                            disabled={isAddingPortfolio || isUpdatingPortfolio}
                        />

                        <Button type="submit" className="mt-4 ml-1" color="green-700" isLoading={isAddingPortfolio || isUpdatingPortfolio}>
                            Save
                        </Button>
                    </form>
                </div>
            )}
        </Card>
    );
};

export default PortfolioForm;

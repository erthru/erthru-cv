import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../plugins/store";
import { removePorfolio } from "../../plugins/store/portfolio/actions";
import { Portfolio } from "../../plugins/store/portfolio/types";
import AddNewButton from "../add-new-button";
import Card from "../card";
import EditButton from "../edit-button";
import ProgressBar from "../progress-bar";
import RemoveButton from "../remove-button";
import SearchInput from "../search-input";
import Table from "../table";

const Portfolios = () => {
    const dispatch = useDispatch();
    const portfolios = useSelector((store: Store) => store.portfolio.portfolios) as Portfolio[];
    const isFetchingPortfolios = useSelector((store: Store) => store.portfolio.isFetchingPortfolios) as boolean;
    const isRemovingPortfolio = useSelector((store: Store) => store.portfolio.isRemovingPortfolio) as boolean;
    const [search, setSearch] = useState("");
    const [_portfolios, _setPortfolios] = useState<Portfolio[]>([]);

    useEffect(() => {
        if (portfolios.length > 0) _setPortfolios(portfolios);
    }, [portfolios]);

    useEffect(() => {
        if (search !== "") {
            const tempPortfolios = _portfolios.filter(
                (portfolio) =>
                    portfolio.title?.toLowerCase().includes(search.toLowerCase()) ||
                    portfolio.description?.toLowerCase().includes(search.toLocaleLowerCase())
            );

            _setPortfolios(tempPortfolios);
        } else {
            _setPortfolios(portfolios);
        }
    }, [search]);

    return (
        <Card className="w-full flex flex-wrap p-6">
            <div className="flex flex-wrap w-full">
                <AddNewButton to="/admin/portfolio/add" className="mx-auto md:mx-0" />
                <SearchInput value={search} onChange={(e) => setSearch(e.currentTarget.value)} className="mx-auto md:ml-auto md:mr-0 mt-3 md:mt-0" />
            </div>

            {(isFetchingPortfolios || isRemovingPortfolio) && <ProgressBar color="red-600" className="mt-4 mx-auto text-4xl" />}

            {!isFetchingPortfolios && !isRemovingPortfolio && (
                <div className="w-full mt-4">
                    <Table
                        className="w-full"
                        headers={["Title", "Description", "Previews", "Actions"]}
                        rows={[
                            ..._portfolios.map((portfolio) => {
                                return [
                                    <span>{portfolio.title}</span>,
                                    <span>{portfolio.description?.substring(0, 50) + "..."}</span>,

                                    <div className="flex w-full">
                                        <img src={portfolio.previewOneUrl} alt="preview" className="ml-auto w-10 rounded-xl h-10" />
                                        <img src={portfolio.previewTwoUrl} alt="preview" className="w-10 h-10 rounded-xl ml-2" />
                                        <img src={portfolio.previewThreeUrl} alt="preview" className="mr-auto w-10 rounded-xl h-10 ml-2" />
                                    </div>,

                                    <div className="flex flex-wrap">
                                        <div className="w-full flex">
                                            <EditButton to={"/admin/portfolio/edit/" + portfolio.id} className="mx-auto" />
                                        </div>

                                        <div className="w-full flex mt-1">
                                            <RemoveButton className="mx-auto" onClick={() => dispatch(removePorfolio(portfolio.id!!))} />
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

export default Portfolios;

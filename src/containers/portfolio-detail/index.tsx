import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Card from "../../components/card";
import ProgressBar from "../../components/progress-bar";
import { Store } from "../../plugins/store";
import { fetchPortfolio } from "../../plugins/store/portfolio/actions";

type Params = {
    id: string;
};

const PortfolioDetail = () => {
    const params = useParams<Params>();
    const history = useHistory();
    const dispatch = useDispatch();
    const portfolio = useSelector((store: Store) => store.portfolio.portfolio);
    const isFetchingPortfolio = useSelector((store: Store) => store.portfolio.isFetchingPortfolio);

    useEffect(() => {
        dispatch(fetchPortfolio(params.id));
    }, []);

    return (
        <div className="w-full flex flex-wrap pb-6">
            <div className="w-full h-16 bg-red-400 fixed px-6 flex items-center">
                <FontAwesomeIcon icon={faChevronLeft} className="text-white cursor-pointer text-xl" onClick={() => history.push("/")} />

                {isFetchingPortfolio && <ProgressBar color="white" className="text-xl ml-4" />}
                {!isFetchingPortfolio && <span className="ml-4 font-medium w-full truncate text-white text-xl">{portfolio.title}</span>}
            </div>

            <Card className="p-6 w-full mt-20 mx-4 md:mx-6 flex">
                {isFetchingPortfolio && <ProgressBar color="red-600" className="text-3xl mx-auto" />}

                {!isFetchingPortfolio && (
                    <div className="flex flex-wrap w-full">
                        <div className="flex flex-wrap w-full">
                            <img src={portfolio.previewOneUrl} alt="" className="w-full md:w-1/3" />
                            <img src={portfolio.previewTwoUrl} alt="" className="w-full md:w-1/3 mt-4 md:mt-0" />
                            <img src={portfolio.previewThreeUrl} alt="" className="w-full md:w-1/3 mt-4 md:mt-0" />
                        </div>

                        <div className="flex flex-wrap mt-4">
                            <span>{portfolio.description}</span>
                        </div>
                    </div>
                )}
            </Card>
        </div>
    );
};

export default PortfolioDetail;

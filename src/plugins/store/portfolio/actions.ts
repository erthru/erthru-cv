import { Dispatch } from "react";
import db from "../../db";
import { Portfolio, PortfolioAction, PortfolioField, PORTFOLIO_COL_NAME, PORTFOLIO_TYPES } from "./types";

export const fetchPortfolios = () => async (dispatch: Dispatch<PortfolioAction>) => {
    try {
        dispatch({ type: PORTFOLIO_TYPES.FETCH_PORTFOLIOS_PREPARE });

        const portfolios: any[] = [];
        const portfoliosSnapshots = await db.collection(PORTFOLIO_COL_NAME).orderBy(PortfolioField.createdOn, "desc").get();

        portfoliosSnapshots.docs.map((doc) => {
            portfolios.push({
                id: doc.id,
                ...doc.data(),
            });
        });

        dispatch({ type: PORTFOLIO_TYPES.FETCH_PORTFOLIOS_COMPLETED, payload: { portfolios: portfolios as Portfolio[] } });
    } catch (e) {}
};

export const fetchPortfolio = (id: string) => async (dispatch: Dispatch<PortfolioAction>) => {
    try {
        dispatch({ type: PORTFOLIO_TYPES.FETCH_PORTFOLIO_PREPARE });

        let portfolio: any = {};
        const portfolioDoc = await db.collection(PORTFOLIO_COL_NAME).doc(id).get();

        portfolio = {
            id: portfolioDoc.id,
            ...portfolioDoc.data(),
        };

        dispatch({ type: PORTFOLIO_TYPES.FETCH_PORTFOLIO_COMPLETED, payload: { portfolio: portfolio as Portfolio } });
    } catch (e) {}
};

export const addPorfolio = (portfolio: Portfolio) => async (dispatch: Dispatch<PortfolioAction>) => {
    try {
        dispatch({ type: PORTFOLIO_TYPES.ADD_PORTFOLIO_PREPARE });

        await db.collection(PORTFOLIO_COL_NAME).add({
            [PortfolioField.createdOn]: new Date(),
            [PortfolioField.updatedOn]: new Date(),
            ...portfolio,
        });

        dispatch({ type: PORTFOLIO_TYPES.ADD_PORTFOLIO_COMPLETED });
    } catch (e) {}
};

export const updatePorfolio = (id: string, portfolio: Portfolio) => async (dispatch: Dispatch<PortfolioAction>) => {
    try {
        dispatch({ type: PORTFOLIO_TYPES.UPDATE_PORTFOLIO_PREPARE });

        await db
            .collection(PORTFOLIO_COL_NAME)
            .doc(id)
            .update({
                [PortfolioField.updatedOn]: new Date(),
                ...portfolio,
            });

        dispatch({ type: PORTFOLIO_TYPES.UPDATE_PORTFOLIO_COMPLETED });
    } catch (e) {}
};

export const removePorfolio = (id: string) => async (dispatch: Dispatch<PortfolioAction>) => {
    try {
        dispatch({ type: PORTFOLIO_TYPES.REMOVE_PORTFOLIO_PREPARE });
        await db.collection(PORTFOLIO_COL_NAME).doc(id).delete();
        dispatch({ type: PORTFOLIO_TYPES.REMOVE_PORTFOLIO_COMPLETED });
    } catch (e) {}
};

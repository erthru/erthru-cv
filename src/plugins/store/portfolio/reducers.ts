import { PortfolioState, PortfolioAction, PORTFOLIO_TYPES } from "./types";

const initialState: PortfolioState = {
    portfolios: [],
    portfolio: {},
    isFetchingPortfolios: false,
    isFetchingPortfolio: false,
    isNewPortfolioAdded: false,
    isPortfolioUpdated: false,
    isPortfolioRemoved: false,
    isAddingPortfolio: false,
    isUpdatingPortfolio: false,
    isRemovingPortfolio: false,
};

const reducers = (state = initialState, { type, payload }: PortfolioAction): PortfolioState => {
    switch (type) {
        case PORTFOLIO_TYPES.FETCH_PORTFOLIOS_PREPARE:
            return {
                ...state,
                portfolios: [],
                isFetchingPortfolios: true,
            };

        case PORTFOLIO_TYPES.FETCH_PORTFOLIOS_COMPLETED:
            return {
                ...state,
                portfolios: payload?.portfolios!!,
                isFetchingPortfolios: false,
            };

        case PORTFOLIO_TYPES.FETCH_PORTFOLIO_PREPARE:
            return {
                ...state,
                portfolio: {},
                isFetchingPortfolio: true,
            };

        case PORTFOLIO_TYPES.FETCH_PORTFOLIO_COMPLETED:
            return {
                ...state,
                portfolio: payload?.portfolio!!,
                isFetchingPortfolio: false,
            };

        case PORTFOLIO_TYPES.ADD_PORTFOLIO_PREPARE:
            return {
                ...state,
                isNewPortfolioAdded: false,
                isAddingPortfolio: true,
            };

        case PORTFOLIO_TYPES.ADD_PORTFOLIO_COMPLETED:
            return {
                ...state,
                isNewPortfolioAdded: true,
                isAddingPortfolio: false,
            };

        case PORTFOLIO_TYPES.UPDATE_PORTFOLIO_PREPARE:
            return {
                ...state,
                isPortfolioUpdated: false,
                isUpdatingPortfolio: true,
            };

        case PORTFOLIO_TYPES.UPDATE_PORTFOLIO_COMPLETED:
            return {
                ...state,
                isPortfolioUpdated: true,
                isUpdatingPortfolio: false,
            };

        case PORTFOLIO_TYPES.REMOVE_PORTFOLIO_PREPARE:
            return {
                ...state,
                isPortfolioRemoved: false,
                isRemovingPortfolio: true,
            };

        case PORTFOLIO_TYPES.REMOVE_PORTFOLIO_COMPLETED:
            return {
                ...state,
                isPortfolioRemoved: true,
                isRemovingPortfolio: false,
            };

        default:
            return state;
    }
};

export default reducers;

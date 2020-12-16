export enum PORTFOLIO_TYPES {
    FETCH_PORTFOLIOS_PREPARE = "FETCH_PORTFOLIOS_PREPARE",
    FETCH_PORTFOLIOS_COMPLETED = "FETCH_PORTFOLIOS_COMPLETED",
    FETCH_PORTFOLIO_PREPARE = "FETCH_PORTFOLIO_PREPARE",
    FETCH_PORTFOLIO_COMPLETED = "FETCH_PORTFOLIO_COMPLETED",
    ADD_PORTFOLIO_PREPARE = "ADD_PORTFOLIO_PREPARE",
    ADD_PORTFOLIO_COMPLETED = "ADD_PORTFOLIO_COMPLETED",
    UPDATE_PORTFOLIO_PREPARE = "UPDATE_PORTFOLIO_PREPARE",
    UPDATE_PORTFOLIO_COMPLETED = "UPDATE_PORTFOLIO_COMPLETED",
    REMOVE_PORTFOLIO_PREPARE = "REMOVE_PORTFOLIO_PREPARE",
    REMOVE_PORTFOLIO_COMPLETED = "REMOVE_PORTFOLIO_COMPLETED",
}

export const PORTFOLIO_COL_NAME = "portfolios";

export enum PortfolioField {
    title = "title",
    description = "description",
    preview_one = "preview_one",
    preview_two = "preview_two",
    preview_three = "preview_three",
    createdOn = "createdOn",
    updatedOn = "updatedOn",
}

export type Portfolio = {
    id?: string;
    [PortfolioField.title]?: string;
    [PortfolioField.description]?: string;
    [PortfolioField.preview_one]?: string;
    [PortfolioField.preview_two]?: string;
    [PortfolioField.preview_three]?: string;
    [PortfolioField.createdOn]?: Date;
    [PortfolioField.updatedOn]?: Date;
};

export type PortfolioState = {
    portfolios: Portfolio[];
    portfolio: Portfolio;
    isFetchingPortfolios: boolean;
    isFetchingPortfolio: boolean;
    isNewPortfolioAdded: boolean;
    isPortfolioUpdated: boolean;
    isPortfolioRemoved: boolean;
    isAddingPortfolio: boolean;
    isUpdatingPortfolio: boolean;
    isRemovingPortfolio: boolean;
};

export type PortfolioAction = {
    type: PORTFOLIO_TYPES;
    payload?: {
        portfolios?: Portfolio[];
        portfolio?: Portfolio;
    };
};

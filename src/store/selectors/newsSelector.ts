import { TGlobalState } from "../reduxStore";

export const getNews = (state: TGlobalState)=> state.newsPage.news;
export const getIsFetching = (state: TGlobalState) => state.newsPage.isFetching;
export const getHasContent = (state: TGlobalState) => state.newsPage.hasContent;
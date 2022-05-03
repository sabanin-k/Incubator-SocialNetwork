import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { TNews } from "../../api/newsAPI";
import { Preloader } from "../../components/common/Preloader/Preloader";
import { getContent, getNewsThunk } from '../../store/reducers/newsReducer';
import { TGlobalState } from "../../store/reduxStore";
import { getHasContent, getIsFetching, getNews, getNextPageSelector, getScrollFetchingSelector } from "../../store/selectors/newsSelector";
import News from './News';

const NewsContainer: FC<TProps> = ({ getNewsThunk, isFetching, news, hasContent, getContent, nextPage, scrollFetching }) => {
    useEffect(() => {
        if (scrollFetching) {
            getNewsThunk(nextPage)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrollFetching])

    return (
        <>
            {isFetching
                ? <Preloader />
                : <News
                    news={news}
                    hasContent={hasContent}
                    getContent={getContent} />}
        </>
    )
}

const mapStateToProps = (state: TGlobalState) => ({
    news: getNews(state),
    isFetching: getIsFetching(state),
    hasContent: getHasContent(state),
    nextPage: getNextPageSelector(state),
    scrollFetching: getScrollFetchingSelector(state)
})

export default connect(mapStateToProps, { getNewsThunk, getContent })(NewsContainer);


type TProps = {
    isFetching: boolean
    news: TNews[]
    hasContent: string[]
    nextPage: number
    scrollFetching: boolean
    getContent: () => void
    getNewsThunk: (page: number) => Promise<void>
}
import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { getNewsThunk, getContent } from '../../store/reducers/newsReducer';
import News from './News';
import { Preloader } from "../../components/common/Preloader/Preloader";
import { getHasContent, getIsFetching, getNews } from "../../store/selectors/newsSelector";
import { TArticle } from "../../api/apiNews";

const NewsContainer: FC<TProps> = ({ getNewsThunk, isFetching, news, hasContent, getContent }) => {
    useEffect(() => {
        getNewsThunk()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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

const mapStateToProps = (state) => ({
    news: getNews(state),
    isFetching: getIsFetching(state),
    hasContent: getHasContent(state)
})

export default connect(mapStateToProps, { getNewsThunk, getContent })(NewsContainer);


type TProps = {
    isFetching: boolean
    news: TArticle[]
    hasContent: string[]
    getContent: () => void
    getNewsThunk: () => void
}
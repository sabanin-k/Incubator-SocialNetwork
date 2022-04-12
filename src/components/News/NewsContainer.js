import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNewsThunk, getContent } from '../../store/reducers/newsReducer';
import News from './News';
import Preloader from "../common/Preloader/Preloader";
import { getHasContent, getIsFetching, getNews } from "../../store/selectors/newsSelector";

const NewsContainer = ({getNewsThunk, isFetching, news, hasContent, getContent}) => {
    useEffect(() => {
        getNewsThunk()
    }, [getNewsThunk])

    return (
        <>
            {isFetching && <Preloader />}
            {console.log('return')}
            <News
                news={news}
                hasContent={hasContent}
                getContent={getContent} />
        </>
    )
}

const mapStateToProps = (state) => ({
    news: getNews(state),
    isFetching: getIsFetching(state),
    hasContent: getHasContent(state)
})

export default connect(mapStateToProps, { getNewsThunk, getContent })(NewsContainer);
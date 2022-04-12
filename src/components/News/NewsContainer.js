import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNewsThunk, getContent } from '../../store/reducers/newsReducer';
import News from './News';
import Preloader from "../common/Preloader/Preloader";
import { getHasContent, getIsFetching, getNews } from "../../store/selectors/newsSelector";

const NewsContainer = (props) => {
    useEffect(() => {
        props.getNewsThunk()
    }, [])

    return (
        <>
            {props.isFetching && <Preloader />}
            <News
                news={props.news}
                hasContent={props.hasContent}
                getContent={props.getContent} />
        </>
    )
}

const mapStateToProps = (state) => ({
    news: getNews(state),
    isFetching: getIsFetching(state),
    hasContent: getHasContent(state)
})

export default connect(mapStateToProps, { getNewsThunk, getContent })(NewsContainer);
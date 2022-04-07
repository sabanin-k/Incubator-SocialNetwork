import React, { Component } from "react";
import { connect } from "react-redux";
import { getNewsThunk, getContent } from './../State/newsReducer';
import News from './News';
import Preloader from "../common/Preloader/Preloader";
import { getHasContent, getIsFetching, getNews } from "../State/Selectors/newsSelector";

class NewsContainer extends Component {
    componentDidMount() {
        this.props.getNewsThunk()
    }

    render() {
        return (
            <>
                {this.props.isFetching && <Preloader />}
                <News
                    news={this.props.news}
                    hasContent={this.props.hasContent}
                    getContent={this.props.getContent} />
            </>)
    }
}

const mapStateToProps = (state) => ({
    news: getNews(state),
    isFetching: getIsFetching(state),
    hasContent: getHasContent(state)
})

export default connect(mapStateToProps, { getNewsThunk, getContent })(NewsContainer);
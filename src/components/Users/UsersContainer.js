import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { setCurrentPageThunk, getUsersThunk, followThunk, unfollowThunk } from "../../store/reducers/usersReducer";
import Users from "./Users";
import withNavigateToLogin from "../../hoc/withNavigateToLogin";
import { getCurrentPage, getInProgressFollow, getIsFetching, getPageSize, getTotalCount, getUsers } from "../../store/selectors/usersSelector";


class UsersContainer extends Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    hadlerSetCurrentPage = (number) => {
        this.props.setCurrentPageThunk(number, this.props.pageSize)
    }

    render() {
        return (
            <Users
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                users={this.props.users}
                currentPage={this.props.currentPage}
                inProgressFollow={this.props.inProgressFollow}
                hadlerSetCurrentPage={this.hadlerSetCurrentPage}
                followThunk={this.props.followThunk}
                unfollowThunk={this.props.unfollowThunk}
                isFetching={this.props.isFetching} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalCount: getTotalCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        inProgressFollow: getInProgressFollow(state),
    }
}

export default compose(
    connect(mapStateToProps, { setCurrentPageThunk, getUsersThunk, followThunk, unfollowThunk }),
    withNavigateToLogin
)(UsersContainer)

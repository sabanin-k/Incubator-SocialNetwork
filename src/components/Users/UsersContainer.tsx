import React, { FC, useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { setCurrentPageThunk, getUsersThunk, followThunk, unfollowThunk, setSearchTerm } from "../../store/reducers/usersReducer";
import { getFollowedFriends } from "../../store/reducers/friendsReducer";
import { getCurrentPage, getInProgressFollow, getPageSize, getTotalCount, getUsers, getSearchTerm } from "../../store/selectors/usersSelector";
import { TUsers } from "../../types/types";
import withNavigateToLogin from "../../hoc/withNavigateToLogin";
import { TGlobalState } from "../../store/reduxStore"
import Users from "./Users.tsx";

const UsersContainer: FC<TProps> = ({getUsersThunk, ...props}) => {
    useEffect(() => {
        getUsersThunk(props.currentPage, props.pageSize, props.searchTerm)
    }, [getUsersThunk, props.currentPage, props.pageSize, props.searchTerm])

    const hadlerSetCurrentPage = (number: number) => {
        props.setCurrentPageThunk(number, props.pageSize, props.searchTerm)
    }

    return <Users totalCount= {props.totalCount}
        pageSize = {props.pageSize}
        users = {props.users}
        currentPage = {props.currentPage}
        inProgressFollow = {props.inProgressFollow}
        hadlerSetCurrentPage = {hadlerSetCurrentPage}
        followThunk = {props.followThunk}
        unfollowThunk = {props.unfollowThunk}
        getFollowedFriends = {props.getFollowedFriends}
        setSearchTerm = {props.setSearchTerm}
        searchTerm = {props.searchTerm} />
}

const mapStateToProps = (state: TGlobalState): TStateProps => {
    return {
        users: getUsers(state),
        totalCount: getTotalCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        inProgressFollow: getInProgressFollow(state),
        searchTerm: getSearchTerm(state)
    }
}

export default compose<React.Component>(
    connect<TStateProps, TDispatchProps>(mapStateToProps, {
        setCurrentPageThunk, getUsersThunk,
        followThunk, unfollowThunk,
        getFollowedFriends, setSearchTerm }),
    withNavigateToLogin
)(UsersContainer)


type TStateProps = {
    users: TUsers
    totalCount: number
    pageSize: number
    currentPage: number
    inProgressFollow: Array<number>
    searchTerm: string }
type TDispatchProps = {
    setCurrentPageThunk: (number: number, pageSize: number, searchTerm: string) => void
    getUsersThunk: (currentPage: number, pageSize: number, searchTerm: string) => void
    followThunk: (userId: number) => void
    unfollowThunk: (userId: number) => void
    getFollowedFriends: () => void 
    setSearchTerm: (term: string) => void }
type TProps = TStateProps & TDispatchProps

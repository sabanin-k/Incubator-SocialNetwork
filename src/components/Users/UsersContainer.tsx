import React, { FC, useEffect } from "react";
import { compose } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { getUsersThunk } from "../../store/reducers/usersReducer";
import { getCurrentPage, getPageSize, getSearchTerm } from "../../store/selectors/usersSelector";
import withNavigateToLogin from "../../hoc/withNavigateToLogin";
import Users from "./Users.tsx";

const UsersContainer: FC = () => {
    const dispatch = useDispatch()
    const pageSize = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)
    const searchTerm = useSelector(getSearchTerm)
    useEffect(() => {
        dispatch(getUsersThunk(currentPage, pageSize, searchTerm))
    }, [dispatch, currentPage, pageSize, searchTerm])

    return <Users />
}

export default compose<React.Component>(
    withNavigateToLogin
)(UsersContainer)

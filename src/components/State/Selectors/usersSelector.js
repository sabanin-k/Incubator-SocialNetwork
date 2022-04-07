import { createSelector } from 'reselect';

const getUsersPrime = (state) => state.usersPage.users;

export const getUsers = createSelector(getUsersPrime, (users) => {
    // some big logic here
    return users;
})

export const getTotalCount = (state) => state.usersPage.totalCount;

export const getPageSize = (state) => state.usersPage.pageSize;

export const getCurrentPage = (state) => state.usersPage.currentPage;

export const getIsFetching = (state) => state.usersPage.isFetching;

export const getInProgressFollow = (state) => state.usersPage.inProgressFollow;

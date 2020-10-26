export const
  getUsers = state => state.usersPage.users,
  getCurrentPage = state => state.usersPage.currentPage,
  getTotalPageCount = state => state.usersPage.totalPageCount,
  getIsFetching = state => state.usersPage.isFetching,
  getIsFriend = state => state.usersPage.isFriend;
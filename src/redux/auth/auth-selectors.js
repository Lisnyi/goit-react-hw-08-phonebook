export const getIsLogin = ({auth}) => auth.isLogin;
export const getUser = ({auth}) => auth.user;
export const getLoadingUserStatus = ({auth}) => auth.isLoadingUser;
export const getLoading = ({auth}) => auth.loading;
export const getError = ({auth}) => auth.error;
export const getToken = ({auth}) => auth.token;
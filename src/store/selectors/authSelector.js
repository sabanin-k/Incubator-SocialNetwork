export const getIsLogged = (state) => state.auth.isLogged;
export const getErrorMessage = (state) => state.auth.errorMessage;
export const getCaptchaURL = (state) => state.auth.captchaURL;
export const getAuthData = (state) => state.auth;
export const getAuthUserId = (state) => state.auth.id;
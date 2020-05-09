import * as types from "../constant/auth.constant";

export const loginSuccess = user => ({
  type: types.LOGIN_SUCCESS,
  payload: {
    user
  }
});

export const loginFail = () => ({
  type: types.LOGIN_FAIL
});

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS
});

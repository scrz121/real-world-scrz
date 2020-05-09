import * as types from "../constant/auth.constant";
let initState = {
  user: {},
  isAuth: false
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const { user } = action.payload;
      return { ...state, user: user, isAuth: true };
    }
    case types.LOGIN_FAIL: {
      return { ...state, user: {}, isAuth: false };
    }
    case types.LOGOUT_SUCCESS: {
      return {};
    }
    default: {
      return { ...state };
    }
  }
};

export default reducer;

import React from "react";
import SigninForm from "../../component/SignIn";
import { connect } from "react-redux";
import { loginSuccess } from "../../action/auth.action";
import { useHistory, useLocation } from "react-router-dom";
import { notifyError, notifySuccess } from "../../helper/toast.helper";
import authApi from "../../api/auth.api";
import PropTypes from "prop-types";

SignInPage.propTypes = {
  auth: PropTypes.object
};

function SignInPage(props) {
  const { isAuth } = props;
  const location = useLocation();
  const history = useHistory();
  const onSubmitForm = async formValue => {
    try {
      const res = await authApi.signIn(formValue);
      const { data } = res;
      const { user, accessToken } = data;
      localStorage.setItem("token", accessToken);
      const { loginSuccess } = props;
      loginSuccess(user);
      notifySuccess(`Welcome ${user.username}!`);
      const { state } = location;
      if (state) {
        history.replace(state.from);
      } else {
        history.replace("/");
      }
    } catch (error) {
      if (error.response) {
        const { data } = error.response;
        const { message } = data;
        notifyError(message);
      } else {
        notifyError(error.message);
      }
    }
  };
  if (isAuth) {
    if (history.length > 1) {
      history.goBack();
    } else {
      history.replace("/");
    }
  }
  return <SigninForm onSubmitForm={onSubmitForm ? onSubmitForm : null} />;
}

const mapDispatchToProps = dispatch => ({
  loginSuccess: user => dispatch(loginSuccess(user))
});

export default connect(
  null,
  mapDispatchToProps
)(SignInPage);

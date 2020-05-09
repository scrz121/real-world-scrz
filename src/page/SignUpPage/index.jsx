import React, { useState } from "react";
import authApi from "../../api/auth.api";
import SignUpForm from "../../component/SignUp";
import { Redirect, useLocation, useHistory } from "react-router-dom";
import { notifyError, notifySuccess } from "../../helper/toast.helper";

function SignUpPage(props) {
  const [redirect, setRedirect] = useState(false);
  const { isAuth } = props;
  const location = useLocation();
  const history = useHistory();
  if (isAuth) {
    if (history.length > 1) {
      history.goBack();
    } else {
      history.replace("/");
    }
  }

  const onSubmitForm = async formValue => {
    try {
      const res = await authApi.signUp(formValue);
      const { data } = res;
      notifySuccess(`Đăng ký thành công tài khoản : ${data}`);
      setRedirect(true);
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
  const redirectHelper = (path, location) => {
    return (
      <Redirect
        to={{
          pathname: path,
          state: {
            from: location
          }
        }}
      />
    );
  };
  return redirect ? (
    redirectHelper("/sign-in", location)
  ) : (
    <SignUpForm onSubmitForm={onSubmitForm} />
  );
}

export default SignUpPage;

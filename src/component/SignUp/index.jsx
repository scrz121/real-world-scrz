import React, { useState } from "react";
import PropTypes from "prop-types";
import { validateSignUp } from "../../helper/validate.helper";
import { NavLink } from "react-router-dom";

SignUpForm.propTypes = {
  onSubmitForm: PropTypes.func
};

SignUpForm.defaultProps = {
  onSubmitForm: null
};

function SignUpForm(props) {
  const [formValue, setFormValue] = useState({
    username: "",
    email: "",
    password: ""
  });

  const onHandleChange = event => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const { onSubmitForm } = props;

  const onSubmit = e => {
    e.preventDefault();
    const value = formValue;
    const { username, email, password } = value;
    if (validateSignUp(username, email, password) === false) {
      return;
    }
    if (onSubmitForm) {
      onSubmitForm(value);
    }
  };
  const { username, email, password } = formValue;
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign Up</h1>
            <p className="text-xs-center">
              <NavLink to="/sign-in">Have an account?</NavLink>
            </p>
            <form onSubmit={onSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    onChange={onHandleChange}
                    type="text"
                    className="form-control form-control-lg"
                    name="username"
                    value={username}
                    placeholder="Tài khoản"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    onChange={onHandleChange}
                    type="email"
                    className="form-control form-control-lg"
                    name="email"
                    value={email}
                    placeholder="Email"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    onChange={onHandleChange}
                    type="password"
                    className="form-control form-control-lg"
                    name="password"
                    value={password}
                    placeholder="Mật khẩu"
                  />
                </fieldset>
                <button
                  onClick={onSubmit}
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                >
                  Sign up
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;

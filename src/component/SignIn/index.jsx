import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { validateSignIn } from "../../helper/validate.helper";

SignInForm.propTypes = {
  onSubmitForm: PropTypes.func
};

SignInForm.defaultProps = {
  onSubmitForm: null
};

function SignInForm(props) {
  const [formValue, setFormValue] = useState({ email: "", password: "" });
  const { email, password } = formValue;
  const onHandleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValue({ ...formValue, [name]: value });
  };
  const onSubmit = e => {
    e.preventDefault();
    if (!validateSignIn(email, password)) {
      return;
    }
    const { onSubmitForm } = props;
    if (onSubmitForm) {
      onSubmitForm(formValue);
    }
  };
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign In</h1>
            <p className="text-xs-center">
              <Link to="/sign-up">Need an account?</Link>
            </p>
            <form onSubmit={onSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onHandleChange}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    password={password}
                    onChange={onHandleChange}
                  />
                </fieldset>
                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                >
                  Sign in
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;

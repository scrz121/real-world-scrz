import React from "react";
import PropTypes from "prop-types";

Setting.propTypes = {
  userProfile: PropTypes.object,
  onLogout: PropTypes.func
};

Setting.defaultProps = {
  onLogout: null,
  userProfile: {
    avatar: null,
    username: null,
    email: null
  }
};

function Setting(props) {
  const { userProfile, onLogout } = props;
  const { avatar, username, email } = userProfile;
  const onLogoutClick = () => {
    if (onLogout) {
      onLogout(email);
    }
    return;
  };
  const onHandleChange = () => {};
  const onHandleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>
            <form onSubmit={onHandleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    onChange={onHandleChange}
                    defaultValue={avatar !== null ? avatar : ""}
                    type="text"
                    className="form-control"
                    placeholder="URL of profile picture"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    onChange={onHandleChange}
                    value={username !== null ? username : ""}
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Username"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    rows="8"
                    placeholder="Short bio about you"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    onChange={onHandleChange}
                    value={email !== null ? email : ""}
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    onChange={onHandleChange}
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="New Password"
                  />
                </fieldset>
                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                >
                  Update Settings
                </button>
              </fieldset>
            </form>
            <hr />
            <button onClick={onLogoutClick} className="btn btn-outline-danger">
              Or click here to logout.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;

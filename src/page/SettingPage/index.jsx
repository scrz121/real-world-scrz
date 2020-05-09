import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import authApi from "../../api/auth.api";
import { notifySuccess, notifyError } from "../../helper/toast.helper";
import * as authAction from "../../action/auth.action";
import Setting from "../../component/Setting";
import PropTypes from "prop-types";

SettingPage.propTypes = {
  auth: PropTypes.object,
  bindActionCreators: PropTypes.object
};

function SettingPage(props) {
  const location = useLocation();
  const history = useHistory();
  const { auth, authActionCreator } = props;
  const { user: userProfile, isAuth } = auth;
  const onLogout = async email => {
    try {
      const { logoutSuccess } = authActionCreator;
      const res = await authApi.logOut({ email: email });
      const { data } = res;
      logoutSuccess();
      notifySuccess(data.message);
    } catch (error) {
      let msg = error.message;
      const { response } = error;
      if (response) {
        msg = response.data.message;
      }
      notifyError(msg);
    }
  };
  if (!isAuth) {
    history.push("/sign-in", { from: location.pathname });
  }
  return <Setting onLogout={onLogout} userProfile={userProfile} />;
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  authActionCreator: bindActionCreators(authAction, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingPage);

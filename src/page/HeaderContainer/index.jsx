import React from "react";
import { connect } from "react-redux";
import Header from "../../component/Header";
import LogInHeader from "../../component/LogInHeader";
import ProfileHeader from "../../component/ProfileHeader";
import PropTypes from "prop-types";

HeaderContainer.propTypes = {
  auth: PropTypes.shape({
    user: PropTypes.object,
    isAuth: PropTypes.bool
  })
};

HeaderContainer.defaultProps = {
  auth: {
    user: {},
    isAuth: false
  }
};

const menu = [
  {
    to: "/global-article",
    exact: true,
    name: "Home"
  },
  {
    to: "/sign-in",
    exact: true,
    name: "Sign in"
  },
  {
    to: "/sign-up",
    exact: true,
    name: "Sign up"
  }
];

function HeaderContainer(props) {
  const { auth } = props;
  const { isAuth } = auth;
  const renderMenu = () => {
    let xhtml = null;
    if (!isAuth) {
      xhtml = <LogInHeader menu={menu} />;
    } else {
      const { user } = auth;
      xhtml = <ProfileHeader user={user} />;
    }
    return xhtml;
  };
  return <Header>{renderMenu()}</Header>;
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(HeaderContainer);

import PropTypes from "prop-types";
import React from "react";
import { Route } from "react-router-dom";

Routerlayout.propTypes = {
  path: PropTypes.string,
  exact: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

function Routerlayout(props) {
  const { isAuth, component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={routerProps => <Component {...routerProps} isAuth={isAuth} />}
    />
  );
}

export default Routerlayout;

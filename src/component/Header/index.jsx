import React from "react";
import PropTypes from "prop-types";

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};
Header.defaultProps = {
  children: null
};
function Header(props) {
  const { children } = props;
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <p className="navbar-brand">conduit</p>
        <ul className="nav navbar-nav pull-xs-right">{children}</ul>
      </div>
    </nav>
  );
}

export default Header;

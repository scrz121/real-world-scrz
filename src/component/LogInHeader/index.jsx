import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

LogInHeader.propTypes = {
  menu: PropTypes.array
};
LogInHeader.defaultProps = {
  menu: null
};

function LogInHeader(props) {
  const { menu } = props;
  const renderMenuLink = () => {
    let xhtml = null;
    if (menu) {
      xhtml = menu.map((e, index) => {
        return (
          <li key={index} className="nav-item">
            <NavLink className="nav-link" to={e.to} exact={e.exact}>
              {e.name}
            </NavLink>
          </li>
        );
      });
    }
    return xhtml;
  };
  return <React.Fragment>{renderMenuLink()}</React.Fragment>;
}

export default LogInHeader;

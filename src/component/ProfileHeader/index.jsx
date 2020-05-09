import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

ProfileHeader.propTyes = {
  user: PropTypes.object
};

function ProfileHeader(props) {
  const { user } = props;
  return (
    <React.Fragment>
      <li className="nav-item">
        <NavLink className="nav-link" to="/global-article" exact={true}>
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/new-article" exact={true}>
          <i className="ion-compose" />
          &nbsp;New Post
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/setting" exact={true}>
          <i className="ion-gear-a" />
          &nbsp;Settings
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/" exact={true}>
          {user.avatar ? (
            <img
              alt=""
              className="user-pic"
              src="https://picsum.photos/200/300"
            />
          ) : null}
          {user.username}
        </NavLink>
      </li>
    </React.Fragment>
  );
}

export default ProfileHeader;

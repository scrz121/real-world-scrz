/* eslint-disable jsx-a11y/anchor-is-valid*/
import PropTypes from "prop-types";
import React from "react";
import { NavLink, Route } from "react-router-dom";
import ArticlePreviewContainer from "../ArticlePreviewContainer";
import Pagination from "../../component/Pagination";

HomePage.propTypes = {
  isAuth: PropTypes.bool
};

function HomePage(props) {
  const { isAuth } = props;
  return (
    <div className="home-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                {isAuth === true ? (
                  <li className="nav-item">
                    <NavLink
                      to="/my-article?page=1"
                      className="nav-link"
                      activeClassName="active"
                    >
                      Your Feed
                    </NavLink>
                  </li>
                ) : null}
                <li className="nav-item">
                  <NavLink
                    to="/global-article?page=1"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Global Feed
                  </NavLink>
                </li>
              </ul>
            </div>
            <Pagination />
            <Route
              exact
              path="/my-article"
              component={ArticlePreviewContainer}
            />
            <Route
              exact
              path="/global-article"
              component={ArticlePreviewContainer}
            />
          </div>
          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>
              <div className="tag-list">
                <NavLink to="/" className="tag-default tag-pill">
                  test
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

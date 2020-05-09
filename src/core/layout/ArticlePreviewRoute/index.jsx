import PropTypes from "prop-types";
import React from "react";
import { Route } from "react-router-dom";

ArticlePreviewRoute.propTypes = {
  path: PropTypes.string,
  exact: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

function ArticlePreviewRoute(props) {
  const { component: Component, articles, ...rest } = props;
  return <Route {...rest} render={() => <Component articles={articles} />} />;
}

export default ArticlePreviewRoute;

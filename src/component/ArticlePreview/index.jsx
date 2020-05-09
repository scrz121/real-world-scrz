import React from "react";
import { useParams, useLocation } from "react-router-dom";

function ArticlePreview(props) {
  const params = useParams();
  const localtion = useLocation();
  console.log(params);
  return (
    <div className="article-preview">
      <div className="article-meta">
        <a className="" href="#@Sicard">
          <img
            alt=""
            src="https://static.productionready.io/images/smiley-cyrus.jpg"
          />
        </a>
        <div className="info">
          <a className="author" href="#@Sicard">
            Sicard
          </a>
          <span className="date">Sat May 09 2020</span>
        </div>
        <div className="pull-xs-right">
          <button className="btn btn-sm btn-outline-primary">
            <i className="ion-heart" />
          </button>
        </div>
      </div>
      <a className="preview-link" href="#article/sicard-test-j9vlnk">
        <h1>Sicard test</h1>
        <p>Sicard test 2</p>
        <span>Read more...</span>
        <ul className="tag-list" />
      </a>
    </div>
  );
}

export default ArticlePreview;

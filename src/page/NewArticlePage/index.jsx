import React, { useState } from "react";
import articleApi from "../../api/article.api";
import { notifyError, notifySuccess } from "../../helper/toast.helper";
import { useHistory } from "react-router-dom";

function NewArticlePage() {
  const history = useHistory();
  let [newArticle, setNewArticle] = useState({
    title: "",
    des: "",
    body: "",
    tag: ""
  });
  const onHandleChange = e => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    setNewArticle(s => ({ ...s, [name]: value }));
  };
  const onHandleSubmit = async e => {
    e.preventDefault();
    let newItem = { ...newArticle };
    if (!newItem.title || !newItem.des || !newItem.body || !newItem.tag) {
      notifyError("Hãy điền đầy đủ thông tin!");
      return;
    }
    try {
      const res = await articleApi.addNew(newItem);
      setNewArticle({
        title: "",
        des: "",
        body: "",
        tag: ""
      });
      const data = res.data;
      notifySuccess(data.message);
      history.push("/my-article");
    } catch (e) {
      notifyError(e);
    }
  };
  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <form onSubmit={onHandleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    onChange={onHandleChange}
                    value={newArticle.title}
                    type="text"
                    name="title"
                    className="form-control form-control-lg"
                    placeholder="Article Title"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    name="des"
                    onChange={onHandleChange}
                    value={newArticle.des}
                    type="text"
                    className="form-control"
                    placeholder="What's this article about?"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    name="body"
                    onChange={onHandleChange}
                    value={newArticle.body}
                    className="form-control"
                    rows="8"
                    placeholder="Write your article (in markdown)"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    name="tag"
                    onChange={onHandleChange}
                    value={newArticle.tag}
                    type="text"
                    className="form-control"
                    placeholder="Enter tags"
                  />
                  <div className="tag-list" />
                </fieldset>
                <button
                  className="btn btn-lg pull-xs-right btn-primary"
                  type="submit"
                >
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArticlePage;

import callApi from "../core/axios";

class authApi {
  constructor(router) {
    this.router = `${router}`;
  }
  myArticle = page => {
    return callApi.post(`${this.router}/my-article`);
  };
  globalArticle = page => {
    return callApi.post(`${this.router}/global-article`);
  };
  addNew = item => {
    return callApi.post(`${this.router}/new-article`, item);
  };
}

export default new authApi("article");

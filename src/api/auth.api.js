import callApi from "../core/axios";

class authApi {
  constructor(router) {
    this.router = `${router}`;
  }
  signUp = user => {
    return callApi.post(`${this.router}/sign-up`, user);
  };
  signIn = user => {
    return callApi.post(`${this.router}/sign-in`, user);
  };
  veryfyToken = () => {
    return callApi.post(`${this.router}/verify-token`);
  };
  logOut = email => {
    return callApi.post(`${this.router}/log-out`, email);
  };
}

export default new authApi("auth");

import axios from "axios";

const getToken = () => {
  let token = null;
  token = localStorage.getItem("token");
  if (!token) {
    token = "";
  } else {
    token = `Bearer ${token}`;
  }
  return token;
};

class AxiosService {
  constructor() {
    const instance = axios.create({
      baseURL: "http://localhost:8080"
    });
    const token = getToken();
    if (token !== "") {
    }
    instance.interceptors.request.use(this.handleRequest);
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }

  handleRequest = config => {
    const token = getToken();
    config.headers.post["Authorization"] = token;
    return config;
  };

  handleSuccess = response => {
    return response;
  };

  handleError = error => {
    return Promise.reject(error);
  };

  get(url, body) {
    return this.instance.get(url, body);
  }

  post(url, body) {
    return this.instance.post(url, body);
  }
}

export default new AxiosService();

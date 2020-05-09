import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { bindActionCreators } from "redux";
import * as authAction from "./action/auth.action";
import authApi from "./api/auth.api";
import { routes } from "./constant/route.const";
import LayoutRoute from "./core/layout/LayoutRoute";
import { notifySuccess } from "./helper/toast.helper";
import HeaderContainer from "./page/HeaderContainer";

toast.configure();

function App(props) {
  const { authActionCreator } = props;
  const { loginFail, loginSuccess } = authActionCreator;
  const { isAuth } = props.auth;
  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await authApi.veryfyToken();
        let { data } = res.data;
        loginSuccess(data);
        notifySuccess(`Welcome back ${data.username}`);
      } catch (e) {
        loginFail();
        localStorage.removeItem("token");
      }
    };
    const token = localStorage.getItem("token");

    if (token && !isAuth) {
      verifyToken();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const renderRoute = routes => {
    let xhtml = null;
    if (routes.length > 0) {
      xhtml = routes.map(e => {
        return (
          <LayoutRoute
            isAuth={isAuth}
            key={e.path}
            path={e.path}
            exact={e.exact}
            component={e.main}
          />
        );
      });
    }
    return xhtml;
  };
  return (
    <BrowserRouter>
      <div>
        <HeaderContainer />
        <Switch>{renderRoute(routes)}</Switch>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});
const mapDispatchToProps = dispatch => ({
  authActionCreator: bindActionCreators(authAction, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

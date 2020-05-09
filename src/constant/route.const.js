import React from "react";
import HomePage from "../page/HomePage";
import SignUpPage from "../page/SignUpPage";
import SignInPage from "../page/SignInPage";
import SettingPage from "../page/SettingPage";
import NewArticlePage from "../page/NewArticlePage";

export const routes = [
  {
    path: "/sign-up",
    exact: true,
    main: prop => <SignUpPage {...prop} />
  },
  {
    path: "/sign-in",
    exact: true,
    main: prop => <SignInPage {...prop} />
  },
  {
    path: "/setting",
    exact: true,
    main: prop => <SettingPage {...prop} />
  },
  {
    path: "/new-article",
    exact: true,
    main: prop => <NewArticlePage {...prop} />
  },
  {
    path: "/",
    exact: false,
    main: ({ isAuth }) => <HomePage isAuth={isAuth} />
  }
];

import { lazy } from "react";

import { pathConfig } from "configs/router/pathConfig";
//TODO заменить флаги protected
export const routeConfig = [
  {
    path: pathConfig.notFound,
    component: lazy(() => import("pages/NotFound")),
    protected: false,
  },
  {
    path: pathConfig.auth,
    component: lazy(() => import("pages/Login")),
    protected: false,
  },
  {
    path: pathConfig.resetPasswordMail,
    component: lazy(() => import("pages/Login/ResetPasswordMail")),
    protected: false,
  },
  {
    path: pathConfig.resetPasswordCode,
    component: lazy(() => import("pages/Login/ResetPasswordCode")),
    protected: false,
  },
  {
    path: pathConfig.resetPassword,
    component: lazy(() => import("pages/Login/ResetPassword")),
    protected: false,
  },
  {
    path: pathConfig.registration,
    component: lazy(() => import("pages/Login/Registration")),
    protected: false,
  },
  {
    path: pathConfig.calendar,
    component: lazy(() => import("pages/Calendar")),
    protected: false,
  },
  {
    path: pathConfig.main,
    component: lazy(() => import("pages/Main")),
    protected: false,
  },
  {
    path: pathConfig.profile,
    component: lazy(() => import("pages/Profile")),
    protected: false,
  },
];

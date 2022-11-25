import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import Api from "api";

import { setToken, setError } from "./loginAction";

export const useLoginAction = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sendLoginData = (email, password) => {
    Api.login(email, password)
      .then((res) => {
        dispatch(setToken(res.data.accessToken));
        localStorage.setItem("accessToken", res.data.accessToken);

        navigate("/main", { replace: true });
        dispatch(setError({ isError: false, errorMessage: null }));
      })
      .catch(() =>
        dispatch(
          setError({
            isError: true,
            errorMessage: t("pages.login.statusError"),
          })
        )
      );
  };
  return { sendLoginData };
};

import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import Api from "api";

import { setError } from "./resetPasswordAction";

export const useResetPasswordAction = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const key = useSelector((state) => state.setKey.key);

  const sendNewPassword = (data) => {
    Api.reset(key, data.password, data.password2)
      .then((res) => {
        dispatch(setError({ isError: false, errorMessage: null }));
        navigate("/auth", { replace: true });
      })
      .catch(() =>
        dispatch(
          setError({
            isError: true,
            errorMessage: t("pages.resetPassword.statusError"),
          })
        )
      );
  };
  return { sendNewPassword };
};

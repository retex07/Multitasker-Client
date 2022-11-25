import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import Api from "api";

import { setKeyAction } from "../resetMail/setKeyReducer";
import { setError } from "./resetCodeAction";

export const useResetCodeAction = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const key = useSelector((state) => state.setKey.key);
  const sendCode = (data) => {
    Api.confirm(key, data.code)
      .then((res) => {
        dispatch(setKeyAction(res.data.key));
        dispatch(setError({ isError: false, errorMessage: null }));
        navigate("/resetPassword", { replace: true });
      })
      .catch(() =>
        dispatch(
          setError({
            isError: true,
            errorMessage: t("pages.resetPasswordCode.statusError"),
          })
        )
      );
  };
  return { sendCode };
};

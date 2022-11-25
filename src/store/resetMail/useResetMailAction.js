import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import Api from "api";

import { setError } from "./resetMailAction";
import { setKeyAction } from "./setKeyReducer";

export const useResetMailAction = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sendMail = (data) => {
    Api.send(data.email)
      .then((res) => {
        dispatch(setKeyAction(res.data.key));
        navigate("/resetPasswordCode", { replace: true });
        dispatch(setError({ isError: false, errorMessage: null }));
      })
      .catch(() =>
        dispatch(
          setError({
            isError: true,
            errorMessage: t("pages.resetPasswordMail.statusError"),
          })
        )
      );
  };
  return { sendMail };
};

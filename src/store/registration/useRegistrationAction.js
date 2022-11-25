import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import Api from "api";

import { setToken, setError } from "./registrationAction";

export const useRegistrationAction = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sendRegistrationData = (data) => {
    Api.registration(data.email, data.password, data.password2)
      .then((res) => {
        dispatch(setToken(res.data.accessToken));
        localStorage.setItem("token", res.data.accessToken);
        navigate("/main", { replace: true });
        dispatch(setError({ isError: false, errorMessage: null }));
      })
      .catch((error) => {
        if (error.response.status === 422) {
          dispatch(
            setError({
              isError: true,
              errorMessage: t("pages.registration.statusPassword"),
            })
          );
        }
        if (error.response.status === 400) {
          dispatch(
            setError({
              isError: true,
              errorMessage: t("pages.registration.statusMail"),
            })
          );
        }
      });
  };

  return { sendRegistrationData };
};

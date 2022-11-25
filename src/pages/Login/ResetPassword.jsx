import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import * as yup from "yup";

import Button from "components/Button";
import ArrowIcon from "components/Icons/ArrowIcon";
import LogoIcon from "components/Icons/LogoIcon";
import InputPassword from "components/InputPassword";
import {
  Background,
  Flex,
  Form,
  LoginWrapper,
  SubTitle,
  GoBack,
  GoBackText,
  Img,
  ContainerResetPassword,
  Title,
} from "pages/Login/Styled";
import BackgroundImg from "static/img/BackgroundImg.png";
import { useResetPasswordAction } from "store/resetPassword/useResetPasswordAction";

const ResetPassword = () => {
  const { t } = useTranslation();

  const schema = yup.object().shape({
    password: yup
      .string()
      .required(t("errors.passwordRequired"))
      .min(8, t("errors.minLength"))
      .max(16, t("errors.maxLength")),
    password2: yup
      .string()
      .required(t("errors.passwordRequired"))
      .min(8, t("errors.minLength"))
      .max(16, t("errors.maxLength")),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const { sendNewPassword } = useResetPasswordAction();
  const error = useSelector((state) => state.resetPassword.error);

  const onSubmit = (data) => {
    reset();
    sendNewPassword(data);
  };

  return (
    <LoginWrapper>
      <ContainerResetPassword>
        <Flex>
          <Title>
            <LogoIcon />
            {t("pages.login.title")}
          </Title>
        </Flex>
        <GoBack to="/resetPasswordCode">
          <ArrowIcon />
          <GoBackText>{t("pages.resetPasswordMail.goBack")}</GoBackText>
        </GoBack>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <SubTitle>{t("pages.resetPasswordMail.subtitle")}</SubTitle>
          <InputPassword
            placeholder={t("pages.login.password")}
            register={register("password")}
            error={{
              isError: errors?.password || error.isError,
              errorMessage: errors?.password?.message || error.errorMessage,
            }}
          />
          <InputPassword
            register={register("password2")}
            placeholder={t("pages.login.password")}
            error={{
              isError: errors?.password2 || error.isError,
              errorMessage: errors?.password2?.message || error.errorMessage,
            }}
          />
          <Button type="submit" width={366} kind="main" mt={16}>
            {t("pages.resetPasswordMail.continue")}
          </Button>
        </Form>
      </ContainerResetPassword>
      <Background>
        <Img src={BackgroundImg} alt="" />
      </Background>
    </LoginWrapper>
  );
};

export default ResetPassword;

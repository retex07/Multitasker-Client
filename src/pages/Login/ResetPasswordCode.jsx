import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import * as yup from "yup";

import Button from "components/Button";
import ArrowIcon from "components/Icons/ArrowIcon";
import LogoIcon from "components/Icons/LogoIcon";
import Input from "components/Input";
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
import { useResetCodeAction } from "store/resetCode/useResetCodeAction";

const ResetPasswordCode = () => {
  const { t } = useTranslation();

  const schema = yup.object().shape({
    code: yup.string().required(t("errors.emailRequired")),
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

  const { sendCode } = useResetCodeAction();
  const error = useSelector((state) => state.resetCode.error);

  const onSubmit = (data) => {
    reset();
    sendCode(data);
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
        <GoBack to="/resetPasswordMail">
          <ArrowIcon />
          <GoBackText>{t("pages.resetPasswordMail.goBack")}</GoBackText>
        </GoBack>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <SubTitle>{t("pages.resetPasswordMail.subtitle")}</SubTitle>
          <Input
            placeholder={t("pages.resetPasswordCode.label")}
            register={register("code")}
            error={{
              isError: errors?.code || error.isError,
              errorMessage: errors?.code?.message || error.errorMessage,
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

export default ResetPasswordCode;

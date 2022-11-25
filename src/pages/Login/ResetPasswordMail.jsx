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
  FlexInstruction,
  InstructionText,
  ContainerResetPassword,
  Title,
} from "pages/Login/Styled";
import BackgroundImg from "static/img/BackgroundImg.png";
import { useResetMailAction } from "store/resetMail/useResetMailAction";

const ResetPasswordMail = () => {
  const { t } = useTranslation();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email(t("errors.email"))
      .required(t("errors.emailRequired")),
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

  const { sendMail } = useResetMailAction();
  const error = useSelector((state) => state.resetMail.error);

  const onSubmit = (data) => {
    reset();
    sendMail(data);
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
        <GoBack to="/auth">
          <ArrowIcon />
          <GoBackText>{t("pages.resetPasswordMail.goBack")}</GoBackText>
        </GoBack>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <SubTitle>{t("pages.resetPasswordMail.subtitle")}</SubTitle>

          <Input
            placeholder={t("pages.login.email")}
            register={register("email")}
            error={{
              isError: errors?.email || error.isError,
              errorMessage: errors?.email?.message || error.errorMessage,
            }}
          />
          <Button type="submit" width={366} kind="main" mt={16}>
            {t("pages.resetPasswordMail.continue")}
          </Button>
          <FlexInstruction>
            <InstructionText>
              {t("pages.resetPasswordMail.instruction")}
            </InstructionText>
          </FlexInstruction>
        </Form>
      </ContainerResetPassword>
      <Background>
        <Img src={BackgroundImg} alt="" />
      </Background>
    </LoginWrapper>
  );
};

export default ResetPasswordMail;

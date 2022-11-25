import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import * as yup from "yup";

import Api from "api";
import Button from "components/Button";
import LogoIcon from "components/Icons/LogoIcon";
import Input from "components/Input";
import InputPassword from "components/InputPassword";
import {
  Background,
  Container,
  Flex,
  Form,
  LoginWrapper,
  SubTitle,
  PrivacyLink,
  Img,
  FlexToAuth,
  QuestionText,
  SignIn,
  InstructionText,
  Title,
} from "pages/Login/Styled";
import BackgroundImg from "static/img/BackgroundImg.png";
import { useRegistrationAction } from "store/registration/useRegistrationAction";

const Registration = () => {
  const { t } = useTranslation();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email(t("errors.email"))
      .required(t("errors.emailRequired")),
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

  const error = useSelector((state) => state.registration.error);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const { sendRegistrationData } = useRegistrationAction();

  const onSubmit = async (data) => {
    reset();
    sendRegistrationData(data);
  };

  const PrivacyClick = (event) => {
    event.preventDefault();
    Api.privacyPolicy();
  };

  const TermsOfUse = (event) => {
    event.preventDefault();
    Api.termOfUse();
  };

  return (
    <LoginWrapper>
      <Container>
        <Flex>
          <Title>
            <LogoIcon />
            {t("pages.login.title")}
          </Title>
        </Flex>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <SubTitle>{t("pages.login.subtitle")}</SubTitle>

          <Input
            placeholder={t("pages.login.email")}
            register={register("email")}
            error={{
              isError: errors?.email || error.isError,
              errorMessage: errors?.email?.message || error.errorMessage,
            }}
          />

          <InputPassword
            placeholder={t("pages.login.password")}
            register={register("password")}
            error={{
              isError: errors?.password || error.isError,
              errorMessage: errors?.password?.message || error.errorMessage,
            }}
          />
          <InputPassword
            placeholder={t("pages.login.password")}
            register={register("password2")}
            error={{
              isError: errors?.password2 || error.isError,
              errorMessage: errors?.password2?.message || error.errorMessage,
            }}
          />
          <Button type="submit" width={366} kind="main" mt={24}>
            {t("pages.registration.signUp")}
          </Button>

          <Flex>
            <InstructionText>
              {t("privacyText.1")}
              <PrivacyLink onClick={PrivacyClick}>
                {t("privacyText.2")}
              </PrivacyLink>
              {t("privacyText.3")}
              <PrivacyLink onClick={TermsOfUse}>
                {t("privacyText.4")}
              </PrivacyLink>
              {t("privacyText.5")}
            </InstructionText>
          </Flex>
        </Form>

        <FlexToAuth>
          <QuestionText>{t("pages.registration.question")}</QuestionText>
          <SignIn to="/auth">{t("pages.registration.signIn")}</SignIn>
        </FlexToAuth>
      </Container>

      <Background>
        <Img src={BackgroundImg} alt="" />
      </Background>
    </LoginWrapper>
  );
};

export default Registration;

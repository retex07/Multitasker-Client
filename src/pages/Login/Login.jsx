import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import * as yup from "yup";

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
  ForgotPass,
  Img,
  FlexSignUp,
  QuestionText,
  SignUp,
  Title,
} from "pages/Login/Styled";
import BackgroundImg from "static/img/BackgroundImg.png";
import { useLoginAction } from "store/login/useLoginAction";

const Login = () => {
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

  const { sendLoginData } = useLoginAction();
  const error = useSelector((state) => state.login.error);

  const onSubmit = async ({ email, password }) => {
    reset();
    sendLoginData(email, password);
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

          <ForgotPass to="/resetPasswordMail">
            {t("pages.login.forgotPassword")}
          </ForgotPass>

          <Button type="submit" width={366} kind="main" mt={40}>
            {t("pages.login.comeIn")}
          </Button>
        </Form>
        <FlexSignUp>
          <QuestionText>{t("pages.login.question")}</QuestionText>
          <SignUp to="/registration">{t("pages.login.registration")}</SignUp>
        </FlexSignUp>
      </Container>
      <Background>
        <Img src={BackgroundImg} alt="" />
      </Background>
    </LoginWrapper>
  );
};

export default Login;

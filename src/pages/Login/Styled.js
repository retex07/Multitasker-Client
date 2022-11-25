import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { colors } from "configs/colors";
import { makeTextStyles } from "utils/styles/makeTextStyles";

export const Background = styled.div``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 828px;
  padding: 48px 10px 55px 10px;
  margin: 0 auto;
  @media (max-width: 1440px) {
    margin: 0 auto 0 80px;
  }
`;

export const ContainerResetPassword = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 828px;
  padding: 48px 10px 55px 10px;
  margin: 0 auto;
  @media (max-width: 1440px) {
    margin: 0 auto 0 80px;
  }
`;

export const Flex = styled.div`
  display: flex;
  margin-top: ${({ mt = 0 }) => `${mt}px`};
  flex-direction: row;
  align-items: stretch;
  justify-content: stretch;
`;

export const FlexSignUp = styled(Flex)`
  justify-content: center;
`;

export const FlexToAuth = styled(Flex)`
  justify-content: center;
`;

export const FlexInstruction = styled(Flex)`
  margin-top: 10px;
`;

export const Form = styled.form`
  width: 366px;
`;

export const LoginWrapper = styled.div`
  display: flex;
  max-height: 100vh;
  overflow: hidden;
`;

export const Title = styled.h1`
  color: ${colors.logoColor};

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${makeTextStyles(24, 700)};
  font-style: normal;
  width: 227px;
  margin: 0;
  line-height: 28px;
  text-transform: uppercase;
`;

export const SubTitle = styled.h2`
  color: ${colors.logoColor};
  ${makeTextStyles(28, 500)};
  font-style: normal;
  line-height: 39px;
  margin: 0 0 32px 0;
`;

export const LoginLabel = styled.label`
  color: ${colors.label};
  ${makeTextStyles(16, 400)}
  font-style: normal;
  line-height: 22px;
  margin: 0;
`;

export const QuestionText = styled(LoginLabel)`
  margin: 0 6px 0 0;
`;

export const Privacy = styled.p`
  color: ${colors.label};
  ${makeTextStyles(14, 400)};
  width: 100%;
  font-style: normal;
  line-height: 19px;
`;

export const InstructionText = styled(Privacy)`
  text-align: center;
`;

export const ForgotPass = styled(NavLink)`
  display: flex;
  color: ${colors.logoColor};
  font-style: normal;
  ${makeTextStyles(16, 400)}
  line-height: 22px;
  text-decoration: none;
  margin: -8px 0 0 0;
  justify-content: flex-end;
  &:hover {
    text-decoration: underline;
  }
`;

export const SignUp = styled(ForgotPass)`
  margin: 0;
`;
export const SignIn = styled(ForgotPass)`
  margin: 0;
`;

export const PrivacyLink = styled.a`
  color: ${colors.logoColor};
  font-style: normal;
  ${makeTextStyles(14, 400)}
  line-height: 19px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  &:before {
    content: " ";
  }
  &:after {
    content: " ";
  }
`;

export const ErrorWrap = styled.div`
  align-items: center;
  display: flex;
  margin: 0;
`;

export const Error = styled.p`
  color: ${colors.darkRed};
  ${makeTextStyles(14, 400)};
  display: flex;
  align-items: center;
  margin: 0;
`;

export const Img = styled.img`
  min-height: 100vh;
  width: 1092px;
  @media (max-width: 1440px) {
    width: 814px;
    object-fit: cover;
    overflow: hidden;
  }
`;

export const GoBack = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;
  margin: 50px 0 90px 0;
  text-decoration: none;
  width: 80px;
`;

export const GoBackText = styled.p`
  color: ${colors.label};
  font-style: normal;
  ${makeTextStyles(16, 500)}
  line-height: 18px;
  text-decoration: none;
`;

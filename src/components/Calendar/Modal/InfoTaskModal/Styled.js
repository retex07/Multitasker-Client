import styled from "styled-components";

import { colors } from "configs/colors";
import { makeTextStyles } from "utils/styles/makeTextStyles";


export const ModalContainer = styled.div`
  width: 496px;
  padding: 24px;
`;

export const MainName = styled.div`
  display: inline-flex;
  width: 496px;
  min-height: 34px;

  span {
    text-align: left;
    width: 464px;
    height: 34px;
    color: ${colors.black};
    ${makeTextStyles(24, 500)};
  }

  img {
    display: flex;
    justify-content: right;
    align-items: flex-start;
    float: right;
    cursor: pointer;
    margin-left: 8px;
  }
`;

export const TermsContainer = styled.div`
  display: inline-flex;
  margin-top: 24px;
  width: 496px;
  height: 50px;
`;

export const TermsDate = styled.div`
  width: 162px;
  height: 50px;

  span {
    display: flex;
    width: 145px;
    height: 18px;
    margin-bottom: 8px;
    color: ${colors.coldGray};
    ${makeTextStyles(16, 500)};
  }

  div {
    display: flex;
    width: 162px;
    height: 24px;
    color: ${colors.text};
    ${makeTextStyles(17, 400)};
  }
`;

export const Important = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 133px;
  height: 24px;
  margin-left: 201px;
  margin-top: 26px;

  span {
    color: ${colors.coldGray};
    ${makeTextStyles(16, 500)};
  }

`;

export const Description = styled.div`
  width: 496px;
  min-height: 26px;
  margin-top: 24px;

  span {
    display: flex;
    width: 77px;
    height: 18px;
    ${makeTextStyles(16, 500)};
    color: ${colors.coldGray};
  }

  div {
    display: flex;
    width: 496px;
    margin-top: 8px;
    min-height: 16px;
    color: ${colors.text};
    ${makeTextStyles(17, 400)};
  }
`;

export const Completed = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 48px;
  border: 2px solid ${colors.logoColor};
  box-sizing: border-box;
  box-shadow: 0 7px 12px rgba(4, 3, 31, 0.1);
  border-radius: 5px;
  margin-top: 24px;
  background: ${colors.logoColor};

  color: ${colors.white};
  ${makeTextStyles(16, 500)};
`;

export const SubTasks = styled.div`
  width: 296px;
  min-height: 26px;
  margin-top: 24px;

  span {
    display: inline-flex;
    width: 85px;
    height: 18px;
    ${makeTextStyles(16, 500)};
    color: ${colors.coldGray};
  }
`;

export const CounterText = styled.div`
  color: ${colors.categoryBlue};
  width: 10px;
  height: 18px;
  margin-left: 8px;
`;

export const InfoContainer = styled.div`
  width: 496px;
  height: 208px;
  margin-top: 24px;
`;

export const People = styled.div`
  width: 496px;
  height: 132px;
`;

export const Executor = styled.div`
  width: 496px;
  height: 58px;

  span {
    display: flex;
    width: 103px;
    height: 18px;
    ${makeTextStyles(16, 500)};
    color: ${colors.coldGray};
    margin-bottom: 8px;
  }
;

  div {
    display: flex;
    justify-content: left;
    align-items: center;
    width: 496px;
    height: 32px;

    img {
      width: 32px;
      height: 32px;
      margin-right: 12px;
      border-radius: 180px;
    }
  }
`;

export const Author = styled.div`
  width: 496px;
  height: 58px;
  margin-top: 16px;

  span {
    display: flex;
    width: 47px;
    height: 18px;
    ${makeTextStyles(16, 500)};
    color: ${colors.coldGray};
    margin-bottom: 8px;
  }

  div {
    display: flex;
    justify-content: left;
    align-items: center;
    width: 496px;
    height: 32px;

    img {
      width: 32px;
      height: 32px;
      margin-right: 12px;
      border-radius: 180px;
    }
  }
`;

export const InfoData = styled.div`
  width: 496px;
  height: 52px;
  margin-top: 16px;

  span {
    display: flex;
    height: 22px;
    ${makeTextStyles(16, 400)};
    color: ${colors.coldGray};
    margin-top: 8px;
  }
`;

export const ProjectNameContainer = styled.div`
  display: flex;

  div {
    padding: 4px 8px;
    background: ${colors.categoryBlue};
    text-align: center;
    border-radius: 4px;
    color: ${colors.white};
    ${makeTextStyles(16, 400)};
    margin-top: 24px;
  }
`;
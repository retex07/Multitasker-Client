import styled from "styled-components";

import { colors } from "configs/colors";
import { makeTextStyles } from "utils/styles/makeTextStyles";

export const GeneralContainer = styled.div`
  padding: 24px;
  overflow: auto;
`;

export const TaskContainer = styled.div`
  padding: 16px;
  width: 464px;
  border: 1px solid ${colors.cardsStroke};
  border-radius: 5px;
  margin-top: 16px;
  cursor: pointer;
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


export const TaskCount = styled.div`
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

export const TitleTask = styled.div`
  height: 24px;
  ${makeTextStyles(20, 500)};
  color: ${colors.black};
`;

export const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  
  div {
    padding: 4px 8px;
    background: ${colors.categoryBlue};
    text-align: center;
    border-radius: 4px;
    color: ${colors.white};
    ${makeTextStyles(16, 400)};
    margin-top: 12px;
  }
  
  img {
    margin-right: 0;
    margin-left: auto;
  }
`

export const PerformerContainer = styled.div`
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
`
import styled from "styled-components";

import { colors } from "configs/colors";
import { makeTextStyles } from "utils/styles/makeTextStyles";


export const CalendarContainer = styled.div`
  padding: 40px;
`;

export const NavBlock = styled.div`
  display: flex;
`;

export const DataBlock = styled.div`
  display: flex;
  align-items: center;
  width: 40px + 40px + 147px + 32px;
  height: 60px;
  margin-right: 16px;

  img {
    cursor: pointer;
  }

  div {
    width: 207px;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: ${colors.logoColor};
    ${makeTextStyles(28, 500)};
  }
`;

export const ColorsProjects = styled.div`
  display: flex;
`;

export const CreateTask = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 238px;
  float: right;
  height: 48px;
  color: ${colors.logoColor};
  ${makeTextStyles(16, 500)};
  border: 2px solid ${colors.logoColor};
  drop-shadow(0px 7px 12px rgba(4, 3, 31, 0.1));
  border-radius: 5px;
  margin-left: auto;
  margin-right: 0;
`;

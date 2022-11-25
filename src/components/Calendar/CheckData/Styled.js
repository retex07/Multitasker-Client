import styled from "styled-components";

import { colors } from "configs/colors";
import { makeTextStyles } from "utils/styles/makeTextStyles";

export const TaskContainer = styled.div`
  display: flex;
  margin-top: 8px;
  cursor: pointer;
`;

export const Task = styled.div`
  border-radius: 5px;
  background: ${props => props.color};
  padding: 8px;
  width: 100%;
  min-height: 100px;

  div {
    display: flex;
    overflow: hidden;
    max-height: 40px;
    width: 100%;
    margin-top: 8px;
    margin-bottom: 8px;
    color: ${colors.cardsSecondaryText};
    ${makeTextStyles(14, 400)};
  }

  img {
    height: 22px;
  }
`;

export const TextTask = styled.span`
  color: ${props => props.color};
  ${makeTextStyles(16, 500)};
`;

export const Clear = styled.div`
  display: flex;

  height: 198px;
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  
  button {
    margin-right: 0;
    margin-left: auto;
    border: 0;
    background: ${colors.white};
    cursor: pointer;
    ${makeTextStyles(14,400)};
    color: ${colors.coldGray};
  }
  
  button:hover {
    color: ${colors.categoryBlue};
  }
`
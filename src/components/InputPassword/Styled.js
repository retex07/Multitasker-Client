import styled from "styled-components";

import { colors } from "configs/colors";
import { makeTextStyles } from "utils/styles/makeTextStyles";

export const InputWrapper = styled.div`
  position: relative;
  display: flex;

  border: 1px solid ${colors.cardsStroke};
  box-sizing: border-box;
  border-radius: 5px;

  width: 366px;
  align-items: center;

  > svg {
    position: absolute;
    cursor: pointer;
  }

  &:hover {
    border: 1px solid ${colors.acent};
    box-shadow: 0 2px 7px rgba(9, 6, 57, 0.07);
  }
`;

export const ShowButton = styled.button`
  position: absolute;
  right: 10px;
  border: none;
  box-shadow: none;
  cursor: pointer;
  outline: none;
  background: none;
`;

export const MainInputPassword = styled.input`
  display: flex;
  align-items: center;
  padding: 0 16px;
  background: ${colors.white};

  box-sizing: border-box;
  border-radius: 5px;
  border: none;

  height: 56px;
  width: 100%;

  ${makeTextStyles(16, 500)};

  &:focus {
    outline: none;
    border: 1px solid ${colors.acent};
    box-shadow: 0 9px 20px rgba(5, 0, 88, 0.08);
  }

  &:disabled {
    border: 1px solid ${colors.cardsStroke};
    cursor: default;
    color: rgba(13, 13, 19, 0.6);
    box-shadow: none;
  }
`;

import styled from "styled-components";

import { makeButtonStyles } from "utils/styles/makeButtonStyles";
import { makeTextStyles } from "utils/styles/makeTextStyles";

export const MainButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0 7px 12px rgba(4, 3, 31, 0.1);

  height: 48px;
  width: ${({ width }) => width}px;
  margin-top: ${({ mt = 0 }) => `${mt}px`};

  ${({ kind }) => makeButtonStyles(kind)};

  ${makeTextStyles(16, 500)};
`;

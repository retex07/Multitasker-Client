import styled from "styled-components";

import { colors } from "configs/colors";
import { makeTextStyles } from "utils/styles/makeTextStyles";

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${colors.logoColor};
  margin-right: 24px;
  ${makeTextStyles(16, 400)};
`

export const DivColor = styled.div`
  background: ${props => props.color};
  min-width: 16px;
  min-height: 16px;
  margin-right: 8px;
  border-radius: 2px;
`
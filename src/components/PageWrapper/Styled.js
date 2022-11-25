import styled from "styled-components";

import { colors } from "configs/colors";

export const Wrapper = styled.div`
  min-width: 100vw - 320px;
  min-height: 100vh;
  background-size: cover;
  padding-left: 320px;
  background: ${colors.cardsBackground};
`;

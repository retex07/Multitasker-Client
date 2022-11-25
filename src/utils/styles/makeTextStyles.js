import { css } from "styled-components";

export const makeTextStyles = (size, weight, fontFamily = "Ubuntu") => css`
  font-size: ${size}px;
  font-weight: ${weight};
  font-family: ${fontFamily};
  text-decoration: none;
`;

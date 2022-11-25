import { css } from "styled-components";

import { colors } from "configs/colors";

export const makeButtonStyles = (kind) => {
  switch (kind) {
    case "second":
      return css`
        color: ${colors.logoColor};
        border: 2px solid ${colors.logoColor};
        background: ${colors.white};

        &:hover {
          box-shadow: 0 4px 15px rgba(50, 48, 82, 0.3);
          border: 3px solid ${colors.logoColor};
        }

        &:active {
          box-shadow: inset 0px -4px 9px rgba(0, 0, 0, 0.1),
            inset 4px 4px 10px rgba(0, 0, 0, 0.1);
        }
      `;
    case "cancel":
      return css`
        border: 1px solid ${colors.lightGrey};
        color: ${colors.lightGrey};
        background: ${colors.white};

        &:hover {
          border: 1px solid ${colors.coldGray};
        }

        &:active {
          border: 1px solid ${colors.logoColor};
          box-shadow: inset 0px -4px 9px rgba(0, 0, 0, 0.1),
            inset 4px 4px 10px rgba(0, 0, 0, 0.1);
        }
      `;
    case "main":
      return css`
        color: ${colors.white};
        background: ${colors.logoColor};
        border: 2px solid ${colors.logoColor};

        &:hover {
          background: ${colors.buttonHover};
          border: 2px solid ${colors.buttonHover};
          box-shadow: 0 9px 15px rgba(5, 0, 88, 0.2);
        }

        &:active {
          background: ${colors.buttonActive};
        }

        &:disabled {
          cursor: default;
          background: rgba(13, 13, 19, 0.6);
          border: none;
          box-shadow: none;
        }
      `;
    default:
      return "";
  }
};

import styled from "styled-components";

import { colors } from "configs/colors";
import { makeTextStyles } from "utils/styles/makeTextStyles";

export const NameWeekDay = styled.div`
  padding: 8px;
`

export const Grid = styled.div`
  margin-top: 44px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 54px repeat(5, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;

  #grid {
    padding: 8px;
    ${makeTextStyles(16, 400)};
    color: ${colors.coldGray};
    box-shadow: 0 2px 7px rgba(9, 6, 57, 0.07);
    border-radius: 5px;
    background: ${colors.white};
  }

  #gridToday {
    padding: 8px;
    ${makeTextStyles(16, 400)};
    color: ${colors.coldGray};
    background: ${colors.lightAcent};
    border: 2px solid rgba(0, 122, 255, 0.5);
    box-shadow: 0 2px 7px rgba(9, 6, 57, 0.07);
    border-radius: 5px;
  }
`
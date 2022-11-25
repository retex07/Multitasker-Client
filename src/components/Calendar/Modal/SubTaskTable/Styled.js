import styled from "styled-components";

import { colors } from "configs/colors";
import { makeTextStyles } from "utils/styles/makeTextStyles";

export const UrgentContainer = styled.div`
  width: 60px;
  height: 24px;
`;

export const Subs = styled.div`
  width: 464px;
  min-height: 60px;
  padding: 16px;
  margin-top: 8px;

  background: ${colors.white};
  border: 1px solid ${colors.cardsStroke};
  border-radius: 5px;

  div {
    display: flex;
    justify-content: left;
    align-items: center;
  }
`;

export const AvatarUser = styled.div`
  img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    border-radius: 180px;
  }
`;

export const NameText = styled.div`
  display: flex;
  width: 364px;
  height: 20px;
`;

export const TextTitle = styled.div`
  display: flex;
  color: ${colors.black};
  ${makeTextStyles(20, 500)};
  width: 301px;
  height: 24px;
  margin-bottom: 12px;
`;

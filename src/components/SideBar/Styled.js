import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { colors } from "configs/colors";
import { makeTextStyles } from "utils/styles/makeTextStyles";

export const SideBarMenu = styled.div`
  position: fixed;

  height: 100vh;
  width: 320px;
  top: 0;
  left: 0;

  background: ${colors.white};
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 100px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 170px;
  height: 44px;

  padding-left: 45px;
  padding-top: 40px;

  svg {
    width: 36px;
    height: 36px;
  }

  ${makeTextStyles(18, 500)};
`;

export const MenuItems = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-left: 24px;
  margin-top: 16px;

  width: 248px;
  height: 64px;

  color: ${colors.coldGray};

  ${makeTextStyles(16, 500)};

  svg {
    margin-right: 20px;
  }

  svg path {
    fill: ${colors.coldGray};
  }

  &:hover {
    color: ${colors.cardsSecondaryText};
    svg path {
      fill: ${colors.cardsSecondaryText};
    }
  }

  &:active {
    background: #f8f8f8;
    color: ${colors.logoColor};
  }

  &.active {
    background: ${colors.lightAcent};
    color: ${colors.acent};

    svg path {
      fill: ${colors.acent};
    }
  }
`;

export const MenuExit = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-left: 24px;
  margin-top: 250px;
  width: 248px;
  height: 64px;
  opacity: 0.6;

  color: ${colors.darkRed};
  background: ${colors.lightRed};

  ${makeTextStyles(16, 500)};

  svg {
    margin-right: 20px;
  }

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
`;

import Calendar from "components/Icons/CalendarIcon/CalendarIcon";
import Exit from "components/Icons/ExitIcon/ExitIcon";
import User from "components/Icons/UserIcon/UserIcon";
import React from "react";
import { useTranslation } from "react-i18next";

import CompletedTaskIcon from "components/Icons/CompletedTaskIocn";
import HomeIcon from "components/Icons/HomeIcon";
import LogoIcon from "components/Icons/LogoIcon";
import {
  Logo,
  Menu,
  MenuExit,
  MenuItems,
  SideBarMenu,
} from "components/SideBar/Styled";

const SideBar = () => {
  const { t } = useTranslation();
  return (
    <SideBarMenu>
      <Logo>
        <LogoIcon />
        {t("components.sideBar.logo")}
      </Logo>
      <Menu>
        <MenuItems to="/main">
          <HomeIcon />
          {t("components.sideBar.main")}
        </MenuItems>
        <MenuItems to="/appointed">
          <CompletedTaskIcon />
          {t("components.sideBar.completedTask")}
        </MenuItems>
        <MenuItems to="/calendar">
          <Calendar />
          {t("components.sideBar.calendar")}
        </MenuItems>
        <MenuItems to="/profile">
          <User />
          {t("components.sideBar.profile")}
        </MenuItems>
        <MenuExit to="/auth">
          <Exit />
          {t("components.sideBar.exit")}
        </MenuExit>
      </Menu>
    </SideBarMenu>
  );
};

export default SideBar;

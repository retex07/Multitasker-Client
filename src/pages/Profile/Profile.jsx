import React from "react";
import { useTranslation } from "react-i18next";

import Button from "components/Button";
import Input from "components/Input";
import PageWrapper from "components/PageWrapper";

const Profile = () => {
  const { t } = useTranslation();
  return (
    <PageWrapper>
      <div>{t("pages.profile.title")}</div>
      <div>
        <div>{t("pages.profile.avatar")}</div>
        <Button>{t("pages.profile.changeImage")}</Button>
      </div>
      <div>
        <form>
          <label>{t("pages.profile.name")}</label>
          <Input />
          <label>{t("pages.profile.email")}</label>
          <Input />
          <label>{t("pages.profile.password")}</label>
          <Input />
        </form>
      </div>
    </PageWrapper>
  );
};

export default Profile;

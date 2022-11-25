import { useTranslation } from "react-i18next";


export const IsCase = ({count}) => {
  const { t } = useTranslation();

  if (count === 1) return <>{t("pages.calendar.tasking.taskOne")}</>;
  else if (count > 1 && count <= 4) return <>{t("pages.calendar.tasking.taskTwo")}</>;
  else return <>{t("pages.calendar.tasking.taskThree")}</>;
}
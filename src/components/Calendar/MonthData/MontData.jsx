import { useTranslation } from "react-i18next";

const MonthData = ({ data }) => {
  const { t } = useTranslation();

  switch (data) {
    case 0:
      return <>{t("pages.calendar.months.january")}</>
    case 1:
      return <>{t("pages.calendar.months.february")}</>
    case 2:
      return <>{t("pages.calendar.months.march")}</>
    case 3:
      return <>{t("pages.calendar.months.april")}</>
    case 4:
      return <>{t("pages.calendar.months.may")}</>
    case 5:
      return <>{t("pages.calendar.months.june")}</>
    case 6:
      return <>{t("pages.calendar.months.july")}</>
    case 7:
      return <>{t("pages.calendar.months.august")}</>
    case 8:
      return <>{t("pages.calendar.months.september")}</>
    case 9:
      return <>{t("pages.calendar.months.october")}</>
    case 10:
      return <>{t("pages.calendar.months.november")}</>
    case 11:
      return <>{t("pages.calendar.months.december")}</>

    default:
      return null;
  }
};

export default MonthData;

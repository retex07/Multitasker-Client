import { useTranslation } from "react-i18next";

const MonthDataTwo = ({ data }) => {
  const { t } = useTranslation();

  switch (data) {
    case 0:
      return <>{t("pages.calendar.monthsTwo.january")}</>
    case 1:
      return <>{t("pages.calendar.monthsTwo.february")}</>
    case 2:
      return <>{t("pages.calendar.monthsTwo.march")}</>
    case 3:
      return <>{t("pages.calendar.monthsTwo.april")}</>
    case 4:
      return <>{t("pages.calendar.monthsTwo.may")}</>
    case 5:
      return <>{t("pages.calendar.monthsTwo.june")}</>
    case 6:
      return <>{t("pages.calendar.monthsTwo.july")}</>
    case 7:
      return <>{t("pages.calendar.monthsTwo.august")}</>
    case 8:
      return <>{t("pages.calendar.monthsTwo.september")}</>
    case 9:
      return <>{t("pages.calendar.monthsTwo.october")}</>
    case 10:
      return <>{t("pages.calendar.monthsTwo.november")}</>
    case 11:
      return <>{t("pages.calendar.monthsTwo.december")}</>

    default:
      return null;
  }
};

export default MonthDataTwo;

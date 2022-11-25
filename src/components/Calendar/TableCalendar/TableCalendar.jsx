import React from "react";
import { useTranslation } from "react-i18next";

import GetDataTr from "../GetDataTr";
import { Grid, NameWeekDay } from "./Styled";


const TableCalendar = ({
                         month,
                         year,
                         start,
                         tasksList,
                         today,
                         endDay,
                         endDayBack
                       }) => {

  const { t } = useTranslation();
  
  const numbers = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34
  ];
  return (
    <Grid>
      <div id="grid">
        <NameWeekDay>{t("pages.calendar.days.monday")}</NameWeekDay>
      </div>
      <div id="grid">
        <NameWeekDay>{t("pages.calendar.days.tuesday")}</NameWeekDay>
      </div>
      <div id="grid">
        <NameWeekDay>{t("pages.calendar.days.wednesday")}</NameWeekDay>
      </div>
      <div id="grid">
        <NameWeekDay>{t("pages.calendar.days.thursday")}</NameWeekDay>
      </div>
      <div id="grid">
        <NameWeekDay>{t("pages.calendar.days.friday")}</NameWeekDay>
      </div>
      <div id="grid">
        <NameWeekDay>{t("pages.calendar.days.saturday")}</NameWeekDay>
      </div>
      <div id="grid">
        <NameWeekDay>{t("pages.calendar.days.sunday")}</NameWeekDay>
      </div>

      {numbers.map((number) => {
        return (
          <GetDataTr key={number} number={number} start={start} back={endDayBack} end={endDay} day={today.getDate()}
                     month={month} year={year} tasksList={tasksList}/>
        );
      })}
    </Grid>
  );
};

export default TableCalendar;
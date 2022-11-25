import React from "react";
import { useTranslation } from "react-i18next";

import MayWait from "static/img/MayWait.svg";
import NotUrgently from "static/img/NotUrgent.svg";
import Urgently from "static/img/Urgent.svg";
import VeryUrgently from "static/img/VeryUrgent.svg";


const ComplicatedTask = ({importance}) => {
  const { t } = useTranslation();

  if (importance === 3){
    return (
      <>
        <img src={VeryUrgently} alt="VeryUrgently"/>
        <span>{t("pages.appoint.task.veryUrgently")}</span>
      </>
    )
  }

  if (importance === 2){
    return (
      <>
        <img src={Urgently} alt="Urgently"/>
        <span>{t("pages.appoint.task.urgently")}</span>
      </>
    )
  }

  if (importance === 1){
    return (
      <>
        <img src={MayWait} alt="MayWait"/>
        <span>{t("pages.appoint.task.mayWait")}</span>
      </>
    )
  }

  if (importance === 0){
    return (
      <>
        <img src={NotUrgently} alt="NotUrgently"/>
        <span>{t("pages.appoint.task.notUrgently")}</span>
      </>
    )
  }

  return null;
}

export default ComplicatedTask;

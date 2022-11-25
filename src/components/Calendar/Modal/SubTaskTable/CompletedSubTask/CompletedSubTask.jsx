import React from "react";

import MayWait from "static/img/MayWait.svg";
import NotUrgently from "static/img/NotUrgent.svg";
import Urgently from "static/img/Urgent.svg";
import VeryUrgently from "static/img/VeryUrgent.svg";


const ComplicatedSubTask = ({ importance }) => {
  if (importance === 3) {
    return (
      <img src={VeryUrgently} alt="VeryUrgently" />
    );
  }

  if (importance === 2) {
    return (
      <img src={Urgently} alt="Urgently" />
    );
  }

  if (importance === 1) {
    return (
      <img src={MayWait} alt="MayWait" />
    );
  }

  if (importance === 0) {
    return (
      <img src={NotUrgently} alt="NotUrgently" />
    );
  }

  return null;
};

export default ComplicatedSubTask;

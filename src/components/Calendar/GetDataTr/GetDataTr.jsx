import React  from "react";


import CheckData from "../CheckData";
import { Opacity } from "./Styled";


const GetDataTr = ({
                     day,
                     month,
                     year,
                     number,
                     start,
                     end,
                     back,
                     tasksList
                   }) => {

  const today = new Date();
  let num = number - start;
  let tempMonth = month;

  if (num < 0) {
    num += back;
    tempMonth -= 1;

    return (
      <div id="grid">
        <Opacity>
          <CheckData day={num} month={tempMonth} tasksList={tasksList} year={year} num={num} />
        </Opacity>
      </div>
    );
  }

  else if (num >= end) {
    num -= end;
    tempMonth += 1;

    return (
      <div id="grid">
        <Opacity>
          <CheckData day={num} month={tempMonth} tasksList={tasksList} year={year} num={num} />
        </Opacity>
      </div>
    );
  }

  return (
    <div id={num + 1 === day && today.getMonth() === month && today.getFullYear() === year ? "gridToday" : "grid"}>
      <CheckData day={num} month={tempMonth} tasksList={tasksList} year={year} num={num} />
    </div>
  );
};

export default GetDataTr;
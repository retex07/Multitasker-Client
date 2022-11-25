import React, { useState } from "react";

import Example from "static/img/NotUrgent.svg";

import GeneralModal from "../Modal/GeneralTaskModal";
import InfoTaskModal from "../Modal/InfoTaskModal";
import { checkColor } from "../checkColor";
import { IsCase } from "./IsCase";
import { Clear, Task, TaskContainer, TextTask, TitleContainer } from "./Styled";


const CheckData = ({ day, month, tasksList, year, num }) => {
  const [isOpen, setOpen] = useState(false);
  const [isShow, setShow] = useState(false);
  const [idTask, setIdTask] = useState(null);

  let count = 0;
  let tasksInDay = [];

  // eslint-disable-next-line array-callback-return
  tasksList.map((task) => {
    const temp = new Date(task.deadline);
    if (temp.getMonth() === month && temp.getDate() === day && temp.getFullYear() === year) {
      count++;
      tasksInDay.push(task);
    }
  });

  const onClose = () => {
    setOpen(false);
  };
  const onCloseTwo = () => {
    setShow(false);
  };

  return (
    <>
      <TitleContainer>
        {num + 1} {count > 1 ? <button onClick={() => setShow(true)}>Еще {count-1} <IsCase count={count-1} /> </button> : null}
      </TitleContainer>
      <TaskContainer onClick={() => {
        setOpen(true);

      }}>
        {tasksInDay["0"] !== undefined ?
          <Task color={checkColor(tasksInDay["0"].color)} onClick={() => {
            setOpen(true);
            setIdTask(tasksInDay["0"].id);
          }}>
            <TextTask color={tasksInDay["0"].color}>{tasksInDay["0"].title}</TextTask>
            <div>{tasksInDay["0"].description}</div>
            <img src={Example} alt="Example" />
          </Task>
          :
          <Task>
            <Clear />
          </Task>
        }
      </TaskContainer>

      {isShow ? <GeneralModal onCloseTwo={onCloseTwo} tasksInDay={tasksInDay} year={year} day={num} month={month} count={tasksInDay.length} /> : null}
      {isOpen ? <InfoTaskModal onClose={onClose} id={idTask} /> : null}
    </>
  );
};

export default CheckData;
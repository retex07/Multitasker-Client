import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Default from "static/img/DefaultAva.svg";
import Exit from "static/img/Exit.svg";

import Modal from "../../../Modal";
import MonthDataTwo from "../../MonthDataTwo";
import InfoTaskModal from "../InfoTaskModal";
import CompletedTaskTwo from "./CompletedTaskTwo";
import {
  GeneralContainer,
  TaskContainer,
  MainName,
  CounterText,
  TaskCount,
  TitleTask,
  ProjectContainer, PerformerContainer
} from "./Styled";


const GeneralModal = ({ onCloseTwo, tasksInDay, day, month, year, count }) => {
  const { t } = useTranslation();
  const [isShow, setShow] = useState(false);
  const [idTask, setIdTask] = useState(null);

  const onClose = () => {
    setShow(false);
  }

  return (
    <Modal isOpen={true}>
      <GeneralContainer>
        <MainName>
          <span>{day} <MonthDataTwo data={month}/> {year}</span>
          <img id="one" src={Exit} alt="Exit" onClick={onCloseTwo} />
        </MainName>

        <TaskCount>
          <span>{t("pages.calendar.tasks")} <CounterText>{count}</CounterText></span>
        </TaskCount>

        {tasksInDay.map((task) => {
          return (
            <TaskContainer key={task.id} onClick={() => {
              setIdTask(task.id);
              setShow(true);
            }}>
              <TitleTask>{task.title}</TitleTask>

              <ProjectContainer>
                <div>{task.project.title}</div>
                <CompletedTaskTwo importance={task.importance}/>
              </ProjectContainer>

              <PerformerContainer>
                <div>
                  {task.performer.avatar == null ?
                    <img src={Default} alt="ExampleAva" />
                    :
                    <img alt="avatar" src={`http://192.168.100.30:8090/${task.performer.avatar.path}`}/>
                  }
                  <div>{task.performer.name == null ? task.performer.email : task.performer.name}</div>
                </div>
              </PerformerContainer>
            </TaskContainer>
          )
        })}

      </GeneralContainer>
      {isShow ? <InfoTaskModal onClose={onClose} id={idTask} /> : null}
    </Modal>
  )

}

export default GeneralModal;

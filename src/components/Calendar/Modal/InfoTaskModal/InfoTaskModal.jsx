import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import Default from "static/img/DefaultAva.svg";
import Exit from "static/img/Exit.svg";
import { useCalendarAction } from "store/calendar/useCalendarAction";


import Modal from "../../../Modal";
import ComplicatedTask from "../../CompletedTask";
import MonthData from "../../MonthData";
import MonthDataTwo from "../../MonthDataTwo";
import SubTaskTable from "../SubTaskTable";
import {
  Author,
  CounterText,
  Description, Executor,
  Important, InfoContainer, InfoData,
  MainName,
  ModalContainer, People, ProjectNameContainer,
  SubTasks,
  TermsContainer,
  TermsDate
} from "./Styled";

const InfoTaskModal = ({onClose, id}) => {
  const { t } = useTranslation();
  const { getTaskData } = useCalendarAction();
  const { getSubTasksData } = useCalendarAction();
  
  useEffect(() => {
    getTaskData(id);
    getSubTasksData(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const task = useSelector((state) => state.calendar.taskInfo);
  const SubTaskList = useSelector((state) => state.calendar.subTasks);
  if (task === null || SubTaskList === null) return null;

  const count = SubTaskList.length;
  const dataDeadline = new Date(task.deadline);
  const dataCreated = new Date(task.createdAt);
  const dataUpdate = new Date(task.updatedAt);

  return (
    <Modal isOpen={true}>
      <ModalContainer>
        <MainName>
          <span>{task.title}</span>
          <img id="one" src={Exit} alt="Exit" onClick={onClose} />
        </MainName>

        <ProjectNameContainer>
          <div>{task.project.title}</div>
        </ProjectNameContainer>

        <TermsContainer>
          <TermsDate>
            <span>{t("pages.appoint.task.deadline")}</span>
            <div>{dataDeadline.getDate()} <MonthDataTwo data={dataDeadline.getMonth()} /> {dataDeadline.getFullYear()}
            </div>
          </TermsDate>
          <Important>
            <ComplicatedTask importance={task.importance} />
          </Important>
        </TermsContainer>

        <Description>
          <span>{t("pages.appoint.task.description")}</span>
          <div>{task.description}</div>
        </Description>

        <SubTasks>
          <span>{t("pages.appoint.task.subTasks")} <CounterText>{count}</CounterText></span>
          <div>
            <SubTaskTable SubTaskList={SubTaskList} />
          </div>
        </SubTasks>

        <InfoContainer>
          <People>
            <Executor>
              <span>{t("pages.appoint.task.performer")}</span>
              <div>
                {task.performer.avatar == null ?
                  <img src={Default} alt="ExampleAva" />
                  :
                  <img alt="avatar" src={`http://192.168.100.30:8090/${task.performer.avatar.path}`}/>
                }
                <div>{task.performer.name == null ? task.performer.email : task.performer.name}</div>
              </div>
            </Executor>

            <Author>
              <span>{t("pages.appoint.task.author")}</span>
              <div>
                {task.author.avatar == null ?
                  <img src={Default} alt="ExampleAva" />
                  :
                  <img alt="avatar" src={`http://192.168.100.30:8090/${task.author.avatar.path}`}/>
                }
                <div>{task.author.name == null ? task.author.email : task.author.name}</div>
              </div>
            </Author>
          </People>

          <InfoData>
              <span>
                {t("pages.appoint.task.created")} {dataCreated.getDate()} <MonthData
                data={dataCreated.getMonth()} /> {dataCreated.getFullYear()}, {dataCreated.getHours()}:{dataCreated.getMinutes()}
              </span>
            <span>
                {t("pages.appoint.task.updated")} {task.updatedAt === null ?
              null
              :
              <>{dataUpdate.getDate()} <MonthData
                data={dataUpdate.getMonth()} /> {dataUpdate.getFullYear()}, {dataUpdate.getHours()}:{dataUpdate.getMinutes()}</>}
              </span>
          </InfoData>
        </InfoContainer>

      </ModalContainer>
    </Modal>
  )
}

export default InfoTaskModal;
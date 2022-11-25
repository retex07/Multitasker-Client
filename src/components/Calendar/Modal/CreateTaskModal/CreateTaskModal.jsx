import React, { useState } from "react";
import Calendar from 'react-calendar';
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { colors } from "configs/colors";
import Calendaring from "static/img/Calendar.svg";
import CheckComplete from "static/img/CheckComplete.svg";
import defaultAva from "static/img/DefaultAva.svg";
import Down from "static/img/Down.svg";
import Exit from "static/img/Exit.svg";
import MayWait from "static/img/MayWait.svg";
import NotUrgently from "static/img/NotUrgent.svg";
import Up from "static/img/Up.svg";
import Urgently from "static/img/Urgent.svg";
import VeryUrgently from "static/img/VeryUrgent.svg";
import { useCalendarAction } from "store/calendar/useCalendarAction";

import Input from "../../../Input";
import Modal from "../../../Modal";
import 'react-calendar/dist/Calendar.css';
import {
  AuthorAndDeadline,
  BlockInput,
  ButtonContainer,
  CategoryList,
  CategoryOne,
  ColorCategory,
  CreateContainer,
  Deadline,
  DivContentTitle,
  DivInput,
  Form,
  MainName,
  MiniCalendar,
  ProjectList,
  ProjectOne,
  TextBlock,
  UrgentBlock,
  UrgentlyContainer,
  UrgentText,
  UserList,
  UserOne
} from "./Styled";

const CreateTaskModal = ({ onClose, categoryList, userList}) => {
  const { t } = useTranslation();
  const [valueCalendar, onChangeCalendar] = useState(new Date());

  const [isCategory, setCategory] = useState(false);
  const [isProject, setProject] = useState(false);
  const [isPerformer, setPerformer] = useState(false);
  const [isCalendar, setCalendar] = useState(false);
  const [titleCategory, setTitleCategory] = useState(null);
  const [titleProject, setTitleProject] = useState(null);
  const [isIdPerformer, setIdPerformer] = useState(null);
  const [emailPerformer, setEmailPerformer] = useState(null);
  const [isColor, setColor] = useState(null);

  const [isUrgently, setUrgently] = useState(3);
  const [idProject, setIdProject] = useState(null);
  const { register, handleSubmit } = useForm();
  const { getProjectListData } = useCalendarAction();
  const { createTaskData } = useCalendarAction();

  const onSubmit = (data) => {
    if (idProject != null && data.nameTask !== undefined && isIdPerformer !== null && isColor !== null) {
      createTaskData(idProject, data.nameTask, isIdPerformer, valueCalendar, isUrgently, data.description, isColor);
    }
    else {
      alert(t("pages.calendar.warningPole"));
    }
  };

  const getProjects = (id) => {
    getProjectListData(id);
  };

  const ProjectCase = (count) => {
    if (count === 0 || count >= 5) return <div>{count} проектов</div>;
    else if (count === 1) return <div>{count} проект</div>;
    else return <div>{count} проекта</div>;
  }

  const projects = useSelector((state) => state.calendar.projectList);

  return (
    <Modal isOpen={true}>
      <CreateContainer>
        <MainName>
          <span>Создать задачу</span>
          <img id="one" src={Exit} alt="Exit" onClick={onClose} />
        </MainName>

        <BlockInput>
          <span>{t("pages.calendar.category")}</span>
          <DivInput>
            <span>{titleCategory}</span>
            {isCategory ?
              <>
                <img src={Up} alt="Up" onClick={() => setCategory(false)} />
                <CategoryList>
                  {categoryList.map((category) => {
                    return (
                      <CategoryOne key={category.id} onClick={() => {
                        getProjects(category.id);
                        setTitleCategory(category.title);
                        setTitleProject(null);
                        setIdProject(null);
                        setCategory(false);
                        setCalendar(false);
                        setColor(category.color);
                      }}>
                        <TextBlock>
                          <span>{category.title}</span>
                          {ProjectCase(category.projectsCount)}
                        </TextBlock>
                        <ColorCategory color={category.color} />
                      </CategoryOne>
                    );
                  })}
                </CategoryList>
              </>
              :
              <img src={Down} alt="Down" onClick={() => {
                setProject(false);
                setCategory(true);
                setCalendar(false);
              }} />}
          </DivInput>
        </BlockInput>

        <BlockInput>
          <span>Проект</span>
          <DivInput>
            <span>{titleProject}</span>
            {isProject ?
              <>
                <img src={Up} alt="Up" onClick={() => setProject(false)} />
                <ProjectList>
                  {projects != null && projects.length !== 0 ?
                    projects.map((project) => {
                      return (
                        <ProjectOne key={project.id} onClick={() => {
                          setTitleProject(project.title);
                          setIdProject(project.id);
                          setProject(false);
                        }}>
                          <TextBlock>
                            <span>{project.title}</span>
                            <div>{t("pages.calendar.project")}</div>
                          </TextBlock>
                        </ProjectOne>
                      );
                    })
                    :
                    <>{setProject(false)}</>
                  }
                </ProjectList>
              </>
              :
              <img src={Down} alt="Down" onClick={() => {
                setCategory(false);
                setProject(true);
                setCalendar(false);
              }} />}
          </DivInput>
        </BlockInput>

        <BlockInput>
          <span>{t("pages.calendar.taskName")}</span>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input height={56} register={register("nameTask")} />
          </Form>
        </BlockInput>

        <AuthorAndDeadline>
          <BlockInput>
            <span>{t("pages.calendar.performer")}</span>
            <DivInput>
              <span>{emailPerformer}</span>
              {isPerformer ?
                <>
                  <img src={Up} alt="Up" onClick={() => setPerformer(false)} />
                  <UserList>
                    {userList !== null && userList.length !== 0 ?
                      userList.map((user) => {
                        return (
                          <UserOne onClick={() => {
                            setEmailPerformer(user.email);
                            setIdPerformer(user.id);
                            setPerformer(false)
                          }}>
                            <img src={user.avatar == null ? defaultAva : `http://192.168.100.30:8090 ${user.avatar.path}`} alt="Avatar" />
                            <div>{user.email}</div>
                          </UserOne>
                        );
                      })
                      :
                      <>{() => setPerformer(false)}</>
                    }
                  </UserList>
                </>
                :
                <img src={Down} alt="Down" onClick={() => setPerformer(true)} />
              }
            </DivInput>
          </BlockInput>

          <Deadline>
            <span>{t("pages.calendar.deadline")}</span>
            <DivInput>
              <DivContentTitle>
                {valueCalendar.getDate()}.{valueCalendar.getMonth()+1}.{valueCalendar.getFullYear()}
                <img src={Calendaring} alt="Calendar" onClick={() => {
                  setProject(false);
                  setCategory(false);
                  setCalendar(!isCalendar);
                }}/>

                {isCalendar ?
                  <MiniCalendar>
                    <Calendar onChange={onChangeCalendar} value={valueCalendar} minDate={new Date()} className="react-calendar"/>
                  </MiniCalendar>
                  :
                  <>{() => setCalendar(false)}</>
                }
              </DivContentTitle>
            </DivInput>
          </Deadline>
        </AuthorAndDeadline>

        <BlockInput>
          <span>{t("pages.calendar.description")}</span>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input height={112} register={register("description")} />
            <UrgentlyContainer>
              <span>{t("pages.calendar.urgently.title")}</span>

              <UrgentBlock onClick={() => setUrgently(3)} color={isUrgently === 3 ? `${colors.lightAcent}` : `${colors.chooseBackground}`}>
                <img src={VeryUrgently} alt="VeryUrgently" />
                <UrgentText>{t("pages.calendar.urgently.veryUrgent")}</UrgentText>
                {isUrgently === 3 ? <img src={CheckComplete} alt="CheckComplete"/> : null}
              </UrgentBlock>

              <UrgentBlock onClick={() => setUrgently(2)} color={isUrgently === 2 ? `${colors.lightAcent}` : `${colors.chooseBackground}`}>
                <img src={Urgently} alt="Urgently" />
                <UrgentText>{t("pages.calendar.urgently.urgent")}</UrgentText>
                {isUrgently === 2 ? <img src={CheckComplete} alt="CheckComplete"/> : null}
              </UrgentBlock>

              <UrgentBlock onClick={() => setUrgently(1)} color={isUrgently === 1 ? `${colors.lightAcent}` : `${colors.chooseBackground}`}>
                <img src={MayWait} alt="MayWait" />
                <UrgentText>{t("pages.calendar.urgently.mayWait")}</UrgentText>
                {isUrgently === 1 ? <img src={CheckComplete} alt="CheckComplete"/> : null}
              </UrgentBlock>

              <UrgentBlock onClick={() => setUrgently(0) } color={isUrgently === 0 ? `${colors.lightAcent}` : `${colors.chooseBackground}`}>
                <img src={NotUrgently} alt="NotUrgently" />
                <UrgentText>{t("pages.calendar.urgently.notUrgent")}</UrgentText>
                {isUrgently === 0 ? <img src={CheckComplete} alt="CheckComplete"/> : null}
              </UrgentBlock>
            </UrgentlyContainer>

            <ButtonContainer>
              <button id="one" onClick={onClose}>{t("pages.calendar.cancel")}</button>
              <button id="two" type="submit">{t("pages.calendar.create")}</button>
            </ButtonContainer>
          </Form>
        </BlockInput>
      </CreateContainer>
    </Modal>
  );
};

export default CreateTaskModal;
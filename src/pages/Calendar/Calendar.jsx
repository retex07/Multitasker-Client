import CreateTaskModal from "components/Calendar/Modal/CreateTaskModal/CreateTaskModal";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CategoryTitle from "components/Calendar/CategoryTitle";
import MontData from "components/Calendar/MonthData";
import PageWrapper from "components/PageWrapper";
import Back from "static/img/Back.svg";
import Next from "static/img/Next.svg";
import Plus from "static/img/Plus.svg";
import { useCalendarAction } from "store/calendar/useCalendarAction";

import TableCalendar from "../../components/Calendar/TableCalendar";
import {
  CalendarContainer,
  ColorsProjects,
  CreateTask,
  DataBlock,
  NavBlock
} from "./Styled";

const Calendar = () => {
  const today = new Date();

  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [isOpen, setOpen] = useState(false);

  const { getCategoryListData } = useCalendarAction();
  const { getListTasksData } = useCalendarAction();
  const { setUserFilterData } = useCalendarAction();

  useEffect(() => {
    getCategoryListData();
    getListTasksData();
    setUserFilterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tasksList = useSelector((state) => state.calendar.listTasks);
  const categoryList = useSelector((state) => state.calendar.categoryList);
  const userList = useSelector((state) => state.calendar.userList);
  if (categoryList === null || tasksList === null || userList === null) return null;

  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };
  const dayWeek = (day, month, year) => {
    return new Date(year, month, day).getDay();
  };

  const start = dayWeek(0, month, year);
  const endDay = daysInMonth(month + 1, year);
  const endDayBack = daysInMonth(month, year);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <PageWrapper>
      <CalendarContainer>
        <NavBlock>
          <DataBlock>

            <img src={Back} alt="Back" onClick={() => {
              if (month >= 1) setMonth(month - 1);
              else {
                setYear(year - 1);
                setMonth(11);
              }
            }} />

            <div><MontData data={month} />, {year}</div>
            <img src={Next} alt="Next" onClick={() => {
              if (month <= 10) setMonth(month + 1);
              else {
                setYear(year + 1);
                setMonth(0);
              }
            }} />
          </DataBlock>

          <ColorsProjects>
            <CategoryTitle categoryList={categoryList} />
          </ColorsProjects>

          <CreateTask onClick={() => setOpen(true)}>
            <img src={Plus} alt="Plus" />
            Создать задачу
          </CreateTask>
        </NavBlock>

        <TableCalendar start={start} endDayBack={endDayBack} endDay={endDay} day={today.getDate()} month={month} year={year} today={today} tasksList={tasksList}/>

        {isOpen ? <CreateTaskModal onClose={onClose} categoryList={categoryList} userList={userList} /> : null}
      </CalendarContainer>
    </PageWrapper>
  );
};

export default Calendar;

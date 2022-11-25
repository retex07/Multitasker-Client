import styled from "styled-components";

import { colors } from "configs/colors";
import { makeTextStyles } from "utils/styles/makeTextStyles";


export const CreateContainer = styled.div`
  min-height: 612px;
  width: 544px;
  padding: 24px;
`;

export const MainName = styled.div`
  display: inline-flex;
  width: 100%;
  min-height: 34px;

  span {
    text-align: left;
    width: 556px;
    height: 34px;
    color: ${colors.black};
    ${makeTextStyles(24, 500)};
  }

  img {
    float: right;
    cursor: pointer;
    margin-left: 8px;
  }
`;

export const BlockInput = styled.div`
  margin-top: 16px;
  width: 100%;

  span {
    color: ${colors.label};
    ${makeTextStyles(16, 500)};
  }

  img {
    cursor: pointer;
    float: right;
  }
`;

export const DivInput = styled.div`
  height: 24px;
  padding: 16px;
  margin-top: 8px;
  background: ${colors.white};
  border: 1px solid ${colors.cardsStroke};
  border-radius: 5px;

  span {
    ${makeTextStyles(16, 500)};
    color: ${colors.black};
  }
`;

export const CategoryList = styled.div`
  position: fixed;
  top: 148px;
  left: 574px;
  max-width: 388px;
  max-height: 274px;
  background: ${colors.white};
  box-shadow: 0 3px 15px rgba(4, 3, 31, 0.15);
  border-radius: 5px;
  padding: 16px;
  overflow: auto;
`;

export const CategoryOne = styled.div`
  display: flex;
  width: 334px;
  height: 54px;
  padding: 16px;
  background: ${colors.white};
  border: 1px solid ${colors.cardsStroke};
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;
`;
export const TextBlock = styled.div`
  width: 302px;
  height: 54px;

  span {
    ${makeTextStyles(20, 500)};
    color: ${colors.black};
  }

  div {
    margin-top: 8px;
    ${makeTextStyles(16, 400)};
    color: ${colors.cardsSecondaryText};
  }
`;

export const ColorCategory = styled.div`
  width: 24px;
  height: 54px;
  background: ${props => props.color};
  border-radius: 8px;
`;

export const ProjectOne = styled.div`
  width: 334px;
  height: 54px;
  padding: 16px;
  background: ${colors.white};
  border: 1px solid ${colors.cardsStroke};
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;
`;

export const UserOne = styled.div`
  display: flex;
  width: 334px;
  height: 48px;
  padding: 16px;
  background: ${colors.white};
  border: 1px solid ${colors.cardsStroke};
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;

  img {
    width: 48px;
    height: 48px;
    border-radius: 180px;
    margin-right: 8px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    ${makeTextStyles(14, 400)};
    color: ${colors.gray};
  }
`;

export const ProjectList = styled.div`
  position: absolute;
  top: 252px;
  left: 574px;
  max-width: 388px;
  max-height: 274px;
  background: ${colors.white};
  box-shadow: 0 3px 15px rgba(4, 3, 31, 0.15);
  border-radius: 5px;
  padding: 16px;
  overflow: auto;
`;

export const UserList = styled.div`
  position: absolute;
  top: 452px;
  left: -410px;
  max-width: 388px;
  max-height: 274px;
  background: ${colors.white};
  box-shadow: 0 3px 15px rgba(4, 3, 31, 0.15);
  border-radius: 5px;
  padding: 16px;
  overflow: auto;
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 8px;

  img {
    cursor: pointer;
    float: right;
  }
`;

export const AuthorAndDeadline = styled.div`
  display: flex;
  width: 100%;
`;

export const Deadline = styled.div`
  margin-top: 16px;
  margin-left: 8px;
  width: 100%;

  img {
    cursor: pointer;
    float: right;
  }

  span {
    color: ${colors.label};
    ${makeTextStyles(16, 500)};
  }
`;

export const DivContentTitle = styled.div`
  ${makeTextStyles(16, 500)};
  color: ${colors.black};
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 24px;
  width: 100%;

  #one {
    width: 108px;
    height: 48px;
    cursor: pointer;
    margin-left: 211px;
    border: 1px solid ${colors.lightGrey};
    background: ${colors.white};
    border-radius: 5px;
    ${makeTextStyles(16, 500)};
    color: ${colors.coldGray};
  }

  #two {
    width: 237px;
    height: 48px;
    background: ${colors.logoColor};
    border: 2px solid ${colors.logoColor};
    box-shadow: 0 7px 12px rgba(4, 3, 31, 0.1);
    border-radius: 5px;
    margin-left: 24px;
    cursor: pointer;
    ${makeTextStyles(16, 500)};
    color: ${colors.white};
  }
`;

export const UrgentlyContainer = styled.div`
  height: 274px;
  margin-top: 16px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }
`;

export const UrgentBlock = styled.div`
  display: flex;
  padding: 16px;
  height: 24px;
  background: ${props => props.color};
  border-radius: 10px;
  margin-top: 8px;
`;

export const UrgentText = styled.div`
  ${makeTextStyles(16, 400)};
  color: ${colors.logoColor};
  width: 456px;
  height: 22px;
  margin-top: 3px;
`;

export const MiniCalendar = styled.div`
  position: absolute;
  top: 452px;
  left: 574px;
  width: 325px;
  background: ${colors.white};
  box-shadow: 0 3px 15px rgba(4, 3, 31, 0.15);
  border-radius: 5px;
  padding: 16px;
`;

export const SelectData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 24px;

  div {
    width: 165px;
    text-align: center;
    ${makeTextStyles(20, 600)};
    color: ${colors.black};
  }

  img {
    width: 28px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  table-layout: auto;
`;

export const Tr = styled.tr`
  th {
    width: 46.43px;
    height: 38.29px;
    ${makeTextStyles(12, 400)};
    color: ${colors.label};
    justify-content: center;
    align-items: center;
  }

  td {
    width: 46.43px;
    height: 38.29px;
  }
`;
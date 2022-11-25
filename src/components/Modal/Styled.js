import styled from "styled-components";

import { colors } from "../../configs/colors";


export const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(105, 105, 105, 0.5);
  background-size: cover;
`

export const ModalCard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  max-height: 830px;
  overflow: auto;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  background: ${colors.white};
`

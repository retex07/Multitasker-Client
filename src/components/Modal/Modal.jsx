import React, {useEffect, useMemo} from "react";
import {createPortal} from "react-dom";

import { ModalCard, ModalContainer } from "./Styled";


const modalRootElement = document.getElementById("modal");

const Modal = ({isOpen, children}) => {
  const element = useMemo(() => document.createElement("div"),[])

  useEffect(() => {
    if (isOpen){
      modalRootElement.appendChild(element);

      return () => {
        modalRootElement.removeChild(element);
      };
    }
  });

  return isOpen ?
    createPortal(
      <ModalContainer>
        <ModalCard>{children}</ModalCard>
      </ModalContainer>,
      element)
    :
    null;
};


export default Modal;

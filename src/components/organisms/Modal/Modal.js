import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import { Button } from "components/atoms/Button/Button";

import { ModalContent, ModalWrapper } from "./Modal.styles";

const modalContainer = document.querySelector("#modal-container");

const Modal = ({ handleClose, children }) => {
  const div = document.createElement("div");

  useEffect(() => {
    modalContainer.appendChild(div);
    return () => {
      modalContainer.removeChild(div);
    };
  }, [div]);

  return ReactDOM.createPortal(
    <ModalContent>
      <ModalWrapper>
        {children}
        <Button onClick={handleClose}>Close</Button>
      </ModalWrapper>
    </ModalContent>,
    div
  );
};

export default Modal;

//import { useState } from "react";
import CerrarBtn from "../img/cerrar.svg";

const Modal = ({ setModal, animateModal }) => {
  const hideModal = () => {
    setModal(false);
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="Close button" onClick={hideModal} />
      </div>

      <form className={`formulario ${animateModal ? "animar" : ""}`}>
        <legend className="modal-legend">New Expense</legend>
      </form>
    </div>
  );
};

export default Modal;

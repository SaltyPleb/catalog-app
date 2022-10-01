import React, { useContext } from "react";
import { GrClose } from "react-icons/gr";
import { Context } from "../..";

const DiscardSystem = ({ setIsOpen }) => {
  const { constructor } = useContext(Context);

  const discardSystem = () => {
    constructor.setCurrentComponents("none", "clear")
    setIsOpen(false)
  }
  return (
    <div className="c-modal-container">
      <div className="background" onClick={() => setIsOpen(false)} />
      <div className="modal_wrapper">
        <div className="main_modal">
          <div className="main_modal__header">
            <h5 className="heading">Dialog</h5>
          </div>
          <button
            className="main_modal__close"
            onClick={() => setIsOpen(false)}
          >
            <GrClose style={{ marginBottom: "-3px" }} />
          </button>
          <div className="main_modal__content">
            Are you sure you want to delete the whole system?
          </div>
          <div className="main_modal__actions">
            <div className="actions_wrapper">
              <button
                className="actions_wrapper__delete"
                onClick={() => discardSystem()}
              >
                Delete
              </button>
              <button
                className="actions_wrapper__cancel"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscardSystem;

import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedItem}
    contentLabel="Selected item"
    onRequestClose={props.clearSelItem}
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">You are to</h3>
    {props.selectedItem && <p className="modal__body">{props.selectedItem}</p>}
    <h3>Now</h3>
    <button onClick={props.clearSelItem}>Done</button>
  </Modal>
);

export default OptionModal;

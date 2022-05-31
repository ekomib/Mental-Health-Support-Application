import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedItem}
    contentLabel="Selected item"
    onRequestClose={props.clearSelItem}
  >
    <h3>Selected</h3>
    {props.selectedItem && <p>{props.selectedItem}</p>}
    <button onClick={props.clearSelItem}>Done</button>
  </Modal>
);

export default OptionModal;

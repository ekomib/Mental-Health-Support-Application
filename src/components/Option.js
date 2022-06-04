import React from "react";
const Option = (props) => (
  <div className="option">
    <p className="option__text">
      {props.numbering + 1}. {props.optionText}
    </p>
    <button
      className="button button--link option__text"
      onClick={(e) => {
        props.handleDeleteSingle(props.optionText);
      }}
    >
      Delete
    </button>
  </div>
);

export default Option;

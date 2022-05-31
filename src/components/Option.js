import React from "react";
const Option = (props) => {
  return (
    <div>
      {props.numbering + 1}. {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteSingle(props.optionText);
        }}
      >
        Delete
      </button>
    </div>
  );
};
export default Option;

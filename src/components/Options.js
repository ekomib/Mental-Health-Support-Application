import React from "react";
import Option from "./Option";
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDelete}>Remove All</button>
      {props.options.map((option, index) => (
        <Option
          key={option}
          optionText={option}
          numbering={index}
          handleDeleteSingle={props.handleDeleteSingle}
        />
      ))}
    </div>
  );
};

export default Options;

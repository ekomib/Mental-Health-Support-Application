import React from "react";

const Action = (props) => (
  <div>
    <button
      className="big-button"
      disabled={props.btnMode.length === 0}
      onClick={props.choiceSupport}
    >
      What Should I do Now?
    </button>
  </div>
);

export default Action;

import React from "react";

const Action = (props) => (
  <div>
    <button disabled={props.btnMode.length === 0} onClick={props.choiceSupport}>
      What Should I do?
    </button>
  </div>
);

export default Action;

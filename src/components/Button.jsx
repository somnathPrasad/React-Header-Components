import React from "react";

function Button(props) {
  return (
    <div>
      <button className={props.className}>{props.name}</button>
    </div>
  );
}
export default Button;

import React from "react";
import "../styles.css";

function DropdownContent(props) {
  return (
    <a href="#" className="no-text-decoration">
      {props.content}
    </a>
  );
}
export default DropdownContent;

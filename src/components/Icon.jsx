import React from "react";
import "../styles.css";
import { AvatarFb } from "./Avatar";

var url =
  "https://lh3.googleusercontent.com/ogw/ADGmqu9fD0Z3oOYjrmhfq4-IWiiRqcNUmUW1O_oWpNJC=s32-c-mo";

function RoundIcon(props) {
  return (
    <span className="height-40 width-40 inline-block margin-right margin-left">
      <div className="height-40 width-40 flex-display align-items-center justify-content fb-grey box-sides-circled hover-grey-2">
        {props.icon}
      </div>
    </span>
  );
}

function SquareIcon(props) {
  return (
    <li className="align-items-center justify-content">
      <a href={props.url}>{props.icon}</a>
    </li>
  );
}
export { RoundIcon, SquareIcon };

import React from "react";
import "../styles.css";
import { AvatarFb } from "./Avatar";

var url =
  "https://lh3.googleusercontent.com/ogw/ADGmqu9fD0Z3oOYjrmhfq4-IWiiRqcNUmUW1O_oWpNJC=s32-c-mo";

function UserInfoBox(props) {
  return (
    <div className="flex-display align-items-center justify-content width-111 height-50">
      <a
        href={url}
        className=" height-40 justify-content flex-display no-text-decoration align-items-center white-text font-weight-600 hover-bg-grey box-sides-circled width-100-percent"
      >
        <AvatarFb src="https://lh3.googleusercontent.com/ogw/ADGmqu9fD0Z3oOYjrmhfq4-IWiiRqcNUmUW1O_oWpNJC=s32-c-mo" />
        <span className="left-padding-10  ">Somnath</span>
      </a>
    </div>
  );
}
export default UserInfoBox;

import React, { useState } from "react";
import "../styles.css";
import DropDown from "./DropDown";

function Avatar(props) {
  const [dropdown, setDropdown] = useState("none");

  return (
    <div
      onMouseOver={() => setDropdown("block")}
      onMouseOut={() => setDropdown("none")}
      className="avatar-container-circle"
    >
      <img
        id="avatar"
        className="img-circle z-axis circle-border shadow hover"
        src={props.img}
        alt="user"
      />
      <DropDown display={dropdown} />
    </div>
  );
}

function BrandLogo(props) {
  return (
    <div className="brand-logo-container">
      <img className="brand-logo img-circle" src={props.src} alt="" />
    </div>
  );
}

function AvatarFb(props) {
  return (
    <img className="img-circle width-28 height-28" src={props.src} alt="User" />
  );
}
export default Avatar;
export { BrandLogo, AvatarFb };

import React from "react";
import "../styles.css";
import Avatar, { BrandLogo, AvatarFb } from "./Avatar";
import Search from "./Search";
import Button from "./Button";
import NavigationButtons from "./NavigationButtons";
import UserInfoBox from "./UserInfoBox";
import { RoundIcon } from "./Icon";

function Header(props) {
  return (
    <div
      className="header justify-space-between"
      style={{ backgroundColor: props.backgroundColor }}
    >
      <Button name="select goal" className="header-button" />

      <div className="heading-h1">
        <h1 className="heading">Track Your Progress</h1>
      </div>

      <Avatar img="https://lh3.googleusercontent.com/ogw/ADGmqu9fD0Z3oOYjrmhfq4-IWiiRqcNUmUW1O_oWpNJC=s32-c-mo" />
    </div>
  );
}
function FBHeader(props) {
  return (
    <div
      className="header shadow justify-space-between flex-display align-items-center padding-bottom-0 padding-top-0"
      style={{ backgroundColor: props.backgroundColor }}
    >
      <div className="brand-logo-and-search">
        <BrandLogo src="https://lh3.googleusercontent.com/ogw/ADGmqu9fD0Z3oOYjrmhfq4-IWiiRqcNUmUW1O_oWpNJC=s32-c-mo" />
        <Search />
      </div>
      <div className="flex-display align-items-center justify-content">
        <NavigationButtons />
      </div>
      <div className="flex-display row-flex align-items-center">
        <UserInfoBox />
        <RoundIcon icon={<i class="fa fa-plus" aria-hidden="true"></i>} />
        <RoundIcon
          icon={
            <svg viewBox="0 0 28 28" alt="" class="" height="20" width="20">
              <path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"></path>
            </svg>
          }
        />
        <RoundIcon icon={<i class="fa fa-bell"></i>} />
        <RoundIcon
          icon={
            <i class="fa fa-sort-down" style={{ paddingBottom: "8px" }}></i>
          }
        />
      </div>
    </div>
  );
}
export default Header;
export { FBHeader };

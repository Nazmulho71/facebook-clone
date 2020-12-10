import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import FlagOutlinedIcon from "@material-ui/icons/FlagOutlined";
import OndemandVideoRoundedIcon from "@material-ui/icons/OndemandVideoRounded";
import StorefrontRoundedIcon from "@material-ui/icons/StorefrontRounded";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveRoundedIcon from "@material-ui/icons/NotificationsActiveRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import { useStateValue } from "./StateProvider";
import "./Header.css";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://vectorlogo4u.com/wp-content/uploads/2019/06/facebook-icon-2019-logo.png"
          alt=""
        />
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>

      <div className="header__center">
        <div className="header__option--active">
          <HomeRoundedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <OndemandVideoRoundedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontRoundedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveRoundedIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreRoundedIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
// https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg -- Login

import React from "react";
import LocalHospitalRoundedIcon from "@material-ui/icons/LocalHospitalRounded";
import FlagRoundedIcon from "@material-ui/icons/FlagRounded";
import PeopleIcon from "@material-ui/icons/People";
import ChatRoundedIcon from "@material-ui/icons/ChatRounded";
import StorefrontRoundedIcon from "@material-ui/icons/StorefrontRounded";
import OndemandVideoRoundedIcon from "@material-ui/icons/OndemandVideoRounded";
import ArrowDropDownCircleRoundedIcon from "@material-ui/icons/ArrowDropDownCircleRounded";
import { useStateValue } from "./StateProvider";
import SidebarRow from "./SidebarRow";
import "./Sidebar.css";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow
        Icon={LocalHospitalRoundedIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={FlagRoundedIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatRoundedIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontRoundedIcon} title="Marketplace" />
      <SidebarRow Icon={OndemandVideoRoundedIcon} title="Videos" />
      <SidebarRow Icon={ArrowDropDownCircleRoundedIcon} title="See More" />
    </div>
  );
}

export default Sidebar;

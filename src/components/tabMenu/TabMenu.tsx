import { Box } from "@mui/material";
import HomeIcon from "@components/icons/HomeIcon";
import LikeIcon from "@components/icons/LikeIcon";
import UserIcon from "@components/icons/UserIcon";
import MessageIcon from "@components/icons/MessageIcon";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./TabMenu.scss";

const TabMenu = () => {
  const { pathname } = useLocation();

  return (
    <Box className="tabMenuBox">
      <NavLink to={"/dashboard"} className="nav-link">
        <HomeIcon fill={pathname === "/dashboard" ? "#554CB6" : "#FFFFFF"} />
      </NavLink>
      <NavLink to={"/chat"} className="nav-link">
        <MessageIcon fill={pathname === "/chat" ? "#554CB6" : "#FFFFFF"} />
      </NavLink>
      <NavLink to={"/search"} className="nav-link">
        <LikeIcon fill={pathname === "/search" ? "#554CB6" : "#FFFFFF"} />
      </NavLink>
      <NavLink to={"/profile"} className="nav-link">
        <UserIcon fill={pathname.includes("profile") ? "#554CB6" : "#FFFFFF"} />
      </NavLink>
    </Box>
  );
};

export default TabMenu;

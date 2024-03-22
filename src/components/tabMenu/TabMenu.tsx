import { Box } from "@mui/material";
import HomeIcon from "@components/icons/HomeIcon";
import LikeIcon from "@components/icons/LikeIcon";
import UserIcon from "@components/icons/UserIcon";
import MessageIcon from "@components/icons/MessageIcon";
import "./TabMenu.scss";

const TabMenu = () => {
  return (
    <Box style={{ zIndex: 10, border: "solid 1px red" }}>
      <HomeIcon fill="red" />
      <MessageIcon fill="red" />
      <LikeIcon fill="red" />
      <UserIcon fill="red" />
    </Box>
  );
};

export default TabMenu;

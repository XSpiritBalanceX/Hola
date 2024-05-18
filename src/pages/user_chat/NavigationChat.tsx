import { Box, Button, Avatar, Badge } from "@mui/material";
import { useNavigate } from "react-router-dom";
import user from "@assets/user.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { styled } from "@mui/material/styles";
import { INavigationChatProps } from "./TypesUserChat";
import "./UserChatPage.scss";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#20DC55",
    color: "#20DC55",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    marginRight: "-10px",
    "&::after": {
      position: "absolute",
      top: "-1px",
      left: "-0.5px",
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const NavigationChat = ({ online, image, name }: INavigationChatProps) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/chat");
  };

  return (
    <Box className="userInformationBox">
      <Button onClick={handleNavigate} type="button" className="buttonNavigate">
        <ArrowBackIosNewIcon />
      </Button>
      {online ? (
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          variant="dot"
          className="userBadge"
        >
          <p className="userName">{name}</p>
        </StyledBadge>
      ) : (
        <p className="userName">{name}</p>
      )}
      <Avatar src={image || user} alt="user" />
    </Box>
  );
};

export default NavigationChat;

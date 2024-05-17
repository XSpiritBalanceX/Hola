import { Box, Avatar, Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import "./ChatsPage.scss";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#20DC55",
    color: "#20DC55",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,

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

interface IItemChatProps {
  id: number;
  image: string;
  name: string;
  messages: { id: number; message: string; time: string; read?: boolean }[];
}

const ItemChat = ({ id, image, name, messages }: IItemChatProps) => {
  const navigate = useNavigate();

  const handleOpenChat = (id: number) => {
    navigate(`/chat/${id}`);
  };

  const classMessage: string = classNames("", {
    lastMessage: messages[messages.length - 1].read,
    newMessage: !messages[messages.length - 1].read,
  });

  return (
    <Box className="messageBox" onClick={() => handleOpenChat(id)}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        variant="dot"
        className="userBadge"
      >
        <Avatar alt="user" src={image} className="userAvatar" />
      </StyledBadge>
      <Box className="nameTimeMessageBox">
        <Box className="nameTimeBox">
          <p className="nameUser">{name}</p>
          <p className="messageTime">{messages[messages.length - 1].time}</p>
        </Box>
        <Box className="lastMessageBox">
          <p className={classMessage}>
            {messages[messages.length - 1].message}
          </p>
          {!messages[messages.length - 1].read && (
            <p className="newMessageTooltip"></p>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ItemChat;

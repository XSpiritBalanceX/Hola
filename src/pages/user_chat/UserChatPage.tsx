import { useState, useEffect } from "react";
import {
  Container,
  Button,
  Box,
  Avatar,
  Badge,
  TextField,
} from "@mui/material";
import { useParams } from "react-router-dom";
import Loader from "@components/loader/Loader";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import user from "@assets/user.png";
import CustomMessageBox from "@components/messageBox/CustomMessageBox";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import moment from "moment";
import "./UserChatPage.scss";

const mockData = [
  {
    id: 1,
    name: "Paul",
    image: "https://www.kino-teatr.ru/acter/album/52909/929591.jpg",
    messages: [
      { id: 1, message: "Hi", time: "15:20" },
      { id: 2, message: "Hello", time: "15:22" },
      { id: 1, message: "How are you", time: "15:25" },
      { id: 2, message: "Good", time: "16:10" },
      { id: 1, message: "How is your weather", time: "16:20", read: true },
    ],
    online: false,
  },
  {
    id: 3,
    name: "Mike",
    image:
      "https://www.telestar.fr/wp-content/uploads/telestarv2/2024/02/Under-the-dome-Mike-Vogel-J-aimerais-que-tout-s-arrange-entre-Barbie-et-Julia-Video.jpg",
    messages: [
      { id: 3, message: "Hi", time: "15:20" },
      { id: 2, message: "Hello", time: "15:21" },
      { id: 3, message: "How are you", time: "15:28" },
      { id: 2, message: "Good", time: "15:35" },
      { id: 3, message: "Nice", time: "15:40", read: false },
    ],
    online: true,
  },
  {
    id: 4,
    name: "Daniel",
    image:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/ebf9dcd7-66b4-41c2-816d-bf6f00500a0d/x178",
    messages: [
      { id: 4, message: "Hi", time: "11:20" },
      { id: 2, message: "Hello", time: "12:20" },
      { id: 4, message: "How are you", time: "12:23" },
      { id: 2, message: "Good", time: "12:25" },
      { id: 4, message: "Me too", time: "13:20", read: true },
    ],
    online: true,
  },
  {
    id: 5,
    name: "Matt",
    image:
      "https://rus.team/images/article/58829/avatar_16x9.webp?actual=1604332666",
    messages: [
      { id: 5, message: "Hi", time: "17:20" },
      { id: 2, message: "Hello", time: "17:28" },
      { id: 5, message: "How are you", time: "17:59", read: true },
    ],
    online: false,
  },
  {
    id: 6,
    name: "Brandon",
    image: "",
    messages: [
      { id: 5, message: "Hi", time: "17:20" },
      { id: 2, message: "Hello", time: "17:28" },
      { id: 5, message: "How are you", time: "17:59", read: true },
    ],
    online: true,
  },
];

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

interface IMessagesList {
  id: number;
  message: string;
  time: string;
  read?: boolean;
}

const UserChatPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const userID = localStorage.getItem("hola_user_id");

  const [messagesList, setMessagesList] = useState<IMessagesList[] | null>(
    null
  );
  const [newMessage, setNewMessage] = useState("");

  const data = mockData.find((el) => el.id === Number(id));

  useEffect(() => {
    if (data) {
      setMessagesList(data.messages);
    }

    // eslint-disable-next-line
  }, []);

  const handleNavigate = () => {
    navigate("/chat");
  };

  const handleReply = (id: number) => {
    console.log(id);
  };

  const handleTypeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.currentTarget.value);
  };

  const handleSendMessage = () => {
    if (messagesList) {
      const copyData = messagesList.slice();
      const currentMessage = {
        id: Number(userID),
        message: newMessage,
        time: moment().format("HH:mm"),
      };
      copyData.push(currentMessage);
      setMessagesList(copyData);
      setNewMessage("");
    }
  };

  return (
    <>
      <Loader isLoading={data ? false : true} />
      <Container className="userChatContainer">
        {data && (
          <>
            <Box className="userInformationBox">
              <Button
                onClick={handleNavigate}
                type="button"
                className="buttonNavigate"
              >
                <ArrowBackIosNewIcon />
              </Button>
              {data.online ? (
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  variant="dot"
                  className="userBadge"
                >
                  <p className="userName">{data.name}</p>
                </StyledBadge>
              ) : (
                <p className="userName">{data.name}</p>
              )}
              <Avatar src={data.image || user} alt="user" />
            </Box>
            <Box className="messagesContainer">
              <Box className="messagesBox">
                {messagesList &&
                  messagesList.map((el, ind) => {
                    const splitTime = el.time.split(":");
                    const currentDate = new Date();
                    currentDate.setHours(Number(splitTime[0]));
                    currentDate.setMinutes(Number(splitTime[1]));
                    return (
                      <CustomMessageBox
                        key={ind}
                        id={ind}
                        position={Number(userID) === el.id ? "right" : "left"}
                        type="text"
                        text={el.message}
                        date={currentDate}
                        replyButton={true}
                        removeButton={true}
                        dateString={el.time}
                        onReplyClick={handleReply}
                        classNameMessage={
                          Number(userID) === el.id
                            ? "userMessage"
                            : "opponentMessage"
                        }
                      />
                    );
                  })}
              </Box>
              <Box className="controllerBox">
                <TextField
                  type="search"
                  value={newMessage}
                  onChange={handleTypeMessage}
                  className="messageField"
                />
                <Button
                  type="button"
                  onClick={handleSendMessage}
                  className="sendButton"
                >
                  <ArrowUpwardIcon />
                </Button>
              </Box>
            </Box>
          </>
        )}
      </Container>
    </>
  );
};

export default UserChatPage;

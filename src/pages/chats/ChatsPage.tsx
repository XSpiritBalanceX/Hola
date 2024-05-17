import { Box, Container, Avatar, Badge } from "@mui/material";
import { useGetChatsQuery } from "@store/requestApi/chatApi";
import Loader from "@components/loader/Loader";
import CustomError from "@components/error/CustomError";
import { translate } from "@i18n";
import TabMenu from "@components/tabMenu/TabMenu";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
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
  },
];

const ChatsPage = () => {
  const { t } = translate("translate", { keyPrefix: "chatPage" });

  const navigate = useNavigate();

  //const { data, error, isLoading } = useGetChatsQuery();

  const handleOpenChat = (id: number) => {
    navigate(`/chat/${id}`);
  };

  return (
    <>
      {/*  <Loader isLoading={isLoading} />
      {error && !data && <CustomError />} */}
      {
        /* !error && data && */ <Container className="containerChatPage">
          <p className="titleChatPage">{t("messages")}</p>
          <Box className="messagesContainer">
            {mockData.map((el) => (
              <Box
                key={el.id}
                className="messageBox"
                onClick={() => handleOpenChat(el.id)}
              >
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  variant="dot"
                  className="userBadge"
                >
                  <Avatar alt="user" src={el.image} className="userAvatar" />
                </StyledBadge>
                <Box className="nameTimeMessageBox">
                  <Box className="nameTimeBox">
                    <p className="nameUser">{el.name}</p>
                    <p className="messageTime">
                      {el.messages[el.messages.length - 1].time}
                    </p>
                  </Box>
                  <Box className="lastMessageBox">
                    <p
                      className={
                        el.messages[el.messages.length - 1].read
                          ? "lastMessage"
                          : "newMessage"
                      }
                    >
                      {el.messages[el.messages.length - 1].message}
                    </p>
                    {!el.messages[el.messages.length - 1].read && (
                      <p className="newMessageTooltip"></p>
                    )}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
          <TabMenu />
        </Container>
      }
    </>
  );
};

export default ChatsPage;

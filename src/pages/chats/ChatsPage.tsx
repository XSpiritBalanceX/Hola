import { Box, Container } from "@mui/material";
import {
  useGetChatsQuery,
  useGetMatchesQuery,
} from "@store/requestApi/chatApi";
import Loader from "@components/loader/Loader";
import CustomError from "@components/error/CustomError";
import { translate } from "@i18n";
import TabMenu from "@components/tabMenu/TabMenu";
import ItemChat from "./ItemChat";
import UserMatches from "@components/userMatches/UserMatches";
import "./ChatsPage.scss";

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

const ChatsPage = () => {
  const { t } = translate("translate", { keyPrefix: "chatPage" });

  //const { data, error, isLoading } = useGetChatsQuery();

  const {
    data: dataMatches,
    error: errorMatches,
    isLoading: loadingMatches,
  } = useGetMatchesQuery();

  return (
    <>
      <Loader isLoading={loadingMatches} />
      {errorMatches && !dataMatches && <CustomError />}
      {!errorMatches && dataMatches && (
        <Container className="containerChatPage">
          <Box className="matchesContainer">
            <p className="titleMatch">{t("matches")}</p>
            <UserMatches />
          </Box>
          <Box>
            <p className="titleMessages">{t("messages")}</p>
            <Box className="messagesContainer">
              {mockData.map((el) => (
                <ItemChat
                  key={el.id}
                  id={el.id}
                  name={el.name}
                  image={el.image}
                  messages={el.messages}
                  online={el.online}
                />
              ))}
            </Box>
          </Box>
          <TabMenu />
        </Container>
      )}
    </>
  );
};

export default ChatsPage;

import { useState, useEffect, useRef } from "react";
import { Container, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import Loader from "@components/loader/Loader";
import CustomMessageBox from "@components/messageBox/CustomMessageBox";
import ControllersMessage from "@components/controllersUserChat/ControllersMessage";
import NavigationChat from "./NavigationChat";
import ControllersInHeader from "@components/controllersUserChat/ControllersInHeader";
import ControllersChosenMessages from "@components/controllersUserChat/ControllersChosenMessages";
import { IMessagesList, TNewMessage } from "./TypesUserChat";
import { translate } from "@i18n";
import UsersModal from "@components/modal/UsersModal";
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

const UserChatPage = () => {
  const { id } = useParams();
  const { t } = translate("translate", { keyPrefix: "chatPage" });

  const messageRef = useRef<null | HTMLDivElement>(null);

  const userID = localStorage.getItem("hola_user_id");

  const [messagesList, setMessagesList] = useState<IMessagesList[] | null>(
    null
  );
  const [isSelectedMessage, setIsSelectedMessage] = useState(false);
  const [selectedMessages, setSelectedMessages] = useState<number[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const data = mockData.find((el) => el.id === Number(id));

  useEffect(() => {
    if (data) {
      setMessagesList(data.messages);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    messageRef.current &&
      messageRef.current.scrollIntoView({ behavior: "smooth" });
    // eslint-disable-next-line
  }, [messagesList]);

  const handleIsSelectedMessage = (value: boolean) => {
    setIsSelectedMessage(value);
    !value && setSelectedMessages([]);
  };

  const handleReply = (id: number) => {
    console.log(id);
  };

  const handleAddMessage = (new_message: TNewMessage) => {
    if (messagesList) {
      const copyData = messagesList.slice();
      copyData.push(new_message);
      setMessagesList(copyData);
      messageRef.current && messageRef.current.focus();
    }
  };

  const handleClickMessage = (id: number) => {
    setIsSelectedMessage(true);
    const copyData = selectedMessages.slice();
    if (copyData.includes(id)) {
      const index = copyData.indexOf(id);
      index !== -1 && copyData.splice(index, 1);
    } else {
      copyData.push(id);
    }
    setSelectedMessages(copyData);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  return (
    <>
      <Loader isLoading={data ? false : true} />
      <UsersModal
        isOpen={isOpenModal}
        cbCloseModal={handleCloseModal}
        messagesList={messagesList}
        selectedMessages={selectedMessages}
      />
      <Container className="userChatContainer">
        {data && (
          <>
            {!isSelectedMessage && (
              <NavigationChat
                online={data.online}
                image={data.image}
                name={data.name}
              />
            )}
            {isSelectedMessage && (
              <ControllersInHeader
                cbHandleIsSelectedMessage={handleIsSelectedMessage}
                countOfMessages={selectedMessages.length}
              />
            )}
            <Box className="messagesContainer">
              <Box className="messagesBox">
                {messagesList && messagesList.length ? (
                  messagesList.map((el, ind) => {
                    const splitTime = el.time.split(":");
                    const currentDate = new Date();
                    currentDate.setHours(Number(splitTime[0]));
                    currentDate.setMinutes(Number(splitTime[1]));
                    return (
                      <Box
                        key={ind}
                        className="customMessageBox"
                        ref={messageRef}
                      >
                        {isSelectedMessage && (
                          <Box
                            className={
                              selectedMessages.includes(ind)
                                ? "selectedIdentifier"
                                : "identifier"
                            }
                          />
                        )}
                        <CustomMessageBox
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
                          cbHandleClickMessage={handleClickMessage}
                        />
                      </Box>
                    );
                  })
                ) : (
                  <Box className="greetingUserBox">
                    <p>{t("greetingUser", { userName: data.name })}</p>
                  </Box>
                )}
              </Box>
              {!isSelectedMessage && (
                <ControllersMessage cbHandleAddMessage={handleAddMessage} />
              )}
              {isSelectedMessage && (
                <ControllersChosenMessages
                  cbHandleOpenModal={handleOpenModal}
                />
              )}
            </Box>
          </>
        )}
      </Container>
    </>
  );
};

export default UserChatPage;

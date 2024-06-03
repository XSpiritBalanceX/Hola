import { useState, useEffect } from "react";
import { Container, Box, Avatar } from "@mui/material";
import { useParams } from "react-router-dom";
import moment from "moment";
import CustomMessageBox from "@components/messageBox/CustomMessageBox";
import ControlsUsersChat from "./ControlsUsersChat";
import AdminMenu from "@components/adminMenu/AdminMenu";
import "./AdminUsersChat.scss";

const mockChatData = [
  {
    id: 1,
    message: "Hi",
    date: "2023-05-25 15:20",
    photo:
      "https://rus.team/images/article/58829/avatar_16x9.webp?actual=1604332666",
    name: "Matt",
  },
  {
    id: 11,
    message: "Hello",
    date: "2023-05-25 15:22",
    photo:
      "https://gallery.alexandersakulin.com/storage/app/uploads/public/92b/af0/985/thumb__0_800_0_0_auto.jpg",
    name: "Karen",
  },
  {
    id: 1,
    message: "Hi",
    date: "2024-05-27 15:20",
    photo:
      "https://rus.team/images/article/58829/avatar_16x9.webp?actual=1604332666",
    name: "Matt",
  },
  {
    id: 11,
    message: "Hello",
    date: "2024-05-28 15:22",
    photo:
      "https://gallery.alexandersakulin.com/storage/app/uploads/public/92b/af0/985/thumb__0_800_0_0_auto.jpg",
    name: "Karen",
  },
  {
    id: 1,
    message: "How are you",
    date: "2024-05-28 15:25",
    photo:
      "https://rus.team/images/article/58829/avatar_16x9.webp?actual=1604332666",
    name: "Matt",
  },
  {
    id: 11,
    message: "Good",
    date: "2024-05-29 16:10",
    photo:
      "https://gallery.alexandersakulin.com/storage/app/uploads/public/92b/af0/985/thumb__0_800_0_0_auto.jpg",
    name: "Karen",
  },
  {
    id: 1,
    message: "How is your weather",
    date: "2024-05-31 16:20",
    photo:
      "https://rus.team/images/article/58829/avatar_16x9.webp?actual=1604332666",
    name: "Matt",
  },
];

const AdminUsersChat = () => {
  const { userID, companionID } = useParams();

  const [filterWord, setFilterWordWord] = useState("");
  const [correspondence, setCorrespondence] = useState(mockChatData);

  useEffect(() => {
    if (filterWord === "") {
      setCorrespondence(mockChatData);
    } else {
      const filteredData = mockChatData.filter((el) =>
        el.message.toLowerCase().includes(filterWord.toLowerCase())
      );
      setCorrespondence(filteredData);
    }
    // eslint-disable-next-line
  }, [filterWord]);

  const handleClickMessage = () => {};

  const handleFilter = (word: string) => {
    setFilterWordWord(word);
  };

  const dateOfMessage = (currentDate: string, previousDate: string | null) => {
    if (!previousDate) return true;
    const convertCurrentDate = currentDate.split(" ")[0];
    const convertPreviousDate = previousDate.split(" ")[0];
    const momentCurrentDate = moment(convertCurrentDate);
    const momentPreviousDate = moment(convertPreviousDate);
    return (
      momentCurrentDate.date() !== momentPreviousDate.date() ||
      momentCurrentDate.month() !== momentPreviousDate.month()
    );
  };

  return (
    <Container className="adminUsersChatContainer">
      <AdminMenu />
      <Box className="adminUsersChatContent">
        <ControlsUsersChat
          filterWord={filterWord}
          cbHandleFilter={handleFilter}
        />
        <Box className="correspondenceContainer">
          {correspondence.map((el, ind) => {
            const timeMessage = moment(el.date).format("HH:mm");
            const splitTime = timeMessage.split(":");
            const currentDate = new Date();
            currentDate.setHours(Number(splitTime[0]));
            currentDate.setMinutes(Number(splitTime[1]));
            return (
              <Box key={ind} className="correspondenceItem">
                {dateOfMessage(
                  el.date,
                  ind > 0 ? mockChatData[ind - 1].date : null
                ) && (
                  <Box className="dateOfMessageBox">
                    {moment(el.date).year() !== moment().year()
                      ? moment(el.date).format("LL")
                      : moment(el.date).format("MMMM DD")}
                  </Box>
                )}
                <Box
                  className={`userInformation ${
                    el.id === Number(userID) ? "rightItem" : "leftItem"
                  }`}
                >
                  <Avatar src={el.photo} alt="user" className="userPhoto" />
                  <p>{el.name}</p>
                </Box>
                <CustomMessageBox
                  key={ind}
                  id={ind}
                  position={el.id === Number(userID) ? "right" : "left"}
                  type="text"
                  text={el.message}
                  date={currentDate}
                  replyButton={true}
                  removeButton={true}
                  dateString={timeMessage}
                  classNameMessage={
                    el.id === Number(userID) ? "userMessage" : "opponentMessage"
                  }
                  cbHandleClickMessage={handleClickMessage}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default AdminUsersChat;

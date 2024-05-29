import { useState } from "react";
import { Modal, Box, Button, Avatar, Badge } from "@mui/material";
import { IMessagesList } from "@pages/user_chat/TypesUserChat";
import { translate } from "@i18n";
import user from "@assets/user.png";
import CheckIcon from "@mui/icons-material/Check";
import "./Modals.scss";

interface IUsersModalProps {
  isOpen: boolean;
  cbCloseModal: () => void;
  messagesList: IMessagesList[] | null;
  selectedMessages: number[];
}

const mockData = [
  {
    id: 1,
    name: "Paul",
    image: "https://www.kino-teatr.ru/acter/album/52909/929591.jpg",
  },
  {
    id: 3,
    name: "Mike",
    image:
      "https://www.telestar.fr/wp-content/uploads/telestarv2/2024/02/Under-the-dome-Mike-Vogel-J-aimerais-que-tout-s-arrange-entre-Barbie-et-Julia-Video.jpg",
  },
  {
    id: 4,
    name: "Daniel",
    image:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/ebf9dcd7-66b4-41c2-816d-bf6f00500a0d/x178",
  },
  {
    id: 5,
    name: "Matt",
    image:
      "https://rus.team/images/article/58829/avatar_16x9.webp?actual=1604332666",
  },
  {
    id: 6,
    name: "Brandon",
    image: "",
  },
];

const UsersModal = ({
  isOpen,
  cbCloseModal,
  selectedMessages,
  messagesList,
}: IUsersModalProps) => {
  const { t } = translate("translate", { keyPrefix: "chatPage" });

  const [users, setUsers] = useState<number[]>([]);

  const handleCloseModal = () => {
    cbCloseModal();
    setUsers([]);
  };

  const handleAddUser = (id: number) => {
    const copyData = users.slice();
    if (copyData.includes(id)) {
      const index = copyData.indexOf(id);
      index !== -1 && copyData.splice(index, 1);
    } else {
      copyData.push(id);
    }
    setUsers(copyData);
  };

  const handleSendMessages = () => {
    if (messagesList) {
      const filteredData = selectedMessages.map((el) => messagesList[el]);
      console.log(filteredData);
    }
  };

  return (
    <Modal open={isOpen} onClose={handleCloseModal} className="chatModal">
      <Box className="chatModalContent">
        <Box className="usersContentBox">
          {mockData.map((el) => (
            <Box
              key={el.id}
              className={`userBox ${
                users.includes(el.id) ? "selectedUserBox" : ""
              }`}
              onClick={() => handleAddUser(el.id)}
            >
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={users.includes(el.id) && <CheckIcon />}
              >
                <Avatar
                  src={el.image || user}
                  alt="user"
                  className="userAvatar"
                />
              </Badge>
              <p>{el.name}</p>
            </Box>
          ))}
        </Box>
        <Box className="buttonsBox">
          <Button
            type="button"
            className="sendButton"
            onClick={handleSendMessages}
          >
            {t("send")}
          </Button>
          <Button
            type="button"
            onClick={handleCloseModal}
            className="cancelButton"
          >
            {t("cancel")}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default UsersModal;

import { Modal, Box, Button } from "@mui/material";
import { IMessagesList } from "@pages/user_chat/TypesUserChat";
import "./Modals.scss";

interface IUsersModalProps {
  isOpen: boolean;
  cbCloseModal: () => void;
  messagesList: IMessagesList[] | null;
  selectedMessages: number[];
}

const UsersModal = ({ isOpen, cbCloseModal }: IUsersModalProps) => {
  const handleCloseModal = () => {
    cbCloseModal();
  };

  return (
    <Modal open={isOpen} onClose={handleCloseModal}>
      <Box></Box>
    </Modal>
  );
};

export default UsersModal;

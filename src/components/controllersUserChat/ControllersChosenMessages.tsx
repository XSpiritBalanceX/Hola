import { Box, Button } from "@mui/material";
import BucketIcon from "@components/icons/BucketIcon";
import ReplyIcon from "@components/icons/ReplyIcon";
import { IControllersChosenMessagesProps } from "./TypesControllersUserChat";
import "./ControllersUserChat.scss";

const ControllersChosenMessages = ({
  cbHandleOpenModal,
}: IControllersChosenMessagesProps) => {
  const handleOpenModal = () => {
    cbHandleOpenModal();
  };

  return (
    <Box className="controllersChosenMessageBox">
      <Button type="button">
        <BucketIcon fill="#554CB6" />
      </Button>
      <Button type="button" onClick={handleOpenModal}>
        <ReplyIcon fill="#554CB6" />
      </Button>
    </Box>
  );
};

export default ControllersChosenMessages;
